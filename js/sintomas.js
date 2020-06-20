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

['CDMX', 'Iztapalapa', 7278],
['CDMX', 'Gustavo A. Madero', 5371],
['Puebla.', 'Puebla', 4549],
['Baja California', 'Mexicali', 4137],
['Tabasco', 'Centro', 3829],
['Edo. Mex', 'Ecatepec de Morelos', 3162],
['Edo. Mex', 'Nezahualcoyotl', 3031],
['CDMX', 'Tlalpan', 2960],
['CDMX', 'Álvaro Obregón', 2805],
['CDMX', 'Xochimilco', 2717],
['Veracruz.', 'Veracruz', 2622],
['CDMX', 'Coyoacán', 2614],
['Baja California', 'Tijuana', 2545],
['Guerrero', 'Acapulco', 2495],
['CDMX', 'Cuauhtemoc', 2413],
['Sinaloa', 'Culiacán', 2366],
['CDMX', 'Azcapotzalco', 2288],
['CDMX', 'Iztacalco', 2231],
['Guanajuato', 'León', 2171],
['CDMX', 'Venustiano Carranza', 2131],
['CDMX', 'Tlahuac', 1993],
['Quintana Roo', 'Benito Juárez', 1806]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
