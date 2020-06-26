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
['CDMX', 'Iztapalapa', 7887],
['Puebla.', 'Puebla', 5896],
['CDMX', 'Gustavo A. Madero', 5785],
['Baja California', 'Mexicali', 4550],
['Tabasco', 'Centro', 4528],
['Edo. Mex', 'Ecatepec', 3795],
['CDMX', 'Tlalpan', 3351],
['Edo. Mex', 'Nezahualcoyotl', 3335],
['CDMX', 'Álvaro Obregón', 3109],
['CDMX', 'Xochimilco', 2988],
['Veracruz.', 'Veracruz', 2974],
['Guanajuato', 'León', 2946],
['CDMX', 'Coyoacán', 2881],
['Guerrero', 'Acapulco', 2870],
['CDMX', 'Cuauhtemoc', 2707],
['Baja California', 'Tijuana', 2687],
['Sinaloa', 'Culiacán', 2684],
['CDMX', 'Azcapotzalco', 2537],
['CDMX', 'Iztacalco', 2416],
['CDMX', 'Venustiano Carranza', 2308],
['Edo. Mex', 'Toluca', 2251],
['CDMX', 'Tlahuac', 2236]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
