Highcharts.chart('problemas', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Tipo de problema que la población percibe ante el Covid-19.'
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
        data: [23.7,19.3,16.6,10.0,8.7,7.1,6.2,4.8,2.9,0.8]
    }]
});