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
['CDMX', 'Iztapalapa', 8840],
['Puebla.', 'Puebla', 7875],
['CDMX', 'Gustavo A. Madero', 6642],
['Tabasco', 'Centro', 5620],
['Baja California', 'Mexicali', 5444],
['Edo. Mex', 'Ecatepec', 4482],
['Guanajuato', 'León', 4394],
['CDMX', 'Tlalpan', 4078],
['Edo. Mex', 'Nezahualcoyotl', 3775],
['CDMX', 'Álvaro Obregón', 3670],
['Guerrero', 'Acapulco', 3503],
['Veracruz.', 'Veracruz', 3442],
['CDMX', 'Xochimilco', 3402],
['CDMX', 'Coyoacán', 3357],
['CDMX', 'Cuauhtemoc', 3081],
['CDMX', 'Azcapotzalco', 3074],
['Sinaloa', 'Culiacán', 3058],
['Baja California', 'Tijuana', 2986],
['Yucatán', 'Mérida', 2926],
['Sonora', 'Hermosillo', 2859],
['Edo. Mex', 'Toluca', 2818],
['CDMX', 'Iztacalco', 2704]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
