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
['CDMX', 'Iztapalapa', 36695],
['CDMX', 'Gustavo A. Madero', 31132],
['Puebla.', 'Puebla', 27107],
['CDMX', 'Álvaro Obregón', 26875],
['CDMX', 'Tlalpan', 24070],
['Guanajuato', 'León', 23586],
['Nuevo León', 'Monterrey', 22962],
['Sonora', 'Hermosillo', 21739],
['San Luis Potosí.', 'San Luis Potosí', 21246],
['Querétaro.', 'Querétaro', 19878],
['Tabasco', 'Centro', 19709],
['Chihuahua', 'Juárez', 17751],
['CDMX', 'Coyoacán', 16852],
['Jalisco', 'Guadalajara', 15590],
['Edo. Mex', 'Ecatepec', 15373],
['Yucatán', 'Mérida', 15140],
['CDMX', 'Cuauhtemoc', 14833],
['CDMX', 'Xochimilco', 14525],
['CDMX', 'Azcapotzalco', 14124],
['CDMX', 'Venustiano Carranza', 13835],
['CDMX', 'Tlahuac', 13589],
['Baja California', 'Tlahuac', 13451]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
