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
'CDMX','MÉXICO','BAJA CALIFORNIA','SINALOA','PUEBLA','QUINTANA ROO','TABASCO','COAHUILA','JALISCO','BAJA CALIFORNIA SUR',
'NUEVO LEÓN','YUCATÁN','VERACRUZ','CHIHUAHUA','GUERRERO','GUANAJUATO','SONORA','MICHOACÁN','TAMAULIPAS','QUERETARO','AGUASCALIENTES',
'HIDALGO','TLAXCALA','MORELOS','SAN LUIS POTOSÍ','CHIAPAS','OAXACA','CAMPECHE','NAYARIT','ZACATECAS','DURANGO','COLIMA'




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
        data: [1828,695,505,327,305,276,233,214,178,166,159,131,112,108,100,96,89,84,78,76,71,67,62,58,56,54,53,45,29,18,17,7],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Hombres',
        type: 'spline',
        color:'#d67544',
        yAxis: 2,
        data: [1092,405,269,186,163,181,124,119,107,92,107,72,63,66,62,43,46,49,41,42,36,41,33,32,29,40,25,38,13,12,9,4],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Mujeres',
        type: 'spline',
        color:'#223a6f', 
        data: [736,290,236,141,142,95,109,95,71,74,52,59,49,42,38,53,43,35,37,34,35,26,29,26,27,14,28,7,16,6,8,3],
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
