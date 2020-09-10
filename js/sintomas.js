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
['Puebla.', 'Puebla', 18044],
['CDMX', 'Iztapalapa', 15893],
['Tabasco', 'Centro', 13940],
['CDMX', 'Gustavo A. Madero', 13036],
['Guanajuato', 'León', 13021],
['Nuevo León', 'Monterrey', 10008],
['Sonora', 'Hermosillo', 9744],
['San Luis Potosí.', 'San Luis Potosí', 9322],
['CDMX', 'Tlalpan', 9224],
['Yucatán', 'Mérida', 9001],
['CDMX', 'Ecatepec', 8758],
['Baja California', 'Mexicali', 8690],
['CDMX', 'Álvaro Obregón', 8604],
['CDMX', 'Coyoacán', 7566],
['Jalisco', 'Guadalajara', 7382],
['Guerrero', 'Acapulco', 7167],
['Veracruz.', 'Veracruz', 6838],
['CDMX', 'Xochimilco', 6551],
['Edo. Mex', 'Nezahualcoyotl', 6463],
['Sinaloa', 'Culiacán', 6343],
['CDMX', 'Azcapotzalco', 6135],
['Edo. Mex', 'Toluca', 5855]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
