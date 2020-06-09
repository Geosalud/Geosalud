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

['CDMX', 'Iztapalapa', 5819],
['CDMX', 'Gustavo A. Madero', 4070],
['Baja California', 'Mexicali', 3200],
['Tabasco', 'Centro', 2901],
['Puebla.', 'Puebla', 2696],
['Edo. Mex', 'Nezahualcoyotl', 2408],
['Baja California', 'Tijuana', 2314],
['CDMX', 'Tlalpan', 2251],
['Edo. Mex', 'Ecatepec', 2201],
['CDMX', 'Álvaro Obregón', 2063],
['CDMX', 'Xochimilco', 2010],
['Veracruz.', 'Coyoacán', 1995],
['CDMX', 'Veracruz', 1977],
['Sinaloa', 'Culiacán', 1961],
['CDMX', 'Cuauhtemoc', 1829],
['CDMX', 'Iztacalco', 1798],
['CDMX', 'Azcapotzalco', 1699],
['CDMX', 'Venustiano Carranza', 1654],
['Guerrero', 'Acapulco', 1615],
['CDMX', 'Tlahuac', 1546],
['Quintana Roo', 'Benito Juárez', 1530],
['Guanajuato', 'León', 1273]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
