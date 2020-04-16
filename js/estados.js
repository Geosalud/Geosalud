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
'CDMX','MÉXICO','BAJA CALIFORNIA','SINALOA','PUEBLA','QUINTANA ROO','TABASCO','COAHUILA','JALISCO','BAJA CALIFORNIA SUR','NUEVO LEÓN','YUCATÁN','VERACRUZ','GUERRERO','GUANAJUATO','CHIHUAHUA','SONORA','MICHOACÁN','QUERETARO','AGUASCALIENTES','HIDALGO','TAMAULIPAS','TLAXCALA','MORELOS','SAN LUIS POTOSÍ','OAXACA','CHIAPAS','CAMPECHE','NAYARIT','ZACATECAS','DURANGO','COLIMA'



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
        data: [1686,659,464,292,291,269,210,195,176,165,150,128,106,97,91,83,78,70,69,65,64,60,58,56,56,50,48,43,27,18,16,7],
        tooltip: {
            valueSuffix: ''
        }

    }, {
        name: 'Hombres',
        type: 'spline',
        color:'#d67544',
        yAxis: 2,
        data: [1022,376,251,166,156,175,105,108,105,90,101,70,57,61,41,53,37,40,38,33,40,31,31,30,29,23,36,36,12,13,9,4],
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
        data: [664,283,213,126,135,94,105,87,71,75,49,58,49,36,50,30,41,30,31,32,24,29,27,26,27,27,12,7,15,5,7,3],
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
