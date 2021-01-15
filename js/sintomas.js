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


['CDMX', 'Iztapalapa', 57277],
['CDMX', 'Gustavo A. Madero', 45369],
['CDMX', 'Álvaro Obregón', 44462],
['CDMX', 'Tlalpan', 35614],
['Puebla.', 'Puebla', 33478],
['Guanajuato', 'León', 31225],
['Nuevo León', 'Monterrey', 28355],
['Querétaro.', 'Querétaro', 27211],
['Sonora', 'Hermosillo', 27088],
['San Luis Potosí.', 'San Luis Potosí', 25821],
['Tabasco', 'Centro', 24584],
['CDMX', 'Coyoacán', 23968],
['CDMX', 'Xochimilco', 22081],
['CDMX', 'Tlahuac', 21476],
['Edo. Mex', 'Ecatepec', 21282],
['CDMX', 'Cuauhtemoc', 21221],
['Jalisco', 'Guadalajara', 20411],
['CDMX', 'Azcapotzalco', 19946],
['CDMX', 'Venustiano Carranza', 19928],
['Chihuahua', 'Juárez', 19886],
['Edo. Mex', 'Nezahualcoyotl', 17457],
['Yucatán', 'Mérida', 17088]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
