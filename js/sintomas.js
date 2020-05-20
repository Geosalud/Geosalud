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

['CDMX', 'Iztapalapa', 3097],
['CDMX', 'Gustavo A. Madero', 1896],
['Baja California', 'Tijuana', 1636],
['Tabasco', 'Centro', 1507],
['Baja California', 'Mexicali', 1473],
['Edo. Mex', 'Nezahualcoyotl', 1216],
['CDMX', 'Tlalpan', 1204],
['Sinaloa', 'Culiacán', 1178],
['Edo. Mex', 'Ecatepec', 1167],
['Quintana Roo', 'Benito Juárez', 1011],
['CDMX', 'Álvaro Obregón', 947],
['CDMX', 'Coyoacán', 920],
['CDMX', 'Iztacalco', 910],
['Puebla.', 'Puebla', 895],
['CDMX', 'Cuauhtemoc', 890],
['CDMX', 'Xochimilco', 883],
['Veracruz.', 'Veracruz', 834],
['CDMX', 'Venustiano Carranza', 807],
['CDMX', 'Tlahuac', 739],
['Edo. Mex', 'Naucalpan', 715],
['CDMX', 'Azcapotzalco', 709]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
