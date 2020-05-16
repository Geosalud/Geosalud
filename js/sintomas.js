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


['CDMX', 'Iztapalapa', 2479],
['CDMX', 'Gustavo A. Madero', 1611],
['Baja California', 'Tijuana', 1462],
['Tabasco', 'Centro', 1288],
['Baja California', 'Mexicali', 1254],
['Sinaloa', 'Culiacán', 1065],
['CDMX', 'Tlalpan', 1014],
['Edo. Mex', 'Nezahualcoyotl', 1003],
['Edo. Mex', 'Ecatepec', 983],
['Quintana Roo', 'Benito Juárez', 929],
['CDMX', 'Álvaro Obregón', 800],
['CDMX', 'Coyoacán', 759],
['CDMX', 'Cuauhtemoc', 738],
['CDMX', 'Iztacalco', 730],
['Puebla', 'Puebla', 713],
['CDMX', 'Xochimilco', 660],
['Veracruz', 'Veracruz', 627],
['CDMX', 'Venustiano Carranza', 626],
['Edo. Mex', 'Naucalpan', 612],
['Yucatán', 'Mérida', 604],
['CDMX', 'Miguel Hidalgo', 584]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
