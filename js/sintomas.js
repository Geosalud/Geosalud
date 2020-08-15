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
['Puebla.', 'Puebla', 15184],
['CDMX', 'Iztapalapa', 13163],
['Tabasco', 'Centro', 11795],
['Guanajuato', 'León', 10830],
['CDMX', 'Gustavo A. Madero', 10284],
['Sonora', 'Hermosillo', 8554],
['Baja California', 'Mexicali', 7820],
['Edo. Mex', 'Ecatepec', 7320],
['Nuevo León', 'Monterrey', 7219],
['CDMX', 'Tlalpan', 6957],
['Yucatán', 'Mérida', 6886],
['CDMX', 'Álvaro Obregón', 6477],
['Guerrero', 'Acapulco', 6363],
['Veracruz.', 'Veracruz', 5875],
['CDMX', 'Coyoacán', 5806],
['San Luis Potosí.', 'San Luis Potosí', 5588],
['Edo. Mex', 'Nezahualcoyotl', 5441],
['CDMX', 'Xochimilco', 5397],
['Jalisco', 'Guadalajara', 5250],
['Sinaloa', 'Culiacán', 5218],
['Edo. Mex', 'Toluca', 4881],
['CDMX', 'Azcapotzalco', 4813]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
