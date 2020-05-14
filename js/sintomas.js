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


['CDMX', 'Iztapalapa', 2173],
['CDMX', 'Gustavo A. Madero', 1419],
['Baja California', 'Tijuana', 1382],
['Tabasco', 'Centro', 1197],
['Baja California', 'Mexicali', 1090],
['Sinaloa', 'Culiacán', 978],
['Edo. Mex', 'Nezahualcoyotl', 922],
['CDMX', 'Tlalpan', 901],
['Quintana Roo', 'Benito Juárez', 877],
['Edo. Mex', 'Ecatepec', 874],
['CDMX', 'Álvaro Obregón', 709],
['CDMX', 'Coyoacán', 673],
['CDMX', 'Cuauhtemoc', 652],
['CDMX', 'Iztacalco', 648],
['Puebla.', 'Puebla', 637],
['CDMX', 'Xochimilco', 588],
['Veracruz.', 'Veracruz', 587],
['Yucatán', 'Mérida', 551],
['Edo. Mex', 'Naucalpan', 537],
['CDMX', 'Venustiano Carranza', 535],
['CDMX', 'Miguel Hidalgo', 519]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
