Highcharts.chart('problemas', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Percepción de problemas relacionados con Covid 19. Porcentaje de respuestas'
    },

                  credits: {enabled: true, text: 'Highcharts' },
    xAxis: {
        categories: ['Económico','De salud que debemos enfrentar unidos','Miedo e incertidumbre','Desinformación','Falta de seriedad','Político','Indiferencia','Inseguridad','Medioambiente','Otro'
]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Porcentaje de respuestas'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
                enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}%<br/> {point.stackTotal}'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                pointFormat: '{point.y}%<br/> {point.stackTotal}',
            }
        }
    },
    series: [{
        name: 'Porcentaje de respuestas',
        color:'#5db2ff',
        data: [63,49,45,27,23,19,18,11,6,2]
    }]
});