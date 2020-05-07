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

'07/01/2020','08/01/2020','09/01/2020','10/01/2020','11/01/2020','12/01/2020','13/01/2020','14/01/2020','15/01/2020','16/01/2020',
'17/01/2020','18/01/2020','19/01/2020','20/01/2020','21/01/2020','22/01/2020','23/01/2020','24/01/2020','25/01/2020','26/01/2020',
'27/01/2020','28/01/2020','29/01/2020','30/01/2020','31/01/2020','01/02/2020','02/02/2020','03/02/2020','04/02/2020','05/02/2020',
'06/02/2020','07/02/2020','08/02/2020','09/02/2020','10/02/2020','11/02/2020','12/02/2020','13/02/2020','14/02/2020','15/02/2020',
'16/02/2020','17/02/2020','18/02/2020','19/02/2020','20/02/2020','21/02/2020','22/02/2020','23/02/2020','24/02/2020','25/02/2020',
'26/02/2020','27/02/2020','28/02/2020','29/02/2020','01/03/2020','02/03/2020','03/03/2020','04/03/2020','05/03/2020','06/03/2020',
'07/03/2020','08/03/2020','09/03/2020','10/03/2020','11/03/2020','12/03/2020','13/03/2020','14/03/2020','15/03/2020','16/03/2020',
'17/03/2020','18/03/2020','19/03/2020','20/03/2020','21/03/2020','22/03/2020','23/03/2020','24/03/2020','25/03/2020',
'26/03/2020','27/03/2020','28/03/2020','29/03/2020','30/03/2020','31/03/2020','01/04/2020','02/04/2020','03/04/2020',
'04/04/2020','05/04/2020','06/04/2020','07/04/2020','08/04/2020','09/04/2020','10/04/2020','11/04/2020','12/04/2020',
'13/04/2020','14/04/2020','15/04/2020','16/04/2020','17/04/2020','18/04/2020','19/04/2020','20/04/2020','21/04/2020',
'22/04/2020','23/04/2020','24/04/2020','25/04/2020','26/04/2020','27/04/2020','28/04/2020','29/04/2020','30/04/2020',
'01/05/2020','02/05/2020','03/05/2020','04/05/2020','05/05/2020','06/05/2020'

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
0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,4,2,1,0,2,0,2,1,0,0,4,2,9,27,28,60,49,36,68,89,97,105,98,66,47,129,163,134,164,205,147,140,295,267,306,277,325,204,210,509,429,495,389,448,373,410,772,763,805,833,970,661,610,1242,1208,1126,1202,1382,827,764,1467,1417,1298,1182,669,606,458,488,60,4



],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [

null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,2,0,1,0,1,1,2,2,8,6,13,8,11,21,18,25,31,29,25,52,52,45,47,56,61,59,65,74,80,63,77,82,96,103,103,110,104,127,130,122,116,103,117,93,92,97,70,62,37,5


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
