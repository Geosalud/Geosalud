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

['CDMX', 'Iztapalapa', 4419],
['CDMX', 'Gustavo A. Madero', 2836],
['Baja California', 'Mexicali', 2257],
['Baja California', 'Tijuana', 2035],
['Tabasco', 'Centro', 2029],
['Edo. Mex', 'Nezahualcoyotl', 1771],
['CDMX', 'Tlalpan', 1641],
['Edo. Mex', 'Ecatepec', 1633],
['Puebla.', 'Puebla', 1595],
['Sinaloa', 'Culiacán', 1532],
['CDMX', 'Álvaro Obregón', 1451],
['CDMX', 'Coyoacán', 1393],
['CDMX', 'Xochimilco', 1371],
['CDMX', 'Iztacalco', 1344],
['CDMX', 'Cuauhtemoc', 1338],
['Veracruz', 'Veracruz', 1323],
['Quintana Roo', 'Benito Juárez', 1287],
['CDMX', 'Venustiano Carranza', 1211],
['CDMX', 'Tlahuac', 1170],
['CDMX', 'Azcapotzalco', 1156],
['Edo. Mex', 'Naucalpan', 1018]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
