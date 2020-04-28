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
'CDMX','Estado de México','Baja California','Tabasco','Sinaloa','Quintana Roo','Puebla','Veracruz','Coahuila','Yucatán','Jalisco','Tamaulipas','Baja California Sur  ','Nuevo León','Chihuahua','Guanajuato','Guerrero','Michoacán','Morelos','Hidalgo','Sonora','Aguascalientes','Tlaxcala','Chiapas','Querétaro','Oaxaca','San Luis Potosí','Campeche','Zacatecas','Nayarit','Durango','Colima'



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
        data: [4152,2455,1301,819,795,653,552,423,358,353,303,287,285,284,271,216,215,213,194,190,182,161,139,132,121,117,83,76,66,64,45,24
],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [270,177,165,100,122,86,69,33,35,23,25,12,13,9,58,21,32,33,28,19,20,2,14,6,9,15,6,13,4,7,6,2],
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
