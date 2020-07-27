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
['Puebla.', 'Puebla', 11947],
['CDMX', 'Iztapalapa', 11274],
['Tabasco', 'Centro', 8783],
['CDMX', 'Gustavo A. Madero', 8457],
['Guanajuato', 'León', 8009],
['Baja California', 'Mexicali', 6960],
['Sonora', 'Hermosillo', 6787],
['Edo. Mex', 'Ecatepec', 6024],
['CDMX', 'Tlalpan', 5568],
['Guerrero', 'Acapulco', 5414],
['CDMX', 'Álvaro Obregón', 5188],
['Yucatán', 'Mérida', 4848],
['Veracruz.', 'Veracruz', 4739],
['Nuevo León', 'Monterrey', 4688],
['Edo. Mex', 'Nezahualcoyotl', 4667],
['CDMX', 'Coyoacán', 4580],
['CDMX', 'Xochimilco', 4555],
['Sinaloa', 'Culiacán', 4308],
['Jalisco', 'Guadalajara', 4145],
['CDMX', 'Azcapotzalco', 4007],
['CDMX', 'Cuauhtemoc', 3932],
['Edo. Mex', 'Toluca', 3889]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
