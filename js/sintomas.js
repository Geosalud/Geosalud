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

['CDMX', 'Iztapalapa', 102190],
['CDMX', 'Alvaro Obregón', 81286],
['CDMX', 'Gustavo A. Madero', 73579],
['CDMX', 'Tlalpan', 63961],
['Puebla.', 'Puebla', 53095],
['Querétaro.', 'Querétaro', 48523],
['Guanajuato', 'León', 43867],
['San Luis Potosí.', 'San Luis Potosí', 37859],
['CDMX', 'Coyoacán', 37422],
['Nuevo León', 'Monterrey', 36926],
['CDMX', 'Xochimilco', 35406],
['Sonora', 'Hermosillo', 34116],
['CDMX', 'Tlahuac', 33960],
['CDMX', 'Azcapotzalco', 33011],
['CDMX', 'Cuauhtemoc', 32882],
['Edo. Mex', 'Ecatepec', 32625],
['Tabasco', 'Centro', 31761],
['Jalisco', 'Guadalajara', 30359],
['CDMX', 'Venustiano Carranza', 29715],
['Edo. Mex', 'Nezahualcoyotl', 26786],
['CDMX', 'Iztacalco', 25403],
['Yucatàn', 'Mérida', 23538]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
