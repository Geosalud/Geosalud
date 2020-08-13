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
['Puebla.', 'Puebla', 14840],
['CDMX', 'Iztapalapa', 12887],
['Tabasco', 'Centro', 11582],
['Guanajuato', 'León', 10638],
['CDMX', 'Gustavo A. Madero', 10030],
['Sonora', 'Hermosillo', 8473],
['Baja California', 'Mexicali', 7719],
['Edo. Mex', 'Ecatepec', 7170],
['Nuevo León', 'Monterrey', 6985],
['CDMX', 'Tlalpan', 6825],
['Yucatán', 'Mérida', 6706],
['CDMX', 'Álvaro Obregón', 6375],
['Guerrero', 'Acapulco', 6289],
['Veracruz.', 'Veracruz', 5786],
['CDMX', 'Coyoacán', 5584],
['Edo. Mex', 'Nezahualcoyotl', 5346],
['CDMX', 'Xochimilco', 5271],
['Jalisco', 'Guadalajara', 5228],
['San Luis Potosí.', 'San Luis Potosí', 5215],
['Sinaloa', 'Culiacán', 5138],
['Edo. Mex', 'Toluca', 4754],
['CDMX', 'Azcapotzalco', 4738]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
