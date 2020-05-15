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


['CDMX', 'Iztapalapa', 2319],
['CDMX', 'Gustavo A. Madero', 1529],
['Baja California', 'Tijuana', 1422],
['Tabasco', 'Centro', 1241],
['Baja California', 'Mexicali', 1126],
['Sinaloa', 'Culiacán', 1024],
['Edo. Mex', 'Nezahualcoyotl', 968],
['Edo. Mex', 'Ecatepec', 943],
['CDMX', 'Tlalpan', 933],
['Quintana Roo', 'Benito Juárez', 909],
['CDMX', 'Álvaro Obregón', 758],
['CDMX', 'Coyoacán', 715],
['CDMX', 'Cuauhtemoc', 694],
['CDMX', 'Iztacalco', 681],
['Puebla.', 'Puebla', 676],
['Veracruz.', 'Veracruz', 615],
['CDMX', 'Xochimilco', 614],
['CDMX', 'Venustiano Carranza', 576],
['Yucatán', 'Mérida', 570],
['Edo. Mex', 'Naucalpan', 567],
['CDMX', 'Miguel Hidalgo', 552]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
