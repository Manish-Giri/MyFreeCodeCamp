/**
 * Created by manishgiri on 6/21/17.
 */

// margin
    const margin = {top: 20, right: 10, bottom: 20, left: 70}

// SVG values
    let width = 960 - margin.left - margin.right;
    let height = 500 - margin.top - margin.bottom;


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
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", function (result) {
    console.log(result.data);
    let data = result.data;



    // create scales
    let xScale = d3.scaleTime()
        .domain([d3.min(data.map(row => d3.timeParse("%Y-%m-%d")(row[0]))),
            d3.max(data.map(row => d3.timeParse("%Y-%m-%d")(row[0])))])
        .range([0, width]);


    let yScale = d3.scaleLinear()
        .domain([0, d3.max(data.map(row => row[1]))])
        .range([height, 0])


    // create chart
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr("x", d => xScale(d3.timeParse("%Y-%m-%d")(d[0])))
        .attr("y", d => yScale(d[1]))
        .attr("width", width / data.length)
        .attr("height", d => height - yScale(d[1]))
        .on("mouseover", d => {
            // "use strict";
            div.transition()
                .duration(200)
                .style("opacity", 0.9)
            div.html("$" + d3.format(",.2f")(d[1]) + " B <br>" + d3.timeFormat("%B, %Y")(d3.timeParse("%Y-%m-%d")(d[0])))
                .style("left", (d3.event.pageX + 20) + "px")
                .style("top", (d3.event.pageY - 70) + "px")
        })
        .on("mouseout", d => {
            //"use strict";
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });


    // create axes

    // x axis
    svg.append("g")
        .attr("transform", "translate(0, " + (height + 2)  + ")")
        .call(d3.axisBottom(xScale));

    // y axis
    svg.append("g")
        .call(d3.axisLeft(yScale));
})
