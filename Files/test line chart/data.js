//Read the data
//"https://raw.githubusercontent.com/itwela/AIBOT/main/Files/test%20line%20chart/gooddemodata.csv",
var myChart =
Highcharts.chart('container',
{
  title: {
    text: 'The Sweet Science Of Trading',
  },
  subtitle: {
    text: 'An algorithmic approach to trading. Created by Itwela Ibomu',
  },
    chart: {
      type: 'line'
    },
    xAxis: {
      categories: [ 'Oct 31', 'Nov 2']
    },
    yAxis: {
      title: {
        text: 'yahoe'
      }
    },
    series: [{
      name: 'Demo Data',
      data: [6,8,2,2],
      color: 'red'
    }],
})