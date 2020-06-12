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

['CDMX', 'Iztapalapa', 6235],
['CDMX', 'Gustavo A. Madero', 4431],
['Baja California', 'Mexicali', 3509],
['Puebla.', 'Puebla', 3125],
['Tabasco', 'Centro', 3067],
['Edo. Mex', 'Nezahualcoyotl', 2617],
['Edo. Mex', 'Ecatepec', 2464],
['CDMX', 'Tlalpan', 2451],
['Baja California', 'Tijuana', 2421],
['CDMX', 'Álvaro Obregón', 2275],
['CDMX', 'Xochimilco', 2232],
['Veracruz.', 'Veracruz', 2164],
['CDMX', 'Coyoacán', 2130],
['Sinaloa', 'Culiacán', 2085],
['CDMX', 'Cuauhtemoc', 2014],
['Guerrero', 'Acapulco', 1924],
['CDMX', 'Iztacalco', 1922],
['CDMX', 'Azcapotzalco', 1858],
['CDMX', 'Venustiano Carranza', 1757],
['CDMX', 'Tlahuac', 1641],
['Quintana Roo', 'Benito Juárez', 1601],
['Guanajuato', 'León', 1499]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
