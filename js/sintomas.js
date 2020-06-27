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
['CDMX', 'Iztapalapa', 7975],
['Puebla.', 'Puebla', 6059],
['CDMX', 'Gustavo A. Madero', 5909],
['Baja California', 'Mexicali', 4692],
['Tabasco', 'Centro', 4610],
['Edo. Mex', 'Ecatepec', 3887],
['CDMX', 'Tlalpan', 3474],
['Edo. Mex', 'Nezahualcoyotl', 3391],
['CDMX', 'Álvaro Obregón', 3174],
['Guanajuato', 'León', 3120],
['Veracruz.', 'Veracruz', 3049],
['CDMX', 'Xochimilco', 3015],
['Guerrero', 'Acapulco', 2931],
['CDMX', 'Coyoacán', 2924],
['CDMX', 'Cuauhtemoc', 2757],
['Sinaloa', 'Culiacán', 2744],
['Baja California', 'Tijuana', 2723],
['CDMX', 'Azcapotzalco', 2609],
['CDMX', 'Iztacalco', 2476],
['CDMX', 'Venustiano Carranza', 2357],
['Edo. Mex', 'Toluca', 2306],
['Edo. Mex', 'Naucalpan', 2263]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
