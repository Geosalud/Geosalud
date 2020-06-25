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

['CDMX', 'Iztapalapa', 7746],
['CDMX', 'Gustavo A. Madero', 5722],
['Puebla.', 'Puebla', 5703],
['Baja California', 'Mexicali', 4496],
['Tabasco', 'Centro', 4413],
['Edo. Mex', 'Ecatepec', 3690],
['CDMX', 'Tlalpan', 3282],
['Edo. Mex', 'Nezahualcoyotl', 3267],
['CDMX', 'Álvaro Obregón', 3065],
['Veracruz.', 'Veracruz', 2895],
['CDMX', 'Xochimilco', 2874],
['Guerrero', 'Acapulco', 2847],
['CDMX', 'Coyoacán', 2807],
['Guanajuato', 'León', 2748],
['CDMX', 'Cuauhtemoc', 2657],
['Baja California', 'Tijuana', 2654],
['Sinaloa', 'Culiacán', 2648],
['CDMX', 'Azcapotzalco', 2487],
['CDMX', 'Iztacalco', 2386],
['CDMX', 'Venustiano Carranza', 2274],
['Edo. Mex', 'Naucalpan', 2176],
['CDMX', 'Tlahuac', 2162]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
