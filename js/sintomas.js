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


['CDMX', 'Iztapalapa', 268971],
['CDMX', 'Álvaro Obregón', 236951],
['CDMX', 'Gustavo A. Madero', 227296],
['CDMX', 'Tlalpan', 181641],
['San Luis Potosí.', 'San Luis Potosí', 154853],
['Puebla.', 'Puebla', 141835],
['Guanajuato', 'León', 136358],
['Querétaro.', 'Querétaro', 123037],
['Nuevo León', 'Monterrey', 117909],
['CDMX', 'Coyoacán', 112734],
['Tabasco', 'Centro', 110091],
['CDMX', 'Azcapotzalco', 103401],
['Jalisco', 'Cuauhtemoc', 102800],
['Jalisco', 'Guadalajara', 97311],
['CDMX', 'Xochimilco', 96958],
['Yucatán', 'Mérida', 95588],
['Edo. Méx.', 'Ecatepec', 92868],
['CDMX', 'Tlahuac', 89828],
['Sinaloa', 'Culiacán', 84669],
['CDMX', 'Venustiano Carranza', 84259],
['Sonora', 'Hermosillo', 81153],
['Aguascalientes.', 'Aguascalientes', 80815]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
