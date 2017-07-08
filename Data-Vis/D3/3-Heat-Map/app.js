const margin = {left: 70, top: 40, right: 40, bottom: 50};
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
const padding = 5;
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const colors = ['#ffffcc', "#ffffb2", "#ffffd9", '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'];


let svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')  
  .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json", function(res) {
    console.log(res);

    let data = res.monthlyVariance.map(d => d);

    // create scales
    let yScale = d3.scaleLinear()
        .domain([1, 13])
        .range([0, height - padding]);

    console.log(yScale(4));

    let xScale = d3.scaleTime()
        .domain(d3.extent(data, obj => d3.timeParse("%Y-%m")(obj.year + "-" + obj.month)))
        .range([padding, width]);

    console.log(d3.timeParse("%Y-%m")("2008-5"));

    let heatScale = d3.scaleQuantile()
        .domain(d3.extent(data, obj => obj.variance))
        .range(colors);

    // create axes
    let yAxis = d3.axisLeft(yScale)
        .tickFormat(d => months[d-1])
        .tickSize(2);

    svg.append('g')
        .call(yAxis)
        .attr("class", "axes" )
        .selectAll('text')
        .attr('y', 17);

    let xAxis = d3.axisBottom(xScale);
    svg.append('g')
    //.attr("class", "axisStyle" )
        .call(xAxis)
        .attr("class", "axes")
        .style("font-size", "13px")
        .attr("transform", "translate(0, " + height + ")");

    // create axis labels
    // X Axis
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 4)
        .attr("class", "label")
        .attr('text-anchor', 'middle')
        .text('Years');

    // Y Axis
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - (margin.left / 2 + margin.top / 2))
        .attr('x', 0 - height/2)
        .attr("class", "label")
        .attr('text-anchor', 'middle')
        .text('Months');


    // create chart
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", obj => xScale(d3.timeParse("%Y-%m")(obj.year + "-" + obj.month)))
        .attr("y", obj => yScale(obj.month))
        .attr("width", 4)
        .attr("height", 35)
        .attr("fill", obj => heatScale(obj.variance))
        .attr("cursor", "pointer");


    // create legend

    // colors
    d3.select('.tile')
        .selectAll('div')
        .data(colors)
        .enter()
        .append("div")
        .style("background", (d, i) => colors[i]);

    // scale
    d3.select('.scale')
        .selectAll('div')
        .data(heatScale.quantiles())
        .enter()
        .append('div')
        .text(d => d.toFixed(1));



});
