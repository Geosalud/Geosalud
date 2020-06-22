Highcharts.chart('sintomas', {

    title: {
        text: '_',
        align: 'right'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [

['CDMX', 'Iztapalapa', 7526],
['CDMX', 'Gustavo A. Madero', 5535],
['Puebla.', 'Puebla', 4942],
['Baja California', 'Mexicali', 4305],
['Tabasco', 'Centro', 4062],
['Edo. Mex', 'Ecatepec', 3442],
['Edo. Mex', 'Nezahualcoyotl', 3134],
['CDMX', 'Tlalpan', 3041],
['CDMX', 'Álvaro Obregón', 2944],
['CDMX', 'Xochimilco', 2782],
['CDMX', 'Coyoacán', 2722],
['Veracruz.', 'Veracruz', 2720],
['Guerrero', 'Acapulco', 2614],
['Baja California', 'Tijuana', 2564],
['CDMX', 'Cuauhtemoc', 2523],
['Sinaloa', 'Culiacán', 2466],
['CDMX', 'Azcapotzalco', 2376],
['Guanajuato', 'León', 2350],
['CDMX', 'Iztacalco', 2317],
['CDMX', 'Venustiano Carranza', 2201],
['CDMX', 'Tlahuac', 2050],
['Edo. Mex', 'Naucalpan', 1909]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
