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


['CDMX', 'Iztapalapa', 266186],
['CDMX', 'Álvaro Obregón', 235112],
['CDMX', 'Gustavo A. Madero', 224549],
['CDMX', 'Tlalpan', 178818],
['San Luis Potosí.', 'San Luis Potosí', 153577],
['Puebla.', 'Puebla', 139636],
['Guanajuato', 'León', 134386],
['Querétaro.', 'Querétaro', 122037],
['Nuevo León', 'Monterrey', 116208],
['CDMX', 'Coyoacán', 111582],
['Tabasco', 'Centro', 110023],
['CDMX', 'Azcapotzalco', 102110],
['Jalisco', 'Cuauhtemoc', 101603],
['Jalisco', 'Guadalajara', 96428],
['CDMX', 'Xochimilco', 96106],
['Yucatán', 'Mérida', 95342],
['Edo. Méx.', 'Ecatepec', 92010],
['CDMX', 'Tlahuac', 89062],
['Sinaloa', 'Culiacán', 84129],
['CDMX', 'Venustiano Carranza', 83121],
['Sonora', 'Hermosillo', 81006],
['Aguascalientes.', 'Aguascalientes', 79617]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
