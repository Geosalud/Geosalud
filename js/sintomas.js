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
['CDMX', 'Iztapalapa', 1963],
['CDMX', 'Gustavo A. Madero', 1296],
['Baja California', 'Tijuana', 1265],
['Tabasco', 'Centro', 1072],
['Baja California', 'Mexicali', 937],
['Sinaloa', 'Culiacán', 932],
['Quintana Roo', 'Benito Juárez', 836],
['Edo. Mex', 'Nezahualcoyotl', 828],
['CDMX', 'Tlalpan', 807],
['Edo. Mex', 'Ecatepec', 796],
['CDMX', 'Álvaro Obregón', 655],
['CDMX', 'Cuauhtemoc', 605],
['CDMX', 'Coyoacán', 604],
['CDMX', 'Iztacalco', 594],
['Puebla.', 'Puebla', 584],
['Yucatán', 'Mérida', 513],
['CDMX', 'Xochimilco', 510],
['Veracruz.', 'Veracruz', 507],
['Edo. Mex', 'Naucalpan', 500],
['CDMX', 'Miguel Hidalgo', 494],
['CDMX', 'Venustiano Carranza', 480]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
