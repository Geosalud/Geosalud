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

['CDMX', 'Iztapalapa', 6503],
['CDMX', 'Gustavo A. Madero', 4735],
['Baja California', 'Mexicali', 3673],
['Puebla.', 'Puebla', 3399],
['Tabasco', 'Centro', 3221],
['Edo. Mex', 'Nezahualcoyotl', 2729],
['Edo. Mex', 'Ecatepec', 2655],
['CDMX', 'Tlalpan', 2592],
['Baja California', 'Tijuana', 2452],
['CDMX', 'Álvaro Obregón', 2411],
['CDMX', 'Xochimilco', 2365],
['Veracruz.', 'Veracruz', 2289],
['CDMX', 'Coyoacán', 2264],
['Sinaloa', 'Culiacán', 2148],
['CDMX', 'Cuauhtemoc', 2117],
['Guerrero', 'Acapulco', 2077],
['CDMX', 'Iztacalco', 1995],
['CDMX', 'Azcapotzalco', 1988],
['CDMX', 'Venustiano Carranza', 1853],
['CDMX', 'Tlahuac', 1713],
['Guanajuato', 'León', 1652],
['Quintana Roo', 'Benito Juárez', 1645]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
