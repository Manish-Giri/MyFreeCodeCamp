const width = 1200;
const height = 550;

let svg = d3.select(".chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("https://s3-us-west-2.amazonaws.com/s.cdpn.io/324660/countries.geo.json", function(data) {
    let mercatorProjection = d3.geoMercator().scale(200).translate([width/2, height/2]);

    let path = d3.geoPath().projection(mercatorProjection);

    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path);

    d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json", function(mData) {

        // filter meteorite data based on presence of geometry and year property
        let meteorData = mData.features.filter(obj => obj.geometry && obj.properties.year);

        let scale = d3.scalePow().exponent(1/3)
            .domain(d3.extent(meteorData, function(e) {
                return parseInt(e.properties.mass);
            }))
            .range([1,40]);

        let plotData = meteorData.map(function(data) {
            let geoProjection = mercatorProjection(data.geometry.coordinates);
            let toRet = {
                geometry: data.geometry,
                properties: data.properties,
                year: parseInt(data.properties.year.slice(0,4)),
                geoData: {
                    x: geoProjection[0],
                    y: geoProjection[1],
                    r: scale(+(data.properties.mass))
                }
            }
            //console.log(toRet);
            return toRet;
        });

        // sort data in ascending year
        plotData.sort((a,b) => a.year - b.year);

        let tooltip = d3.select('body').append('div').attr("class", "tooltip").style("opacity", 0);

        svg.selectAll("circle")
            .data(plotData)
            .enter()
            .append("circle")
            .attr("cx", d => d.geoData.x)
            .attr("cy", d => d.geoData.y)
            .attr("r", d => {
                // console.log(d.geoData.r);
                return d.geoData.r
            })
            .on('mouseover', d => {
                // console.log(`${d.properties.name}`);
                tooltip.style('opacity', 0.8);
                tooltip
                    .html(
                        `
                    <span><b>Name: </b>${d.properties.name}</span><br>
                    <span><b>Mass: </b>${d.properties.mass}</span><br>
                    <span><b>Year: </b>${d.year}</span><br>
                    <span><b>Coords: </b>${+d.properties.reclong}, ${+d.properties.reclat}</span>
                    `
                    )
                    .style('left', (d3.event.pageX) + 20 + 'px')
                    .style('top', (d3.event.pageY) + 20 + 'px');

            })
            .on('mouseout', d => {
                tooltip.style('opacity', 0);
            });
    });
});

