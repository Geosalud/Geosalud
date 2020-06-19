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

['CDMX', 'Iztapalapa', 7136],
['CDMX', 'Gustavo A. Madero', 5234],
['Puebla.', 'Puebla', 4227],
['Baja California', 'Mexicali', 4031],
['Tabasco', 'Centro', 3730],
['Edo. Mex', 'Ecatepec', 3043],
['Edo. Mex', 'Nezahualcoyotl', 2980],
['CDMX', 'Tlalpan', 2869],
['CDMX', 'Álvaro Obregón', 2721],
['CDMX', 'Xochimilco', 2633],
['Veracruz.', 'Veracruz', 2582],
['CDMX', 'Coyoacán', 2542],
['Baja California', 'Tijuana', 2529],
['Guerrero', 'Acapulco', 2443],
['CDMX', 'Cuauhtemoc', 2363],
['Sinaloa', 'Culiacán', 2337],
['CDMX', 'Azcapotzalco', 2207],
['CDMX', 'Iztacalco', 2197],
['CDMX', 'Venustiano Carranza', 2090],
['Guanajuato', 'León', 2085],
['CDMX', 'Tlahuac', 1946],
['Quintana Roo', 'Benito Juárez', 1785]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
