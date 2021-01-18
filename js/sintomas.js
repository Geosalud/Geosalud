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
['CDMX', 'Iztapalapa', 60855],
['CDMX', 'Gustavo A. Madero', 47556],
['CDMX', 'Álvaro Obregón', 47123],
['CDMX', 'Tlalpan', 37702],
['Puebla.', 'Puebla', 34588],
['Guanajuato', 'León', 32470],
['Nuevo León', 'Monterrey', 28980],
['Querétaro.', 'Querétaro', 28272],
['Sonora', 'Hermosillo', 27642],
['San Luis Potosí.', 'San Luis Potosí', 26752],
['Tabasco', 'Centro', 25003],
['CDMX', 'Coyoacán', 24999],
['CDMX', 'Xochimilco', 22905],
['CDMX', 'Tlahuac', 22507],
['Edo. Mex', 'Ecatepec', 22296],
['CDMX', 'Cuauhtemoc', 22097],
['Jalisco', 'Guadalajara', 21217],
['CDMX', 'Azcapotzalco', 21140],
['CDMX', 'Venustiano Carranza', 20747],
['Chihuahua', 'Juárez', 19938],
['Edo. Mex', 'Nezahualcoyotl', 18277],
['Yucatán', 'Mérida', 17495]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
