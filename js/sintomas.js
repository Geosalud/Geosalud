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
['CDMX', 'Iztapalapa', 8157],
['Puebla.', 'Puebla', 6466],
['CDMX', 'Gustavo A. Madero', 6038],
['Baja California', 'Mexicali', 4812],
['Tabasco', 'Centro', 4783],
['Edo. Mex', 'Ecatepec', 3953],
['CDMX', 'Tlalpan', 3591],
['Edo. Mex', 'Nezahualcoyotl', 3452],
['Guanajuato', 'León', 3325],
['CDMX', 'Álvaro Obregón', 3251],
['Veracruz.', 'Veracruz', 3123],
['CDMX', 'Xochimilco', 3066],
['Guerrero', 'Acapulco', 3004],
['CDMX', 'Coyoacán', 3003],
['CDMX', 'Cuauhtemoc', 2812],
['Sinaloa', 'Culiacán', 2764],
['Baja California', 'Tijuana', 2760],
['CDMX', 'Azcapotzalco', 2698],
['CDMX', 'Iztacalco', 2511],
['CDMX', 'Venustiano Carranza', 2394],
['Edo. Mex', 'Toluca', 2391],
['Yucatán', 'Mérida', 2336]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
