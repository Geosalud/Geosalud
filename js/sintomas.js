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


['CDMX', 'Iztapalapa', 223279],
['CDMX', 'Álvaro Obregón', 201931],
['CDMX', 'Gustavo A. Madero', 184068],
['CDMX', 'Tlalpan', 147754],
['San Luis Potosí.', 'San Luis Potosí', 116155],
['Puebla.', 'Puebla', 112095],
['Guanajuato', 'León', 106145],
['Querétaro.', 'Querétaro', 98035],
['Nuevo León', 'Monterrey', 95355],
['Tabasco', 'Centro', 92901],
['CDMX', 'Coyoacán', 87633],
['CDMX', 'Cuauhtemoc', 84327],
['CDMX', 'Guadalajara', 82868],
['CDMX', 'Azcapotzalco', 81442],
['CDMX', 'Xochimilco', 80481],
['Yucatàn', 'Mérida', 80294],
['Edo. Mex', 'Ecatepec', 79391],
['CDMX', 'Tlahuac', 76446],
['Sonora', 'Hermosillo', 70454],
['CDMX', 'Venustiano Carranza', 69713],
['CDMX', 'Iztacalco', 62596],
['Edo. Mex', 'Nezahualcoyotl', 62585]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
