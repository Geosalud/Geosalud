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

['CDMX', 'Iztapalapa', 5548],
['CDMX', 'Gustavo A. Madero', 3739],
['Baja California', 'Mexicali', 2930],
['Tabasco', 'Centro', 2652],
['Puebla.', 'Puebla', 2329],
['Edo. Mex', 'Nezahualcoyotl', 2274],
['Baja California', 'Tijuana', 2263],
['CDMX', 'Tlalpan', 2135],
['Edo. Mex', 'Ecatepec', 2055],
['CDMX', 'Álvaro Obregón', 1932],
['Sinaloa', 'Culiacán', 1871],
['Veracruz.', 'Veracruz', 1867],
['CDMX', 'Xochimilco', 1863],
['CDMX', 'Coyoacán', 1862],
['CDMX', 'Cuauhtemoc', 1703],
['CDMX', 'Iztacalco', 1694],
['CDMX', 'Azcapotzalco', 1593],
['CDMX', 'Venustiano Carranza', 1557],
['Quintana Roo', 'Benito Juárez', 1488],
['CDMX', 'Tlahuac', 1465],
['Guerrero', 'Acapulco', 1441],
['Edo. Mex', 'Naucalpan', 1232]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
