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
['Puebla.', 'Puebla', 16047],
['CDMX', 'Iztapalapa', 13862],
['Tabasco', 'Centro', 12427],
['Guanajuato', 'León', 11540],
['CDMX', 'Gustavo A. Madero', 11003],
['Sonora', 'Hermosillo', 8936],
['Baja California', 'Mexicali', 8078],
['Nuevo León', 'Monterrey', 7959],
['Edo. Mex', 'Ecatepec', 7679],
['CDMX', 'Tlalpan', 7545],
['Yucatán', 'Mérida', 7476],
['CDMX', 'Álvaro Obregón', 7058],
['San Luis Potosí.', 'San Luis Potosí', 6562],
['Guerrero', 'Acapulco', 6556],
['CDMX', 'Coyoacán', 6172],
['Veracruz.', 'Veracruz', 6127],
['Jalisco', 'Guadalajara', 5761],
['Edo. Mex', 'Nezahualcoyotl', 5727],
['CDMX', 'Xochimilco', 5703],
['Sinaloa', 'Culiacán', 5610],
['Edo. Mex', 'Toluca', 5160],
['CDMX', 'Azcapotzalco', 5111]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
