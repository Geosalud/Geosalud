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


['CDMX', 'Iztapalapa', 54894],
['CDMX', 'Gustavo A. Madero', 44138],
['CDMX', 'Alvaro Obregon', 42782],
['CDMX', 'Tlalpan', 34394],
['Puebla.', 'Puebla', 32959],
['Guanajuato', 'León', 30590],
['Nuevo León', 'Monterrey', 27975],
['Querétaro.', 'Querétaro', 26740],
['Sonora', 'Hermosillo', 26567],
['San Luis Potosí.', 'San Luis Potosí', 25220],
['Tabasco', 'Centro', 24302],
['CDMX', 'Coyoacán', 23355],
['CDMX', 'Xochimilco', 21316],
['Edo. Mex', 'Ecatepec', 20773],
['CDMX', 'Tlahuac', 20724],
['CDMX', 'Cuauhtemoc', 20653],
['Jalisco', 'Guadalajara', 19980],
['Chihuahua', 'Juárez', 19771],
['CDMX', 'Venustiano Carranza', 19435],
['CDMX', 'Azcapotzalco', 19300],
['Yucatán', 'Mérida', 17112],
['Edo. Mex', 'Nezahualcoyotl', 17088]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
