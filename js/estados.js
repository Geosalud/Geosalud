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
'02/05/2020','03/05/2020','04/05/2020','05/05/2020','06/05/2020','07/05/2020','08/05/2020','09/05/2020',
'10/05/2020','11/05/2020','12/05/2020','13/05/2020','14/05/2020','15/05/2020','16/05/2020','17/05/2020',
'18/05/2020','19/05/2020','20/05/2020','21/05/2020','22/05/2020','23/05/2020','24/05/2020','25/05/2020'
      
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
2,1,0,2,0,2,1,0,1,4,2,9,27,28,60,49,36,68,91,99,107,100,66,48,129,164,141,172,210,157,141,304,276,317,299,337,219,222,530,447,513,406,482,403,426,812,832,853,874,1011,715,655,1322,1284,1225,1310,1495,936,910,1654,1659,1644,1629,1223,1244,1128,2303,1866,2026,2092,2085,1286,1177,2530,2478,2608,2459,2631,1515,1166,2850,2435,2330,1993,1362,319,59,14


],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,1,1,2,2,8,6,13,8,12,21,19,25,31,31,27,53,55,46,51,63,65,67,75,83,86,74,101,98,123,136,134,143,140,175,177,194,179,154,203,190,209,201,191,227,211,221,206,215,193,208,217,204,209,230,232,212,205,213,200,182,157,81,74,53,6

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
