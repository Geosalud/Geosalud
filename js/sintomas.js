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


['CDMX', 'Iztapalapa', 271873],
['CDMX', 'Álvaro Obregón', 238975],
['CDMX', 'Gustavo A. Madero', 230107],
['CDMX', 'Tlalpan', 184239],
['San Luis Potosí.', 'San Luis Potosí', 155849],
['Puebla.', 'Puebla', 143830],
['Guanajuato', 'León', 137550],
['Querétaro.', 'Querétaro', 123955],
['Nuevo León', 'Monterrey', 119467],
['CDMX', 'Coyoacán', 114085],
['Tabasco', 'Centro', 110126],
['CDMX', 'Azcapotzalco', 104727],
['Jalisco', 'Cuauhtemoc', 104011],
['Jalisco', 'Xochimilco', 97936],
['CDMX', 'Guadalajara', 97798],
['Yucatán', 'Mérida', 95774],
['Edo. Méx.', 'Ecatepec', 93951],
['CDMX', 'Tlahuac', 90590],
['Sinaloa', 'Culiacán', 85251],
['CDMX', 'Venustiano Carranza', 85237],
['Sonora', 'Hermosillo', 81387],
['Aguascalientes.', 'Aguascalientes', 81139]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
