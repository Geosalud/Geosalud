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

['CDMX', 'Iztapalapa', 7438],
['CDMX', 'Gustavo A. Madero', 5470],
['Puebla.', 'Puebla', 4732],
['Baja California', 'Mexicali', 4254],
['Tabasco', 'Centro', 3948],
['Edo. Mex', 'Ecatepec', 3259],
['Edo. Mex', 'Nezahualcoyotl', 3075],
['CDMX', 'Tlalpan', 2976],
['CDMX', 'Álvaro Obregón', 2891],
['CDMX', 'Xochimilco', 2730],
['CDMX', 'Coyoacán', 2666],
['Veracruz.', 'Veracruz', 2649],
['Baja California', 'Tijuana', 2565],
['Guerrero', 'Acapulco', 2561],
['CDMX', 'Cuauhtemoc', 2468],
['Sinaloa', 'Culiacán', 2393],
['CDMX', 'Azcapotzalco', 2320],
['Guanajuato', 'León', 2316],
['CDMX', 'Iztacalco', 2287],
['CDMX', 'Venustiano Carranza', 2170],
['CDMX', 'Tlahuac', 2039],
['Quintana Roo', 'Benito Juárez', 1833]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
