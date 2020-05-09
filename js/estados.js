Highcharts.chart('estados', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '',
        align: 'left'
    },
              credits: {enabled: true, text: 'Highcharts' },
    xAxis: [{
        categories: [

'28/02/2020','29/02/2020','01/03/2020','02/03/2020','03/03/2020','04/03/2020','05/03/2020','06/03/2020',
'07/03/2020','08/03/2020','09/03/2020','10/03/2020','11/03/2020','12/03/2020','13/03/2020','14/03/2020',
'15/03/2020','16/03/2020','17/03/2020','18/03/2020','19/03/2020','20/03/2020','21/03/2020','22/03/2020',
'23/03/2020','24/03/2020','25/03/2020','26/03/2020','27/03/2020','28/03/2020','29/03/2020','30/03/2020',
'31/03/2020','01/04/2020','02/04/2020','03/04/2020','04/04/2020','05/04/2020','06/04/2020','07/04/2020',
'08/04/2020','09/04/2020','10/04/2020','11/04/2020','12/04/2020','13/04/2020','14/04/2020','15/04/2020',
'16/04/2020','17/04/2020','18/04/2020','19/04/2020','20/04/2020','21/04/2020','22/04/2020','23/04/2020',
'24/04/2020','25/04/2020','26/04/2020','27/04/2020','28/04/2020','29/04/2020','30/04/2020','01/05/2020',
'02/05/2020','03/05/2020','04/05/2020','05/05/2020','06/05/2020','07/05/2020'

        ],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: ' ',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: ' ',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: ' ',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: ' ',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: ' ',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: ' ',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 50,
        verticalAlign: 'top',
        y: 40,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Positivos',
        type: 'column',
        color:'#5db2ff',
        yAxis: 1,
        data: [
2,1,0,2,0,2,1,0,1,4,2,9,27,28,60,49,36,68,91,97,107,99,66,48,129,163,140,171,206,151,140,304,273,310,293,329,212,213,516,433,499,400,468,392,413,789,805,828,839,972,671,615,1254,1223,1139,1237,1429,863,812,1563,1523,1481,1366,848,819,713,1333,830,509,93


],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [

null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,2,0,1,0,1,1,2,2,8,6,13,8,11,21,18,25,31,29,26,52,53,45,47,56,61,59,65,75,80,63,80,85,103,108,109,117,114,135,134,132,127,113,136,124,134,126,100,116,104,70,28


],
        tooltip: {
            valueSuffix: ''
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    }
});
