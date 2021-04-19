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

['CDMX', 'Iztapalapa', 99836],
['CDMX', 'Alvaro Obregón', 79416],
['CDMX', 'Gustavo A. Madero', 72619],
['CDMX', 'Tlalpan', 62882],
['Puebla.', 'Puebla', 52118],
['Querétaro.', 'Querétaro', 48108],
['Guanajuato', 'León', 43607],
['San Luis Potosí.', 'San Luis Potosí', 37223],
['CDMX', 'Coyoacán', 36955],
['Nuevo León', 'Monterrey', 36640],
['CDMX', 'Xochimilco', 34910],
['Sonora', 'Hermosillo', 33634],
['CDMX', 'Tlahuac', 33548],
['CDMX', 'Azcapotzalco', 32612],
['CDMX', 'Cuauhtemoc', 32453],
['Edo. Mex', 'Ecatepec', 32313],
['Tabasco', 'Centro', 31150],
['Jalisco', 'Guadalajara', 30069],
['CDMX', 'Venustiano Carranza', 29381],
['Edo. Mex', 'Nezahualcoyotl', 26381],
['CDMX', 'Iztacalco', 25056],
['Yucatàn', 'Mérida', 22948]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
