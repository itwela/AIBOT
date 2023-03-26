// javascript

/*

        This was to verify if my javascript was 
        functioning properly. Using this as notes
        for syntax right now.

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Update h1 tag')

d3.select('body').append('p').text('First paragraph')
d3.select('body').append('p').text('Second paragraph')
d3.select('body').append('p').text('Third paragraph')

d3.selectAll('p').style('color', 'green') 

*/



// ===============================================



/*

                This was practice of displaying
                dummy data and using a function
                to do so! This library is already 
                alot better and reminds me of 
                pinescript in a way 

var dataset = [1,2,3,4,5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    //.text('D3 is awsome');
    .text(function(dataset) { return dataset; });

*/

        /* A very basic bar chart. Im learning that D3 doesnt take negative
        values n the same way that Chat.js does so I will figure that out */


//  Below is the bars itself, the data, and functions for showing the data
var dataset = [7, 0.65, .18, 0.93, 77.29, 55.02, 48.18, 32.14, 32.13, 34.42];

var svgWidth = 1000, svgHeight = 200, barPadding = 3;
var barWidth = (svgWidth, dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([svgHeight, 0]);


var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d) {
        return svgHeight - yScale(d)
    })
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('width', barWidth - barPadding)
    .attr('class', 'bar')
    .attr('transform', function (d, i) {
        var translate = [barWidth * i, 0];
        return 'translate('+ translate +')';
    }); 


//  Below is the text
/*
var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
        return d;
    })
    .attr('y', function(d, i) {
        return svgHeight - d - 5;
    })
    .attr('x', function(d, i) {
        return barWidth * i;
    })
    .attr('fill', '#A64C38');
*/



