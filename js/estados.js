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
'CDMX','MÉXICO','BAJA CALIFORNIA','PUEBLA','SINALOA','QUINTANA ROO','COAHUILA','JALISCO','TABASCO','BAJA CALIFORNIA SUR','NUEVO LEÓN','YUCATÁN','GUANAJUATO','VERACRUZ','GUERRERO','SONORA','CHIHUAHUA','MICHOACÁN','QUERETARO','HIDALGO','AGUASCALIENTES','SAN LUIS POTOSÍ','TAMAULIPAS','MORELOS','TLAXCALA','OAXACA','CHIAPAS','CAMPECHE','NAYARIT','DURANGO','ZACATECAS','COLIMA'


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
        data: [1437,558,368,269,245,239,176,159,156,153,132,114,88,82,77,72,67,62,61,58,55,55,53,49,49,44,43,29,25,16,16,7],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Hombres',
        type: 'spline',
        color:'#d67544',
        yAxis: 2,
        data: [875,321,203,143,141,162,100,98,75,84,88,59,41,45,47,34,46,35,33,37,26,29,27,27,26,22,33,23,10,9,11,4],
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
        data: [562,237,165,126,104,77,76,61,81,69,44,55,47,37,30,38,21,27,28,21,29,26,26,22,23,22,10,6,15,7,5,3],
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
