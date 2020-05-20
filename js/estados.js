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
'CDMX',
'Jalisco',
'Sinaloa',
'Tabasco',
'Baja California',
'Hidalgo',
'Morelos',
'Coahuila',
'San Luis Potosí',
'Baja California Sur',
'Estado de México',
'Puebla',
'Quintana Roo',
'Querétaro',
'Veracruz',
'Guerrero',
'Oaxaca',
'Durango',
'Nayarit',
'Zacatecas',
'Nuevo León',
'Yucatán',
'Guanajuato',
'Aguascalientes',
'Sonora',
'Chiapas',
'Tamaulipas',
'Chihuahua',
'Tlaxcala',
'Campeche',
'Colima'

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
        x: 950,
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
        data: [327,104,42,62,40,26,9,62,33,19,171,100,56,32,29,24,22,22,8,8,7,84,53,50,47,21,15,13,11,5,5,3],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Negativos',
        type: 'spline',
        yAxis: 2,
        data: [863,725,187,212,284,183,100,281,305,137,554,319,172,199,207,155,91,128,72,44,128,747,178,676,323,145,92,87,56,119,21,32],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Sospechosos',
        type: 'spline',
        data: [757,638,181,277,213,65,31,179,104,62,406,122,97,67,353,71,102,46,28,27,34,80,72,200,53,148,45,70,24,76,13,12],
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
