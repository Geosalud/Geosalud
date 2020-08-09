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
['Puebla.', 'Puebla', 14047],
['CDMX', 'Iztapalapa', 12549],
['Tabasco', 'Centro', 11086],
['Guanajuato', 'León', 10184],
['CDMX', 'Gustavo A. Madero', 9723],
['Sonora', 'Hermosillo', 8208],
['Baja California', 'Mexicali', 7582],
['Edo. Mex', 'Ecatepec', 6850],
['Nuevo León', 'Monterrey', 6577],
['CDMX', 'Tlalpan', 6503],
['Yucatán', 'Mérida', 6373],
['Guerrero', 'Acapulco', 6169],
['CDMX', 'Álvaro Obregón', 6126],
['Veracruz.', 'Veracruz', 5523],
['CDMX', 'Coyoacán', 5412],
['Edo. Mex', 'Nezahualcoyotl', 5232],
['CDMX', 'Xochimilco', 5165],
['Sinaloa', 'Culiacán', 4940],
['Jalisco', 'Guadalajara', 4913],
['CDMX', 'Azcapotzalco', 4590],
['San Luis Potosí.', 'San Luis Potosí', 4580],
['Edo. Mex', 'Toluca', 4574]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
