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

['CDMX', 'Iztapalapa', 4926],
['CDMX', 'Gustavo A. Madero', 3254],
['Baja California', 'Mexicali', 2484],
['Tabasco', 'Centro', 2304],
['Baja California', 'Tijuana', 2108],
['Edo. Mex', 'Nezahualcoyotl', 1965],
['Puebla.', 'Puebla', 1861],
['CDMX', 'Tlalpan', 1858],
['Edo. Mex', 'Ecatepec', 1798],
['Sinaloa', 'Culiacán', 1683],
['CDMX', 'Álvaro Obregón', 1678],
['CDMX', 'Coyoacán', 1625],
['CDMX', 'Xochimilco', 1618],
['Veracruz.', 'Veracruz', 1542],
['CDMX', 'Iztacalco', 1505],
['CDMX', 'Cuauhtemoc', 1468],
['Quintana Roo', 'Benito Juárez', 1377],
['CDMX', 'Venustiano Carranza', 1367],
['CDMX', 'Azcapotzalco', 1323],
['CDMX', 'Tlahuac', 1291],
['Guerrero', 'Acapulco', 1218]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
