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

['CDMX', 'Iztapalapa', 107269],
['CDMX', 'Alvaro Obregón', 89264],
['CDMX', 'Gustavo A. Madero', 76468],
['CDMX', 'Tlalpan', 67264],
['Puebla.', 'Puebla', 54784],
['Querétaro.', 'Querétaro', 49276],
['Guanajuato', 'León', 44311],
['San Luis Potosí.', 'San Luis Potosí', 39797],
['CDMX', 'Coyoacán', 39085],
['Nuevo León', 'Monterrey', 38145],
['CDMX', 'Xochimilco', 36755],
['Tabasco', 'Centro', 36366],
['Sonora', 'Hermosillo', 35973],
['CDMX', 'Tlahuac', 35111],
['CDMX', 'Cuauhtemoc', 34705],
['CDMX', 'Azcapotzalco', 34574],
['Edo. Mex', 'Ecatepec', 34190],
['CDMX', 'Venustiano Carranza', 31249],
['Jalisco', 'Guadalajara', 31110],
['Yucatàn', 'Mérida', 28877],
['Edo. Mex', 'Nezahualcoyotl', 28163],
['CDMX', 'Iztacalco', 26562]









        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
