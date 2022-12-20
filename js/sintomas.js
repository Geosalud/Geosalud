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


['CDMX', 'Iztapalapa', 258215],
['CDMX', 'Alvaro Obregón', 228018],
['CDMX', 'Gustavo A. Madero', 217446],
['CDMX', 'Tlalpan', 173099],
['San Luis Potosí.', 'San Luis Potosí', 148644],
['Puebla.', 'Puebla', 134411],
['Guanajuato', 'Leon', 130883],
['Querétaro.', 'Queretaro', 118386],
['Nuevo León', 'Monterrey', 112982],
['CDMX', 'Coyoacán', 106606],
['Tabasco', 'Centro', 106494],
['CDMX', 'Cuauhtemoc', 98089],
['Yucatán', 'Azcapotzalco', 98025],
['Yucatán', 'Merida', 94150],
['Jalisco', 'Guadalajara', 93594],
['CDMX', 'Xochimilco', 93501],
['Edo. Méx.', 'Ecatepec de Morelos', 89617],
['CDMX', 'Tlahuac', 87150],
['Sinaloa', 'Culiacán', 82134],
['CDMX', 'Venustiano Carranza', 80613],
['Sonora', 'Hermosillo', 80119],
['Aguascalientes.', 'Aguascalientes', 75374]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
