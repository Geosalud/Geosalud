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

['CDMX', 'Iztapalapa', 4711],
['CDMX', 'Gustavo A. Madero', 3024],
['Baja California', 'Mexicali', 2422],
['Tabasco', 'Centro', 2178],
['Baja California', 'Tijuana', 2097],
['Edo. Mex', 'Nezahualcoyotl', 1855],
['CDMX', 'Tlalpan', 1764],
['Puebla.', 'Puebla', 1753],
['Edo. Mex', 'Ecatepec', 1724],
['Sinaloa', 'Culiacán', 1602],
['CDMX', 'Álvaro Obregón', 1544],
['CDMX', 'Coyoacán', 1513],
['CDMX', 'Xochimilco', 1500],
['CDMX', 'Iztacalco', 1412],
['CDMX', 'Cuauhtemoc', 1400],
['Veracruz.', 'Veracruz', 1373],
['Quintana Roo', 'Benito Juárez', 1328],
['CDMX', 'Venustiano Carranza', 1288],
['CDMX', 'Azcapotzalco', 1254],
['CDMX', 'Tlahuac', 1227],
['Guerrero', 'Acapulco', 1124]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
