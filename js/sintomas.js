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

['CDMX', 'Iztapalapa', 5920],
['CDMX', 'Gustavo A. Madero', 4184],
['Baja California', 'Mexicali', 3275],
['Tabasco', 'Centro', 2932],
['Puebla.', 'Puebla', 2785],
['Edo. Mex', 'Nezahualcoyotl', 2475],
['Baja California', 'Tijuana', 2371],
['CDMX', 'Tlalpan', 2308],
['Edo. Mex', 'Ecatepec', 2268],
['CDMX', 'Álvaro Obregón', 2122],
['CDMX', 'Xochimilco', 2064],
['Veracruz.', 'Veracruz', 2046],
['CDMX', 'Coyoacán', 2039],
['Sinaloa', 'Culiacán', 1986],
['CDMX', 'Cuauhtemoc', 1886],
['CDMX', 'Iztacalco', 1841],
['CDMX', 'Azcapotzalco', 1739],
['CDMX', 'Venustiano Carranza', 1685],
['Guerrero', 'Acapulco', 1682],
['CDMX', 'Tlahuac', 1559],
['Quintana Roo', 'Benito Juárez', 1551],
['Michoacán', 'Lazaro Cardenas', 1370]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
