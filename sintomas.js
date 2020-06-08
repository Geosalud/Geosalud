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

['CDMX', 'Iztapalapa', 5746],
['CDMX', 'Gustavo A. Madero', 3988],
['Baja California', 'Mexicali', 3176],
['Tabasco', 'Centro', 2807],
['Puebla.', 'Puebla', 2615],
['Edo. Mex', 'Nezahualcoyotl', 2377],
['Baja California', 'Tijuana', 2306],
['CDMX', 'Tlalpan', 2212],
['Edo. Mex', 'Ecatepec', 2158],
['CDMX', 'Álvaro Obregón', 2010],
['CDMX', 'Xochimilco', 1967],
['Veracruz.', 'Veracruz', 1937],
['CDMX', 'Coyoacán', 1918],
['Sinaloa', 'Culiacán', 1916],
['CDMX', 'Cuauhtemoc', 1789],
['CDMX', 'Iztacalco', 1735],
['CDMX', 'Azcapotzalco', 1670],
['CDMX', 'Venustiano Carranza', 1628],
['Guerrero', 'Acapulco', 1613],
['CDMX', 'Tlahuac', 1520],
['Quintana Roo', 'Benito Juárez', 1520],
['Chihuahua', 'Ciudad Juárez', 1267]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
