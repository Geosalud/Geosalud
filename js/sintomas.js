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

['CDMX', 'Iztapalapa', 118325],
['CDMX', 'Alvaro Obregón', 106172],
['CDMX', 'Gustavo A. Madero', 86405],
['CDMX', 'Tlalpan', 75082],
['Puebla.', 'Puebla', 56927],
['Querétaro.', 'Querétaro', 51520],
['Guanajuato', 'León', 45985],
['CDMX', 'Coyoacán', 43079],
['San Luis Potosí.', 'San Luis Potosí', 41429],
['Nuevo León', 'Monterrey', 41364],
['Tabasco', 'Centro', 40814],
['CDMX', 'Xochimilco', 40677],
['CDMX', 'Tlahuac', 39346],
['CDMX', 'Cuauhtemoc', 39036],
['Sonora', 'Hermosillo', 38806],
['CDMX', 'Azcapotzalco', 38366],
['Edo. Mex', 'Ecatepec', 37854],
['CDMX', 'Venustiano Carranza', 35481],
['Yucatàn', 'Mérida', 33599],
['Jalisco', 'Guadalajara', 33577],
['Edo. Mex', 'Nezahualcoyotl', 31259],
['CDMX', 'Iztacalco', 30436]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
