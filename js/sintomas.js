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
['Puebla.', 'Puebla', 15750],
['CDMX', 'Iztapalapa', 13620],
['Tabasco', 'Centro', 12224],
['Guanajuato', 'León', 11408],
['CDMX', 'Gustavo A. Madero', 10764],
['Sonora', 'Hermosillo', 8791],
['Baja California', 'Mexicali', 7961],
['Nuevo León', 'Monterrey', 7722],
['Edo. Mex', 'Ecatepec', 7549],
['CDMX', 'Tlalpan', 7377],
['Yucatán', 'Mérida', 7292],
['CDMX', 'Álvaro Obregón', 6919],
['Guerrero', 'Acapulco', 6532],
['San Luis Potosí.', 'San Luis Potosí', 6228],
['Veracruz.', 'Veracruz', 6070],
['CDMX', 'Coyoacán', 6062],
['Edo. Mex', 'Nezahualcoyotl', 5622],
['CDMX', 'Xochimilco', 5607],
['Jalisco', 'Guadalajara', 5545],
['Sinaloa', 'Culiacán', 5467],
['Edo. Mex', 'Toluca', 5095],
['CDMX', 'Azcapotzalco', 5047]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
