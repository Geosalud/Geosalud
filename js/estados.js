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
'CDMX','MÉXICO','BAJA CALIFORNIA','SINALOA','PUEBLA','QUINTANA ROO','TABASCO',
'COAHUILA','JALISCO','BAJA CALIFORNIA SUR','NUEVO LEÓN','YUCATÁN','VERACRUZ','CHIHUAHUA',
'GUANAJUATO','GUERRERO','MICHOACÁN','SONORA','TAMAULIPAS','QUERETARO','AGUASCALIENTES','MORELOS',
'HIDALGO','TLAXCALA','CHIAPAS','SAN LUIS POTOSÍ','OAXACA','CAMPECHE','NAYARIT','ZACATECAS','DURANGO','COLIMA'





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
        data: [2080,754,536,374,314,280,250,217,190,169,159,140,121,115,113,110,99,97,91,78,77,73,70,67,58,58,56,47,31,23,19,9],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Hombres',
        type: 'spline',
        color:'#d67544',
        yAxis: 2,
        data: [1240,444,287,209,168,185,137,121,109,94,108,79,69,71,56,69,60,49,46,42,38,44,43,37,41,30,26,40,14,14,9,5],
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
        data: [840,310,249,165,146,95,113,96,81,75,51,61,52,44,57,41,39,48,45,36,39,29,27,30,17,28,30,7,17,9,10,4],
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
