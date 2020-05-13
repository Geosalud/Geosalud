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


['CDMX', 'Iztapalapa', 2093],
['CDMX', 'Gustavo A. Madero', 1351],
['Baja California', 'Tijuana', 1318],
['Tabasco', 'Centro', 1139],
['Baja California', 'Mexicali', 1005],
['Sinaloa', 'Culiacán', 954],
['Edo. Mex', 'Nezahualcoyotl', 885],
['CDMX', 'Tlalpan', 864],
['Quintana Roo', 'Benito Juárez', 854],
['Edo. Mex', 'Ecatepec', 845],
['CDMX', 'Alvaro Obregón', 684],
['CDMX', 'Coyoacán', 650],
['CDMX', 'Cuauhtemoc', 629],
['CDMX', 'Iztacalco', 626],
['Puebla.', 'Puebla', 614],
['Veracruz.', 'Veracruz', 566],
['CDMX', 'Xochimilco', 547],
['Yucatán', 'Mérida', 529],
['Edo. Mex', 'Naucalpan', 525],
['CDMX', 'Venustiano Carranza', 514],
['CDMX', 'Miguel Hidalgo', 509]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
