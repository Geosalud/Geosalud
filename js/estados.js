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
'18/05/2020','19/05/2020'
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
2,1,0,2,0,2,1,0,1,4,2,9,27,28,60,49,36,68,91,99,107,100,66,48,129,164,141,172,210,158,141,305,276,316,299,334,218,216,
531,445,511,407,478,401,426,807,828,855,869,1005,716,649,1322,1276,1217,1307,1496,934,905,1670,1657,1664,1622,1229,1168,1104,
2257,1806,1955,1921,1907,1157,1015,2211,2082,2185,2017,2020,964,638,927,139


],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
0,2,0,1,0,1,1,2,2,8,6,13,8,12,21,19,25,31,29,27,53,55,46,51,61,65,64,72,79,85,71,94,97,115,131,125,132,130,
159,168,179,164,148,191,181,197,190,180,207,201,195,178,186,165,172,180,173,154,170,164,160,118,119,52

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
