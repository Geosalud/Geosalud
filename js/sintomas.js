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

['CDMX', 'Iztapalapa', 96858],
['CDMX', 'Alvaro Obregón', 76516],
['CDMX', 'Gustavo A. Madero', 70811],
['CDMX', 'Tlalpan', 61263],
['Puebla.', 'Puebla', 50606],
['Querétaro.', 'Querétaro', 46653],
['Guanajuato', 'León', 43106],
['San Luis Potosí.', 'San Luis Potosí', 36436],
['Nuevo León', 'Monterrey', 36218],
['CDMX', 'Coyoacán', 36028],
['CDMX', 'Xochimilco', 34269],
['Sonora', 'Hermosillo', 33078],
['CDMX', 'Tlahuac', 32835],
['CDMX', 'Azcapotzalco', 31933],
['CDMX', 'Cuauhtemoc', 31682],
['Edo. Mex', 'Ecatepec', 31501],
['Tabasco', 'Centro', 30421],
['Jalisco', 'Guadalajara', 29619],
['CDMX', 'Venustiano Carranza', 28660],
['Edo. Mex', 'Nezahualcoyotl', 25691],
['CDMX', 'Iztacalco', 24515],
['Yucatàn', 'Mèrida', 22270]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
