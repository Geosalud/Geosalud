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
['CDMX', 'Iztapalapa', 8236],
['Puebla.', 'Puebla', 6888],
['CDMX', 'Gustavo A. Madero', 6120],
['Tabasaco', 'Centro', 4963],
['Baja California', 'Mexicali', 4955],
['Edo. Mex', 'Ecatepec', 4024],
['CDMX', 'Tlalpan', 3704],
['Guanajuato', 'León', 3560],
['Edo. Mex', 'Nezahualcoyotl', 3513],
['CDMX', 'Álvaro Obregón', 3350],
['Veracruz.', 'Veracruz', 3197],
['CDMX', 'Xochimilco', 3164],
['Guerrero', 'Acapulco', 3090],
['CDMX', 'Coyoacán', 3041],
['Sinaloa', 'Culiacán', 2877],
['CDMX', 'Cuauhtemoc', 2855],
['Baja California', 'Tijuana', 2796],
['CDMX', 'Azcapotzalco', 2759],
['CDMX', 'Iztacalco', 2534],
['Yucatán', 'Mérida', 2497],
['Edo. Mex', 'Toluca', 2471],
['CDMX', 'Venustiano Carranza', 2434]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
