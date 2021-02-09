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
['CDMX', 'Iztapalapa', 76448],
['CDMX', 'Álvaro Obregón', 60032],
['CDMX', 'Gustavo A. Madero', 58971],
['CDMX', 'Tlalpan', 49943],
['Puebla.', 'Puebla', 41058],
['Guanajuato', 'León', 37175],
['Querétaro.', 'Querétaro', 37118],
['Nuevo León', 'Monterrey', 33188],
['San Luis Potosí.', 'San Luis Potosí', 31574],
['Sonora', 'Hermosillo', 30987],
['CDMX', 'Coyoacán', 29992],
['CDMX', 'Xochimilco', 27841],
['CDMX', 'Tlahuac', 27604],
['Tabasco', 'Centro', 27416],
['Edo. Mex', 'Ecatepec', 26964],
['CDMX', 'Cuauhtemoc', 26499],
['CDMX', 'Azcapotzalco', 26403],
['Jalisco', 'Guadalajara', 26020],
['CDMX', 'Venustiano Carranza', 24472],
['Edo. Mex', 'Nezahualcoyotl', 21815],
['Chihuahua', 'Juárez', 20905],
['CDMX', 'Iztacalco', 20114]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
