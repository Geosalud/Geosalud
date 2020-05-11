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
['CDMX', 'Iztapalapa', 1917],
['CDMX', 'Gustavo A. Madero', 1265],
['Baja California', 'Tijuana', 1250],
['Tabasco', 'Centro', 991],
['Baja California', 'Mexicali', 934],
['Sinaloa', 'Culiacán', 900],
['Quintana Roo', 'Benito Juárez', 813],
['Edo. Mex', 'Nezahualcoyotl', 797],
['CDMX', 'Tlalpan', 792],
['Edo. Mex', 'Ecatepec', 769],
['CDMX', 'Alvaro Obregón', 636],
['CDMX', 'Cuauhtemoc', 594],
['CDMX', 'Coyoacán', 589],
['CDMX', 'Iztacalco', 580],
['Puebla.', 'Puebla', 560],
['Yucatán', 'Mérida', 509],
['CDMX', 'Xochimilco', 496],
['Edo. Mex', 'Naucalpan de Juarez', 486],
['CDMX', 'Miguel Hidalgo', 484],
['CDMX', 'Venustiano Carranza', 468],
['Veracruz.', 'Veracruz', 460]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
