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
['Puebla.', 'Puebla', 13388],
['CDMX', 'Iztapalapa', 12062],
['Tabasco', 'Centro', 10499],
['Guanajuato', 'León', 9648],
['CDMX', 'Gustavo A. Madero', 9254],
['Sonora', 'Hermosillo', 7826],
['Baja California', 'Mexicali', 7323],
['Edo. Mex', 'Ecatepec', 6600],
['CDMX', 'Tlalpan', 6178],
['Nuevo León', 'Monterrey', 6148],
['Yucatán', 'Mérida', 5973],
['Guerrero', 'Acapulco', 5913],
['CDMX', 'Álvaro Obregón', 5809],
['Veracruz.', 'Veracruz', 5302],
['CDMX', 'Coyoacán', 5192],
['Edo. Mex', 'Nezahualcoyotl', 5047],
['CDMX', 'Xochimilco', 4993],
['Sinaloa', 'Culiacán', 4678],
['Jalisco', 'Guadalajara', 4662],
['CDMX', 'Azcapotzalco', 4414],
['Edo. Mex', 'Toluca', 4333],
['CDMX', 'Cuauhtemoc', 4314]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
