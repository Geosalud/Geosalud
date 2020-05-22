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

['CDMX', 'Iztapalapa', 3422],
['CDMX', 'Gustavo A. Madero', 2076],
['Baja California', 'Tijuana', 1752],
['Tabasco', 'Centro', 1665],
['Baja California', 'Mexicali', 1630],
['Edo. Mex', 'Nezahualcoyotl', 1323],
['CDMX', 'Tlalpan', 1281],
['Edo. Mex', 'Ecatepec', 1247],
['Sinaloa', 'Culiacán', 1246],
['Quintana Roo', 'Benito Juárez', 1073],
['CDMX', 'Álvaro Obregón', 1044],
['Puebla.', 'Puebla', 1027],
['CDMX', 'Coyoacán', 1010],
['CDMX', 'Iztacalco', 987],
['CDMX', 'Cuauhtemoc', 972],
['CDMX', 'Xochimilco', 948],
['Veracruz.', 'Veracruz', 927],
['CDMX', 'Venustiano Carranza', 885],
['CDMX', 'Tlahuac', 823],
['CDMX', 'Azcapotzalco', 808],
['Edo. Mex', 'Naucalpan', 785]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
