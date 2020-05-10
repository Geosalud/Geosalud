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
['CDMX', 'Iztapalapa', 1772],
['Baja California', 'Tijuana', 1212],
['CDMX', 'Gustavo A. Madero', 1212],
['Tabasco', 'Centro', 961],
['Baja California', 'Mexicali', 929],
['Sinaloa', 'Culiacán', 875],
['Quintana Roo', 'Benito Juárez', 806],
['CDMX', 'Tlalpan', 755],
['Edo. Mex', 'Nezahualcoyotl', 753],
['Edo. Mex', 'Ecatepec', 720],
['CDMX', 'Alvaro Obregón', 611],
['CDMX', 'Cuauhtemoc', 562],
['Puebla.', 'Puebla', 560],
['CDMX', 'Iztacalco', 549],
['CDMX', 'Coyoacán', 543],
['Yucatán', 'Mérida', 494],
['CDMX', 'Xochimilco', 470],
['CDMX', 'Miguel Hidalgo', 463],
['CDMX', 'Venustiano Carranza', 452],
['Veracruz.', 'Veracruz', 449],
['Edo. Mex', 'Naucalpan', 445]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
