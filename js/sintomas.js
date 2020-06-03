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

['CDMX', 'Iztapalapa', 5008],
['CDMX', 'Gustavo A. Madero', 3337],
['Baja California', 'Mexicali', 2568],
['Tabasco', 'Centro', 2467],
['Baja California', 'Tijuana', 2125],
['Edo. Mex', 'Nezahualcoyotl', 2008],
['Puebla.', 'Puebla', 1942],
['CDMX', 'Tlalpan', 1938],
['Edo. Mex', 'Ecatepec', 1859],
['CDMX', 'Álvaro Obregón', 1725],
['Sinaloa', 'Culiacán', 1699],
['CDMX', 'Coyoacán', 1671],
['CDMX', 'Xochimilco', 1663],
['Veracruz.', 'Veracruz', 1645],
['CDMX', 'Iztacalco', 1535],
['CDMX', 'Cuauhtemoc', 1535],
['CDMX', 'Venustiano Carranza', 1406],
['Quintana Roo', 'Benito Juárez', 1391],
['CDMX', 'Azcapotzalco', 1387],
['CDMX', 'Tlahuac', 1310],
['Guerrero', 'Acapulco', 1290]









        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
