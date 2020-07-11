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
['CDMX', 'Iztapalapa', 9532],
['Puebla.', 'Puebla', 8977],
['CDMX', 'Gustavo A. Madero', 7124],
['Tabasco', 'Centro', 6332],
['Baja California', 'Mexicali', 5895],
['Guanajuato', 'León', 5218],
['Edo. Mex', 'Ecatepec', 4904],
['CDMX', 'Tlalpan', 4432],
['Guerrero', 'Acapulco', 4194],
['Edo. Mex', 'Nezahualcoyotl', 4080],
['CDMX', 'Álvaro Obregón', 4045],
['Veracruz.', 'Veracruz', 3716],
['Sonora', 'Hermosillo', 3695],
['CDMX', 'Xochimilco', 3654],
['CDMX', 'Coyoacán', 3627],
['Yucatán', 'Mérida', 3377],
['Sinaloa', 'Culiacán', 3345],
['CDMX', 'Azcapotzalco', 3332],
['CDMX', 'Cuauhtemoc', 3301],
['Edo. Mex', 'Toluca', 3155],
['Baja California', 'Tijuana', 3137],
['Jalisco', 'Guadalajara', 2978]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
