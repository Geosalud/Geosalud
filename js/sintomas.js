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
['CDMX', 'Iztapalapa', 9832],
['Puebla.', 'Puebla', 9559],
['CDMX', 'Gustavo A. Madero', 7360],
['Tabasco', 'Centro', 6974],
['Baja California', 'Mexicali', 6127],
['Guanajuato', 'León', 6018],
['Edo. Mex', 'Ecatepec', 5173],
['CDMX', 'Tlalpan', 4621],
['Guerrero', 'Acapulco', 4467],
['Sonora', 'Hermosillo', 4337],
['CDMX', 'Álvaro Obregón', 4212],
['Edo. Mex', 'Nezahualcoyotl', 4202],
['Veracruz.', 'Veracruz', 3947],
['CDMX', 'Xochimilco', 3844],
['CDMX', 'Coyoacán', 3778],
['Yucatán', 'Mérida', 3777],
['Sinaloa', 'Culiacán', 3587],
['CDMX', 'Azcapotzalco', 3475],
['CDMX', 'Cuauhtemoc', 3401],
['Edo. Mex', 'Toluca', 3378],
['Nuevo León', 'Monterrey', 3223],
['Jalisco', 'Guadalajara', 3213]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
