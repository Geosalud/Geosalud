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

['CDMX', 'Iztapalapa', 91112],
['CDMX', 'Alvaro Obregón', 71789],
['CDMX', 'Gustavo A. Madero', 67954],
['CDMX', 'Tlalpan', 58440],
['Puebla.', 'Puebla', 47789],
['Querétaro.', 'Querétaro', 44175],
['Guanajuato', 'León', 41520],
['San Luis Potosí.', 'San Luis Potosí', 35612],
['Nuevo León', 'Monterrey', 35479],
['CDMX', 'Coyoacán', 34636],
['CDMX', 'Xochimilco', 32816],
['Sonora', 'Hermosillo', 32560],
['CDMX', 'Tlahuac', 31719],
['CDMX', 'Azcapotzalco', 30661],
['CDMX', 'Cuauhtemoc', 30475],
['Edo. Mex', 'Ecatepec', 30451],
['Tabasco', 'Centro', 29494],
['Jalisco', 'Guadalajara', 28911],
['CDMX', 'Venustiano Carranza', 27558],
['Edo. Mex', 'Nezahualcoyotl', 24693],
['CDMX', 'Iztacalco', 23428],
['Chihuahua', 'Juárez', 21480]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
