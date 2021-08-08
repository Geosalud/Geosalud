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



['CDMX', 'Iztapalapa', 127496],
['CDMX', 'Álvaro Obregón', 115165],
['CDMX', 'Gustavo A. Madero', 92247],
['CDMX', 'Tlalpan', 78523],
['Puebla.', 'Puebla', 59261],
['Querétaro.', 'Querétaro', 52999],
['Guanajuato', 'León', 47360],
['CDMX', 'Coyoacán', 44999],
['Nuevo León', 'Monterrey', 44756],
['San Luis Potosí.', 'San Luis Potosí', 43263],
['CDMX', 'Xochimilco', 43233],
['Tabasco', 'Centro', 42942],
['CDMX', 'Tlahuac', 41901],
['CDMX', 'Cuauhtemoc', 41478],
['CDMX', 'Azcapotzalco', 40934],
['Edo. Mex', 'Ecatepec', 40701],
['Sonora', 'Hermosillo', 40355],
['CDMX', 'Venustiano Carranza', 38110],
['Jalisco', 'Guadalajara', 36304],
['Yucatán', 'Merida', 35014],
['Edo. Mex', 'Nezahualcoyotl', 33709],
['CDMX', 'Iztacalco', 32821]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
