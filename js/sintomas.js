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


['CDMX', 'Iztapalapa', 194048],
['CDMX', 'Àlvaro Obregón', 174593],
['CDMX', 'Gustavo A. Madero', 152267],
['CDMX', 'Tlalpan', 123073],
['Puebla.', 'Puebla', 96287],
['San Luis Potosí.', 'San Luis Potosí', 89971],
['Guanajuato', 'León', 87605],
['Querétaro.', 'Querétaro', 86219],
['Tabasco', 'Centro', 86219],
['Nuevo León', 'Monterrey', 80678],
['CDMX', 'Cuauhtemoc', 70708],
['CDMX', 'Coyoacán', 70424],
['CDMX', 'Xochimilco', 67536],
['CDMX', 'Tlahuac', 66936],
['Jalisco', 'Guadalajara', 66242],
['CDMX', 'Azcapotzalco', 65661],
['Yucatàn', 'Mérida', 65109],
['Edo. Mex', 'Ecatepec', 61818],
['Sonora', 'Hermosillo', 61785],
['CDMX', 'Venustiano Carranza', 59050],
['Edo. Mex', 'Nezahualcoyotl', 53508],
['CDMX', 'Iztacalco', 53011]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
