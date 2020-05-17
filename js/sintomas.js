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

['CDMX', 'Iztapalapa', 2618],
['CDMX', 'Gustavo A. Madero', 1692],
['Baja California', 'Tijuana', 1537],
['Tabasco', 'Centro', 1348],
['Baja California', 'Mexicali', 1294],
['Sinaloa', 'Culiacán', 1093],
['CDMX', 'Tlalpan', 1054],
['Edo. Mex', 'Nezahualcoyotl', 1045],
['Edo. Mex', 'Ecatepec', 1036],
['Quintana Roo', 'Benito Juárez', 953],
['CDMX', 'Álvaro Obregón', 823],
['CDMX', 'Coyoacán', 801],
['CDMX', 'Cuauhtemoc', 773],
['CDMX', 'Iztacalco', 760],
['Puebla.', 'Puebla', 760],
['CDMX', 'Xochimilco', 713],
['Veracruz.', 'Veracruz', 679],
['CDMX', 'Venustiano Carranza', 677],
['Edo. Mex', 'Naucalpan', 650],
['Yucatán', 'Mérida', 639],
['CDMX', 'Miguel Hidalgo', 605]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
