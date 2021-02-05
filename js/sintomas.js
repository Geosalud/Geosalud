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


['CDMX', 'Iztapalapa', 74699],
['CDMX', 'Álvaro Obregón', 58525],
['CDMX', 'Gustavo A. Madero', 57771],
['CDMX', 'Tlalpan', 48764],
['Puebla.', 'Puebla', 40257],
['Guanajuato', 'León', 36570],
['Querétaro.', 'Querétaro', 36007],
['Nuevo León', 'Monterrey', 32786],
['San Luis Potosí.', 'San Luis Potosí', 30915],
['Sonora', 'Hermosillo', 30620],
['CDMX', 'Coyoacán', 29445],
['CDMX', 'Xochimilco', 27231],
['Tabasco', 'Centro', 27111],
['CDMX', 'Tlahuac', 27024],
['Edo. Mex', 'Ecatepec', 26469],
['CDMX', 'Cuauhtemoc', 26068],
['CDMX', 'Azcapotzalco', 26013],
['Jalisco', 'Guadalajara', 25626],
['CDMX', 'Venustiano Carranza', 24049],
['Edo. Mex', 'Nezahualcoyotl', 21459],
['Chihuahua', 'Juàrez', 20905],
['CDMX', 'Iztacalco', 20114]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
