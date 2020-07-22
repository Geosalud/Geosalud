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
['Puebla.', 'Puebla', 10648],
['CDMX', 'Iztapalapa', 10572],
['Tabasco', 'Centro', 8137],
['CDMX', 'Gustavo A. Madero', 7966],
['Guanajuato', 'León', 6902],
['Baja California', 'Mexicali', 6693],
['Sonora', 'Hermosillo', 6067],
['Edo. Mex', 'Ecatepec', 5659],
['Guerrero', 'Acapulco', 5138],
['CDMX', 'Tlalpan', 5052],
['CDMX', 'Álvaro Obregón', 4774],
['Edo. Mex', 'Nezahualcoyotl', 4460],
['Veracruz.', 'Veracruz', 4396],
['Yucatán', 'Mérida', 4292],
['CDMX', 'Coyoacán', 4288],
['CDMX', 'Xochimilco', 4191],
['Nuevo León', 'Culiacán', 4053],
['Sinaloa', 'Monterrey', 4043],
['CDMX', 'Azcapotzalco', 3753],
['Jalisco', 'Cuauhtemoc', 3721],
['CDMX', 'Toluca', 3677],
['Edo. Mex', 'Guadalajara', 3664]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
