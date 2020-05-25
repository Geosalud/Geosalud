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

['CDMX', 'Iztapalapa', 3915],
['CDMX', 'Gustavo A. Madero', 2481],
['Baja California', 'Mexicali', 1918],
['Baja California', 'Tijuana', 1873],
['Tabasco', 'Centro', 1811],
['Edo. Mex', 'Nezahualcoyotl', 1539],
['CDMX', 'Tlalpan', 1420],
['Sinaloa', 'Culiacán', 1388],
['Edo. Mex', 'Ecatepec', 1361],
['CDMX', 'Álvaro Obregón', 1244],
['Puebla.', 'Puebla', 1227],
['CDMX', 'Coyoacán', 1216],
['CDMX', 'Iztacalco', 1199],
['Quintana Roo', 'Benito Juárez', 1186],
['CDMX', 'Cuauhtemoc', 1160],
['CDMX', 'Xochimilco', 1134],
['CDMX', 'Venustiano Carranza', 1063],
['Veracruz.', 'Veracruz', 1062],
['CDMX', 'Tlahuac', 1002],
['CDMX', 'Azcapotzalco', 987],
['Edo. Mex', 'Naucalpan', 852]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
