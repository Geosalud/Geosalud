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


['CDMX', 'Iztapalapa', 263235],
['CDMX', 'Álvaro Obregón', 233142],
['CDMX', 'Gustavo A. Madero', 222017],
['CDMX', 'Tlalpan', 176694],
['San Luis Potosí.', 'San Luis Potosí', 151840],
['Puebla.', 'Puebla', 137249],
['Guanajuato', 'León', 132899],
['Querétaro.', 'Querétaro', 120513],
['Nuevo León', 'Monterrey', 114708],
['CDMX', 'Coyoacán', 110112],
['Tabasco', 'Centro', 109694],
['CDMX', 'Azcapotzalco', 100782],
['Jalisco', 'Cuauhtemoc', 100456],
['Jalisco', 'Guadalajara', 95413],
['CDMX', 'Xochimilco', 95119],
['Yucatán', 'Mérida', 95077],
['Edo. Méx.', 'Ecatepec', 91065],
['CDMX', 'Tlahuac', 88363],
['Sinaloa', 'Culiacán', 83634],
['CDMX', 'Venustiano Carranza', 82220],
['Sonora', 'Hermosillo', 80797],
['Aguascalientes.', 'Aguascalientes', 77347]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
