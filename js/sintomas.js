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


['CDMX', 'Iztapalapa', 49523],
['CDMX', 'Gustavo A. Madero', 40617],
['CDMX', 'Álvaro Obregón', 38163],
['Puebla.', 'Puebla', 31361],
['CDMX', 'Tlalpan', 31324],
['Guanajuato', 'León', 28726],
['Nuevo León', 'Monterrey', 26504],
['Sonora', 'Hermosillo', 25153],
['Querétaro.', 'Querétaro', 24954],
['San Luis Potosí.', 'San Luis Potosí', 23619],
['Tabasco', 'Centro', 23110],
['CDMX', 'Coyoacán', 21551],
['CDMX', 'Xochimilco', 19564],
['Edo. Mex', 'Ecatepec', 19462],
['Chihuahua', 'Juárez', 19353],
['CDMX', 'Cuauhtemoc', 19193],
['CDMX', 'Tlahuac', 18850],
['Jalisco', 'Guadalajara', 18795],
['CDMX', 'Venustiano Carranza', 17996],
['CDMX', 'Azcapotzalco', 17796],
['Yucatán', 'Mérida', 16537],
['Edo. Mex', 'Nezahualcoyotl', 16093]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
