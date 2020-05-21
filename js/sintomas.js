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

['CDMX', 'Iztapalapa', 3247],
['CDMX', 'Gustavo A. Madero', 1954],
['Baja California', 'Tijuana', 1707],
['Tabasco', 'Centro', 1596],
['Baja California', 'Mexicali', 1509],
['Edo. Mex', 'Nezahualcoyotl', 1270],
['CDMX', 'Tlalpan', 1232],
['Sinaloa', 'Culiacán', 1226],
['Edo. Mex', 'Ecatepec', 1216],
['Quintana Roo', 'Benito Juárez', 1026],
['CDMX', 'Álvaro Obregón', 1006],
['CDMX', 'Coyoacán', 964],
['Puebla.', 'Puebla', 956],
['CDMX', 'Iztacalco', 931],
['CDMX', 'Cuauhtemoc', 920],
['CDMX', 'Xochimilco', 902],
['Veracruz.', 'Veracruz', 867],
['CDMX', 'Venustiano Carranza', 836],
['CDMX', 'Tlahuac', 761],
['Edo. Mex', 'Naucalpan', 761],
['CDMX', 'Azcapotzalco', 748]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
