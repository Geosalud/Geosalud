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
['CDMX', 'Iztapalapa', 8788],
['Puebla.', 'Puebla', 7769],
['CDMX', 'Gustavo A. Madero', 6567],
['Tabasco', 'Centro', 5439],
['Baja California', 'Mexicali', 5404],
['Edo. Mex', 'Ecatepec', 4423],
['Guanajuato', 'León', 4222],
['CDMX', 'Tlalpan', 4043],
['Edo. Mex', 'Nezahualcoyotl', 3747],
['CDMX', 'Álvaro Obregón', 3640],
['Veracruz.', 'Veracruz', 3423],
['Guerrero', 'Acapulco', 3386],
['CDMX', 'Xochimilco', 3345],
['CDMX', 'Coyoacán', 3319],
['Sinaloa', 'Culiacán', 3058],
['CDMX', 'Cuauhtemoc', 3048],
['CDMX', 'Azcapotzalco', 3014],
['Baja California', 'Tijuana', 2977],
['Yucatán', 'Mérida', 2851],
['Sonora', 'Hermosillo', 2804],
['Edo. Mex', 'Toluca', 2783],
['CDMX', 'Iztacalco', 2683]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
