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

['CDMX', 'Iztapalapa', 95361],
['CDMX', 'Alvaro Obregón', 75103],
['CDMX', 'Gustavo A. Madero', 70000],
['CDMX', 'Tlalpan', 60408],
['Puebla.', 'Puebla', 49606],
['Querétaro.', 'Querétaro', 45983],
['Guanajuato', 'León', 42823],
['San Luis Potosí.', 'San Luis Potosí', 36106],
['Nuevo León', 'Monterrey', 35962],
['CDMX', 'Coyoacán', 35604],
['CDMX', 'Xochimilco', 33866],
['Sonora', 'Hermosillo', 32841],
['CDMX', 'Tlahuac', 32544],
['CDMX', 'Azcapotzalco', 31586],
['CDMX', 'Cuauhtemoc', 31301],
['Edo. Mex', 'Ecatepec', 31230],
['Tabasco', 'Centro', 30081],
['Jalisco', 'Guadalajara', 29411],
['CDMX', 'Venustiano Carranza', 28310],
['Edo. Mex', 'Nezahualcoyotl', 25399],
['CDMX', 'Iztacalco', 24200],
['CDMX', 'Miguel Hidalgo', 21983]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
