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


['CDMX', 'Iztapalapa', 52224],
['CDMX', 'Gustavo A. Madero', 42427],
['CDMX', 'Álvaro Obregón', 40442],
['CDMX', 'Tlalpan', 32913],
['Puebla.', 'Puebla', 32109],
['Guanajuato', 'León', 29641],
['Nuevo León', 'Monterrey', 27154],
['Querétaro.', 'Querétaro', 25771],
['Sonora', 'Hermosillo', 25728],
['San Luis Potosí.', 'San Luis Potosí', 24254],
['Tabasco', 'Centro', 23641],
['CDMX', 'Coyoacán', 22545],
['CDMX', 'Xochimilco', 20380],
['Edo. Mex', 'Ecatepec', 20118],
['CDMX', 'Cuauhtemoc', 20022],
['CDMX', 'Tlahuac', 19893],
['Chihuahua', 'Juárez', 19587],
['Jalisco', 'Guadalajara', 19351],
['CDMX', 'Venustiano Carranza', 18772],
['CDMX', 'Azcapotzalco', 18510],
['Yucatán', 'Mérida', 16793],
['Edo. Mex', 'Nezahualcoyotl', 16595]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
