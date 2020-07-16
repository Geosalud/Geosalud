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
['CDMX', 'Iztapalapa', 9983],
['Puebla.', 'Puebla', 9675],
['CDMX', 'Gustavo A. Madero', 7440],
['Tabasco', 'Centro', 7115],
['Baja California', 'Mexicali', 6219],
['Guanajuato', 'León', 6188],
['Edo. Mex', 'Ecatepec', 5219],
['CDMX', 'Tlalpan', 4701],
['Sonora', 'Hermosillo', 4587],
['Guerrero', 'Acapulco', 4586],
['CDMX', 'Álvaro Obregón', 4241],
['Edo. Mex', 'Nezahualcoyotl', 4231],
['Veracruz.', 'Veracruz', 4014],
['CDMX', 'Xochimilco', 3879],
['Yucatán', 'Mérida', 3832],
['CDMX', 'Coyoacán', 3830],
['Sinaloa', 'Culiacán', 3685],
['CDMX', 'Azcapotzalco', 3519],
['CDMX', 'Cuauhtemoc', 3435],
['Edo. Mex', 'Toluca', 3427],
['Jalisco', 'Guadalajara', 3320],
['Nuevo León', 'Monterrey', 3300]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
