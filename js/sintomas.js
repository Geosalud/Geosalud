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

['CDMX', 'Iztapalapa', 6627],
['CDMX', 'Gustavo A. Madero', 4865],
['Baja California', 'Mexicali', 3701],
['Puebla.', 'Puebla', 3536],
['Tabasco', 'Centro', 3329],
['Edo. Mex', 'Nezahualcoyotl', 2770],
['Edo. Mex', 'Ecatepec', 2748],
['CDMX', 'Tlalpan', 2646],
['CDMX', 'Álvaro Obregón', 2495],
['Baja California', 'Tijuana', 2456],
['CDMX', 'Xochimilco', 2414],
['Veracruz.', 'Veracruz', 2374],
['CDMX', 'Coyoacán', 2330],
['Sinaloa', 'Culiacán', 2195],
['CDMX', 'Cuauhtemoc', 2189],
['Guerrero', 'Acapulco', 2123],
['CDMX', 'Azcapotzalco', 2047],
['CDMX', 'Iztacalco', 2035],
['CDMX', 'Venustiano Carranza', 1893],
['CDMX', 'Tlahuac', 1768],
['Guanajuato', 'León', 1691],
['Quintana Roo', 'Benito Juárez', 1677]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
