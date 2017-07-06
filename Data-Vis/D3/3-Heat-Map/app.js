const margin = {left: 70, top: 40, right: 40, bottom: 40};
const width = 1000 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
const URL = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json";
// const colors = ['#f9f2e1', '#E9CD8B', '#F8B468', '#F27762', '#FC5D5F', '#C4334B', '#B5434D', '#723545', '#363852','#51364B', '#0e0e15'];
const colors = ["#363852", "#3288bd", "#66c2a5", "#abdda4", "#e6f598", "#ffffbf", "#fee08b", "#fdae61", "#f46d43", "#d53e4f", "#9e0142"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec", ""];

let svg = d3.select('.chart')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')  
  .attr('transform', "translate(" + margin.left + "," + margin.top + ")");


d3.json(URL, function(data) {
    console.log(data);
})