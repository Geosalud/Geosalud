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
['CDMX', 'Iztapalapa', 8642],
['Puebla.', 'Puebla', 7571],
['CDMX', 'Gustavo A. Madero', 6415],
['Baja California', 'Mexicali', 5315],
['Tabasco', 'Centro', 5287],
['Edo. Mex', 'Ecatepec', 4285],
['Guanajuato', 'León', 4048],
['CDMX', 'Tlalpan', 3926],
['Edo. Mex', 'Nezahualcoyotl', 3665],
['CDMX', 'Álvaro Obregón', 3545],
['Veracruz.', 'Veracruz', 3337],
['CDMX', 'Xochimilco', 3322],
['Guerrero', 'Acapulco', 3306],
['CDMX', 'Coyoacán', 3226],
['Sinaloa', 'Culiacán', 2997],
['CDMX', 'Cuauhtemoc', 2977],
['Baja California', 'Tijuana', 2938],
['CDMX', 'Azcapotzalco', 2916],
['Yucatán', 'Mérida', 2793],
['Edo. Mex', 'Toluca', 2719],
['Sonora', 'Hermosillo', 2710],
['CDMX', 'Iztacalco', 2615]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});