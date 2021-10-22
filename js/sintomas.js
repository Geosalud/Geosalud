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


['CDMX', 'Iztapalapa', 152666],
['CDMX', 'Álvaro Obregòn', 139697],
['CDMX', 'Gustavo A. Madero', 109332],
['CDMX', 'Tlalpan', 94392],
['Puebla.', 'Puebla', 77815],
['Querétaro.', 'Querétaro', 64751],
['Tabasco', 'Centro', 62140],
['Guanajuato', 'León', 60049],
['Nuevo León', 'Monterrey', 57981],
['San Luis Potosí.', 'San Luis Potosí', 52981],
['CDMX', 'Coyoacán', 52366],
['CDMX', 'Xochimilco', 52137],
['CDMX', 'Tlahuac', 50329],
['CDMX', 'Cuauhtemoc', 49688],
['CDMX', 'Azcapotzalco', 49589],
['Edo. Mex', 'Ecatepec', 49578],
['Jalisco', 'Guadalajara', 47388],
['Sonora', 'Hermosillo', 46822],
['Yucatán', 'Mérida', 46000],
['CDMX', 'Venustiano Carranza', 45494],
['Edo. Mex', 'Nezahualcoyotl', 39719],
['CDMX', 'Iztacalco', 38710]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
