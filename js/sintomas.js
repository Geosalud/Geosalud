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


['CDMX', 'Iztapalapa', 205992],
['CDMX', 'Alvaro Obregon', 188214],
['CDMX', 'Gustavo A. Madero', 169067],
['CDMX', 'Tlalpan', 135789],
['San Luis Potosí.', 'San Luis Potosi', 107969],
['Puebla.', 'Puebla', 106792],
['Guanajuato', 'Leon', 101523],
['Querétaro.', 'Queretaro', 92495],
['Tabasco', 'Centro', 90038],
['Nuevo León', 'Monterrey', 88285],
['Jalisco', 'Guadalajara', 77057],
['CDMX', 'Coyoacan', 76611],
['CDMX', 'Cuauhtemoc', 76457],
['CDMX', 'Xochimilco', 75620],
['CDMX', 'Azcapotzalco', 73552],
['CDMX', 'Tlahuac', 71443],
['Yucatàn', 'Merida', 70757],
['Edo. Mex', 'Ecatepec de Morelos', 68696],
['Sonora', 'Hermosillo', 66870],
['CDMX', 'Venustiano Carranza', 63734],
['Edo. Mex', 'Nezahualcoyotl', 58061],
['CDMX', 'Iztacalco', 57290]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
