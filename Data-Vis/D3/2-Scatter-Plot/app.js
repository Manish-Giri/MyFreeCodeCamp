/**
 * Created by manishgiri on 6/23/17.
 */


// margin
const margin = {top: 20, right: 10, bottom: 20, left: 70};

// SVG values
let width = 960 - margin.left - margin.right;
let height = 500 - margin.top - margin.bottom;



// create SVG element
let svg = d3.select(".chart")
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(result) {
    "use strict";
    let data = result;
    console.log(data);

    console.log(d3.min(data.map(row => d3.timeParse("%M:%S")(row.Time))));
    console.log(d3.max(data.map(row => d3.timeParse("%M:%S")(row.Time))));

    console.log(d3.max(data.map(d => d.Place)));

    // create scales
    let xScale = d3.scaleTime()
        .domain([d3.max(data.map(row => d3.timeParse("%M:%S")(row.Time))), d3.min(data.map(row => d3.timeParse("%M:%S")(row.Time)))])
    .range([0, width])
        .nice();

    let yScale = d3.scaleLinear()
        .domain(d3.extent(data, row => row.Place))
    .range([0, height])
        .nice();

    // create scatter plot
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d3.timeParse("%M:%S")(d.Time)))
    .attr("cy", d => yScale(+d.Place))
    .attr("r", 6)
        .attr("fill", d => d.Doping ? "#ef5350" : "#8bc34a")
    .attr("stroke", "black")


});
