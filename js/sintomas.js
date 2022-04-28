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


['CDMX', 'Iztapalapa', 207096],
['CDMX', 'Álvaro Obregón', 190309],
['CDMX', 'Gustavo A. Madero', 169837],
['CDMX', 'Tlalpan', 137687],
['San Luis Potosí.', 'San Luis Potosí', 109268],
['Puebla.', 'Puebla', 107305],
['Guanajuato', 'León', 102228],
['Querétaro.', 'Querétaro', 93169],
['Tabasco', 'Centro', 90091],
['Nuevo León', 'Monterrey', 89570],
['Jalisco', 'Guadalajara', 78936],
['CDMX', 'Coyoacán', 77246],
['CDMX', 'Cuauhtemoc', 77027],
['CDMX', 'Xochimilco', 76188],
['Edo. Mex', 'Ecatepec', 75186],
['CDMX', 'Azcapotzalco', 74056],
['CDMX', 'Tlahuac', 72341],
['Yucatàn', 'Mérida', 70999],
['Sonora', 'Hermosillo', 66986],
['CDMX', 'Venustiano Carranza', 64151],
['Edo. Mex', 'Nezahualcoyotl', 58702],
['CDMX', 'Iztacalco', 57501]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
