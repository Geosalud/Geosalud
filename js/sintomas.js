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

['CDMX', 'Iztapalapa', 6849],
['CDMX', 'Gustavo A. Madero', 5008],
['Baja California', 'Mexicali', 3864],
['Puebla.', 'Puebla', 3748],
['Tabasco', 'Centro', 3487],
['Edo. Mex', 'Nezahualcoyotl', 2880],
['Edo. Mex', 'Ecatepec', 2850],
['CDMX', 'Tlalpan', 2759],
['CDMX', 'Álvaro Obregón', 2554],
['CDMX', 'Xochimilco', 2529],
['Veracruz.', 'Veracruz', 2494],
['Baja California', 'Tijuana', 2479],
['CDMX', 'Coyoacán', 2398],
['Guerrero', 'Acapulco', 2312],
['Sinaloa', 'Culiacán', 2282],
['CDMX', 'Cuauhtemoc', 2245],
['CDMX', 'Azcapotzalco', 2103],
['CDMX', 'Iztacalco', 2073],
['CDMX', 'Venustiano Carranza', 1989],
['Guanajuato', 'León', 1862],
['CDMX', 'Tlahuac', 1846],
['Quintana Roo', 'Benito Juárez', 1712]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
