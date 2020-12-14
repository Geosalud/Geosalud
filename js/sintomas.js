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
['CDMX', 'Iztapalapa', 37115],
['CDMX', 'Gustavo A. Madero', 31510],
['CDMX', 'Álvaro Obregón', 27476],
['Puebla.', 'Puebla', 27183],
['CDMX', 'Tlalpan', 24455],
['Guanajuato', 'León', 23845],
['Nuevo León', 'Monterrey', 23085],
['Sonora', 'Hermosillo', 21787],
['San Luis Potosí.', 'San Luis Potosí', 21357],
['Querétaro.', 'Querétaro', 20099],
['Tabasco', 'Centro', 19950],
['Chihuahua', 'Juárez', 18072],
['CDMX', 'Coyoacán', 16997],
['Jalisco', 'Guadalajara', 15730],
['Edo. Mex', 'Ecatepec', 15579],
['Yucatán', 'Mérida', 15184],
['CDMX', 'Cuauhtemoc', 15031],
['CDMX', 'Xochimilco', 14654],
['CDMX', 'Azcapotzalco', 14224],
['CDMX', 'Venustiano Carranza', 14111],
['CDMX', 'Tlahuac', 13731],
['Baja California', 'Mexicali', 13507]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
