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


['CDMX', 'Iztapalapa', 150687],
['CDMX', 'Álvaro Obregòn', 137786],
['CDMX', 'Gustavo A. Madero', 108011],
['CDMX', 'Tlalpan', 92634],
['Puebla.', 'Puebla', 76348],
['Querétaro.', 'Querétaro', 63693],
['Tabasco', 'Centro', 60724],
['Guanajuato', 'León', 57714],
['Nuevo León', 'Monterrey', 57186],
['San Luis Potosí.', 'San Luis Potosí', 51792],
['CDMX', 'Coyoacán', 51628],
['CDMX', 'Xochimilco', 51554],
['CDMX', 'Tlahuac', 49697],
['CDMX', 'Azcapotzalco', 49040],
['CDMX', 'Cuauhtemoc', 48922],
['Edo. Mex', 'Ecatepec', 48841],
['Jalisco', 'Guadalajara', 46662],
['Sonora', 'Hermosillo', 46353],
['CDMX', 'Venustiano Carranza', 45038],
['Yucatán', 'Mérida', 44756],
['Edo. Mex', 'Nezahualcoyotl', 39360],
['CDMX', 'Iztacalco', 37404]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
