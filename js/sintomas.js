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
['CDMX', 'Iztapalapa', 9737],
['Puebla.', 'Puebla', 9341],
['CDMX', 'Gustavo A. Madero', 7294],
['Tabasco', 'Centro', 6915],
['Baja California', 'Mexicali', 6054],
['Guanajuato', 'León', 5817],
['Edo. Mex', 'Ecatepec', 5083],
['CDMX', 'Tlalpan', 4540],
['Guerrero', 'Acapulco', 4331],
['Edo. Mex', 'Nezahualcoyotl', 4179],
['CDMX', 'Álvaro Obregón', 4153],
['Sonora', 'Hermosillo', 4099],
['Veracruz.', 'Veracruz', 3848],
['CDMX', 'Xochimilco', 3776],
['CDMX', 'Coyoacán', 3734],
['Yucatán', 'Mérida', 3618],
['Sinaloa', 'Culiacán', 3510],
['CDMX', 'Azcapotzalco', 3442],
['CDMX', 'Cuauhtemoc', 3380],
['Edo. Mex', 'Toluca', 3266],
['Baja California', 'Tijuana', 3176],
['Jalisco', 'Guadalajara', 3138]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
