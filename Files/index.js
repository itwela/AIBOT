// javascript

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Update h1 tag')

d3.select('body').append('p').text('First paragraph')
d3.select('body').append('p').text('Second paragraph')
d3.select('body').append('p').text('Third paragraph')

d3.selectAll('p').style('color', 'green')