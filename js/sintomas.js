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

['CDMX', 'Iztapalapa', 6957],
['CDMX', 'Gustavo A. Madero', 5091],
['Puebla.', 'Puebla', 4035],
['Baja California', 'Mexicali', 3928],
['Tabasco', 'Centro', 3585],
['Edo. Mex', 'Ecatepec', 2917],
['Edo. Mex', 'Nezahualcoyotl', 2906],
['CDMX', 'Tlalpan', 2812],
['CDMX', 'Álvaro Obregón', 2619],
['CDMX', 'Xochimilco', 2582],
['Veracruz.', 'Veracruz', 2532],
['Baja California', 'Tijuana', 2489],
['CDMX', 'Coyoacán', 2438],
['Guerrero', 'Acapulco', 2386],
['Sinaloa', 'Culiacán', 2298],
['CDMX', 'Cuauhtemoc', 2281],
['CDMX', 'Azcapotzalco', 2136],
['CDMX', 'Iztacalco', 2112],
['CDMX', 'Venustiano Carranza', 2016],
['Guanajuato', 'León', 1990],
['CDMX', 'Tlahuac', 1900],
['Quintana Roo', 'Benito Juárez', 1748]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
