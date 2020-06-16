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

['CDMX', 'Iztapalapa', 6750],
['CDMX', 'Gustavo A. Madero', 4926],
['Baja California', 'Mexicali', 3819],
['Puebla.', 'Puebla', 3583],
['Tabasco', 'Centro', 3408],
['Edo. Mex', 'Nezahualcoyotl', 2823],
['Edo. Mex', 'Ecatepec', 2783],
['CDMX', 'Tlalpan', 2664],
['CDMX', 'Álvaro Obregón', 2527],
['Baja California', 'Tijuana', 2475],
['CDMX', 'Xochimilco', 2468],
['Veracruz.', 'Veracruz', 2427],
['CDMX', 'Coyoacán', 2374],
['Sinaloa', 'Culiacán', 2255],
['CDMX', 'Cuauhtemoc', 2220],
['Guerrero', 'Acapulco', 2217],
['CDMX', 'Azcapotzalco', 2073],
['CDMX', 'Iztacalco', 2053],
['CDMX', 'Venustiano Carranza', 1940],
['CDMX', 'Tlahuac', 1803],
['Guanajuato', 'León', 1734],
['Quintana Roo', 'Benito Juárez', 1678]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
