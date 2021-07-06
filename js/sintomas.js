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

['CDMX', 'Iztapalapa', 109445],
['CDMX', 'Alvaro Obregón', 93498],
['CDMX', 'Gustavo A. Madero', 78446],
['CDMX', 'Tlalpan', 68926],
['Puebla.', 'Puebla', 55159],
['Querétaro.', 'Querétaro', 49543],
['Guanajuato', 'León', 44448],
['San Luis Potosí.', 'San Luis Potosí', 40214],
['CDMX', 'Coyoacán', 39921],
['Nuevo León', 'Monterrey', 38796],
['Tabasco', 'Centro', 38293],
['CDMX', 'Xochimilco', 37460],
['Sonora', 'Hermosillo', 36992],
['CDMX', 'Tlahuac', 35985],
['CDMX', 'Cuauhtemoc', 35776],
['CDMX', 'Azcapotzalco', 35320],
['Edo. Mex', 'Ecatepec', 34902],
['CDMX', 'Venustiano Carranza', 32201],
['Jalisco', 'Guadalajara', 31411],
['Yucatàn', 'Mérida', 31007],
['Edo. Mex', 'Nezahualcoyotl', 28695],
['CDMX', 'Iztacalco', 27271]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
