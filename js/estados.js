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

'CDMX','Estado de México','Baja California','Tabasco','Sinaloa','Quintana Roo','Puebla','Veracruz','Yucatán','Coahuila','Jalisco','Chihuahua','Nuevo León','Tamaulipas','Baja California Sur  ','Michoacán','Morelos','Guerrero','Hidalgo','Guanajuato','Sonora','Aguascalientes','Tlaxcala','Chiapas','Oaxaca','Querétaro','San Luis Potosí','Campeche','Nayarit','Zacatecas','Durango','Colima'

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


4782,2863,1495,941,821,711,621,514,404,369,326,325,313,308,301,278,278,268,242,239,202,185,179,165,130,128,98,87,72,70,58,26




],
        tooltip: {
            valueSuffix: ''
        }

    },  {
        name: 'Defunciones',
        type: 'spline',
        color:'#223a6f', 
        data: [


        288,186,184,107,130,91,78,40,23,39,25,67,11,15,14,35,29,39,26,21,21,2,16,6,17,10,7,16,11,7,6,2

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
