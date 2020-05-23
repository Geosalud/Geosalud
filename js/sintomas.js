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

['CDMX', 'Iztapalapa', 3561],
['CDMX', 'Gustavo A. Madero', 2219],
['Baja California', 'Tijuana', 1783],
['Baja California', 'Mexicali', 1759],
['Tabasco', 'Centro', 1721],
['Edo. Mex', 'Nezahualcoyotl', 1386],
['CDMX', 'Tlalpan', 1328],
['Edo. Mex', 'Ecatepec', 1275],
['Sinaloa', 'Culiacán', 1267],
['Quintana Roo', 'Benito Juárez', 1139],
['CDMX', 'Álvaro Obregón', 1134],
['Puebla.', 'Puebla', 1071],
['CDMX', 'Coyoacán', 1060],
['CDMX', 'Iztacalco', 1043],
['CDMX', 'Cuauhtemoc', 1030],
['CDMX', 'Xochimilco', 1018],
['Veracruz.', 'Veracruz', 989],
['CDMX', 'Venustiano Carranza', 931],
['CDMX', 'Tlahuac', 879],
['CDMX', 'Azcapotzalco', 865],
['Edo. Mex', 'Naucalpan', 818]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
