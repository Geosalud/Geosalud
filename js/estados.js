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
'NUEVO LEÓN','YUCATÁN','CHIHUAHUA','VERACRUZ','TAMAULIPAS','GUANAJUATO','GUERRERO','SONORA','MICHOACÁN','QUERETARO',
'AGUASCALIENTES','MORELOS','HIDALGO','TLAXCALA','CHIAPAS','OAXACA','SAN LUIS POTOSÍ','CAMPECHE','NAYARIT','ZACATECAS','DURANGO','COLIMA'






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
        data: [2299,786,610,413,330,315,278,232,196,173,172,172,131,124,117,116,110,108,107,79,77,77,75,72,62,62,59,56,33,27,19,10],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Hombres',
        type: 'spline',
        color:'#d67544',
        yAxis: 2,
        data: [1379,465,324,230,174,207,156,128,114,95,117,93,82,69,61,57,69,55,63,42,38,46,47,39,43,29,30,47,15,15,9,5],
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
        data: [920,321,286,183,156,108,122,104,82,78,55,79,49,55,56,59,41,53,44,37,39,31,28,33,19,33,29,9,18,12,10,5

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
