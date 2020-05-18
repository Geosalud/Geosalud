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

['CDMX', 'Iztapalapa', 2758],
['CDMX', 'Gustavo A. Madero', 1745],
['Baja California', 'Tijuana', 1559],
['Tabasco', 'Centro', 1415],
['Baja California', 'Mexicali', 1350],
['Sinaloa', 'Culiacán', 1121],
['CDMX', 'Tlalpan', 1101],
['Edo. Mex', 'Nezahualcoyotl', 1086],
['Edo. Mex', 'Ecatepec', 1084],
['Quintana Roo', 'Benito Juárez', 973],
['CDMX', 'Álvaro Obregón', 855],
['CDMX', 'Coyoacán', 819],
['CDMX', 'Iztacalco', 817],
['CDMX', 'Cuauhtemoc', 807],
['Puebla.', 'Puebla', 789],
['Veracruz.', 'Veracruz', 739],
['CDMX', 'Xochimilco', 728],
['CDMX', 'Venustiano Carranza', 719],
['Edo. Mex', 'Naucalpan', 663],
['Yucatán', 'Mérida', 652],
['CDMX', 'Azcapotzalco', 643]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
