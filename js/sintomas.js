Highcharts.chart('sintomas', {

    title: {
        text: '.',
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
['CDMX', 'Iztapalapa', 1680],
['Baja California', 'Tijuana', 1182],
['CDMX', 'Gustavo A. Madero', 1139],
['Tabasco', 'Centro', 919],
['Baja California', 'Mexicali', 882],
['Sinaloa', 'Culiacán', 870],
['Quintana Roo', 'Benito Juarez', 777],
['CDMX', 'Nezahualcoyotl', 719],
['Edo. Mex', 'Tlalpan', 714],
['Edo. Mex', 'Ecatepec', 669],
['CDMX', 'Alvaro Obregón', 589],
['CDMX', 'Iztacalco', 534],
['CDMX', 'Cuauhtemoc', 528],
['Puebla', 'Puebla.', 528],
['CDMX', 'Coyoacán', 507],
['Yucatán', 'Merida', 476],
['CDMX', 'Miguel Hidalgo', 444],
['CDMX', 'Xochimilco', 440],
['Edo. Mex', 'Naucalpan', 431],
['CDMX', 'Venustiano Carranza', 410],
['Veracruz', 'Veracruz.', 396]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
