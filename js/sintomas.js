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
['CDMX', 'Iztapalapa', 8899],
['Puebla.', 'Puebla', 8012],
['CDMX', 'Gustavo A. Madero', 6673],
['Tabasco', 'Centro', 5795],
['Baja California', 'Mexicali', 5470],
['Edo. Mex', 'Ecatepec', 4555],
['Guanajuato', 'León', 4526],
['CDMX', 'Tlalpan', 4123],
['Edo. Mex', 'Nezahualcoyotl', 3820],
['CDMX', 'Álvaro Obregón', 3711],
['Guerrero', 'Acapulco', 3560],
['Veracruz.', 'Veracruz', 3515],
['CDMX', 'Xochimilco', 3428],
['CDMX', 'Coyoacán', 3404],
['Sinaloa', 'Culiacán', 3121],
['CDMX', 'Cuauhtemoc', 3113],
['CDMX', 'Azcapotzalco', 3091],
['Yucatán', 'Mérida', 2998],
['Baja California', 'Tijuana', 2986],
['Sonora', 'Hermosillo', 2903],
['Edo. Mex', 'Toluca', 2859],
['CDMX', 'Iztacalco', 2724]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
