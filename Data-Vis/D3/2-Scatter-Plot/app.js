/**
 * Created by manishgiri on 6/23/17.
 */


// margin
const margin = {top: 10, right: 60, bottom: 60, left: 60};

// SVG values
let width = 1060 - margin.left - margin.right;
let height = 500 - margin.top - margin.bottom;
let padding = 100;

// create div for tooltip
let div = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


// create SVG element
let svg = d3.select(".chart")
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("padding", 10)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(result) {
    "use strict";
    let data = result;
    console.log(data);

    // create scales
    let xScale = d3.scaleTime()
        .domain([d3.max(data.map(row => d3.timeParse("%M:%S")(row.Time))), d3.min(data.map(row => d3.timeParse("%M:%S")(row.Time)))])
    .range([0, width])
        .nice();

    // use for axis
    let yScale = d3.scaleLinear()
        .domain(d3.extent(data, row => row.Place))
        .range([0, height])
        .nice();

    // use for plot
    let yScaleDup = d3.scaleLinear()
        .domain(d3.extent(data, row => row.Place))
        .range([0, height-3])
        .nice();

    // create scatter plot
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d3.timeParse("%M:%S")(d.Time)))
        .attr("cy", d => yScaleDup(+d.Place))
        .attr("r", 6)
        .attr("fill", d => d.Doping ? "#f44336" : "#4caf50")
        .attr("stroke", "black")
        // create tooltips
        .on("mouseover", d => {
            div.transition()
                .duration(300)
                .style("opacity", 0.9)
            div.html(`<span class="about">${d.Name} - ${d.Nationality}</span><br> Time: ${d.Time}, Year: ${d.Year} <br> ${d.Doping}`)
                .style("left", (d3.event.pageX) - 60 + "px")
                .style("top", (d3.event.pageY) - 130 + "px")
        })
        .on("mouseout", d => {
            div.transition()
                .duration(500)
                .style("opacity", 0)
        });


    // create axes
    // x axis
    svg.append("g")
        .attr("class", "axisStyle")
        .attr("transform", "translate(0," + (height+2) + ")")
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%M:%S")));

    // y axis
    svg.append("g")
        .attr("class", "axisStyle" )
        .call(d3.axisLeft(yScale));

    // create axes labels
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0 - (height/2))
        .attr("y", 0 - (margin.left) + 10)
        .attr("dy", "1em")
        .attr("class", "label")
        .style("color", "white")
        .style("text-anchor", "middle")
        .text("Rank")

    svg.append("text")
        .attr("transform", "translate(" + (width/2) + "," + (height + 50) + ")" )
        .style("text-anchor", "middle")
        .attr("class", "label")
        .text("Time")


});
