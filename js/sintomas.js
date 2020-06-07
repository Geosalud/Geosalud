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

['CDMX', 'Iztapalapa', 5680],
['CDMX', 'Gustavo A. Madero', 3854],
['Baja California', 'Mexicali', 3099],
['Tabasco', 'Centro', 2736],
['Puebla.', 'Puebla', 2473],
['Edo. Mex', 'Nezahualcoyotl', 2355],
['Baja California', 'Tijuana', 2277],
['CDMX', 'Tlalpan', 2166],
['Edo. Mex', 'Ecatepec', 2103],
['CDMX', 'Álvaro Obregón', 1971],
['Veracruz.', 'Veracruz', 1897],
['CDMX', 'Coyoacán', 1895],
['CDMX', 'Xochimilco', 1894],
['Sinaloa', 'Culiacán', 1894],
['CDMX', 'Cuauhtemoc', 1746],
['CDMX', 'Iztacalco', 1719],
['CDMX', 'Azcapotzalco', 1633],
['CDMX', 'Venustiano Carranza', 1605],
['CDMX', 'Tlahuac', 1514],
['Quintana Roo', 'Benito Juarez', 1510],
['Guerrero', 'Acapulco', 1507],
['Chihuahua', 'Ciudad Juárez', 1228]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
