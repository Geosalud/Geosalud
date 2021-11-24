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


['CDMX', 'Iztapalapa', 154579],
['CDMX', 'Álvaro Obregòn', 141896],
['CDMX', 'Gustavo A. Madero', 111303],
['CDMX', 'Tlalpan', 97460],
['Puebla.', 'Puebla', 78840],
['Querétaro.', 'Querétaro', 66007],
['Guanajuato', 'León', 62918],
['Tabasco', 'Centro', 62909],
['Nuevo León', 'Monterrey', 58880],
['San Luis Potosí.', 'San Luis Potosí', 54542],
['CDMX', 'Coyoacán', 53132],
['CDMX', 'Xochimilco', 52696],
['Edo. Mex', 'Tlahuac', 51010],
['Edo. Mex', 'Ecatepec', 50332],
['CDMX', 'Azcapotzalco', 50260],
['CDMX', 'Cuauhtemoc', 50250],
['Sonora', 'Hermosillo', 48657],
['Jalisco', 'Guadalajara', 48371],
['Yucatán', 'Mérida', 47527],
['CDMX', 'Venustiano Carranza', 46004],
['Edo. Mex', 'Nezahualcoyotl', 40154],
['CDMX', 'Iztacalco', 39209]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
