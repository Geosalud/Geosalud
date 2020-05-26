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

['CDMX', 'Iztapalapa', 4028],
['CDMX', 'Gustavo A. Madero', 2522],
['Baja California', 'Mexicali', 1931],
['Baja California', 'Tijuana', 1874],
['Tabasco', 'Centro', 1856],
['Edo. Mex', 'Nezahualcoyotl', 1597],
['Sinaloa', 'Culiacán', 1460],
['CDMX', 'Tlalpan', 1457],
['Edo. Mex', 'Ecatepec', 1400],
['CDMX', 'Álvaro Obregón', 1275],
['Puebla.', 'Puebla', 1274],
['CDMX', 'Coyoacán', 1238],
['CDMX', 'Iztacalco', 1221],
['Quintana Roo', 'Benito Juárez', 1205],
['CDMX', 'Cuauhtemoc', 1182],
['CDMX', 'Xochimilco', 1176],
['Veracruz.', 'Veracruz', 1125],
['CDMX', 'Venustiano Carranza', 1095],
['CDMX', 'Tlahuac', 1065],
['CDMX', 'Azcapotzalco', 1010],
['Edo. Mex', 'Naucalpan', 888]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
