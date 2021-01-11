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


['CDMX', 'Iztapalapa', 53618],
['CDMX', 'Gustavo A. Madero', 43216],
['CDMX', 'Álvaro Obregón', 41868],
['CDMX', 'Tlalpan', 33682],
['Puebla.', 'Puebla', 32663],
['Guanajuato', 'León', 30104],
['Nuevo León', 'Monterrey', 27661],
['Querétaro.', 'Querétaro', 26268],
['Sonora', 'Hermosillo', 26092],
['San Luis Potosí.', 'San Luis Potosí', 24809],
['Tabasco', 'Centro', 23982],
['CDMX', 'Coyoacán', 22985],
['CDMX', 'Xochimilco', 20913],
['Edo. Mex', 'Ecatepec', 20528],
['CDMX', 'Cuauhtemoc', 20335],
['CDMX', 'Tlahuac', 20305],
['Jalisco', 'Guadalajara', 19698],
['Chihuahua', 'Juárez', 19638],
['CDMX', 'Venustiano Carranza', 19156],
['CDMX', 'Azcapotzalco', 18920],
['Yucatán', 'Mérida', 16945],
['Edo. Mex', 'Nezahualcoyotl', 16852]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
