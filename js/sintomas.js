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
['Puebla.', 'Puebla', 17460],
['CDMX', 'Iztapalapa', 15186],
['Tabasco', 'Centro', 13515],
['Guanajuato', 'León', 12484],
['CDMX', 'Gustavo A. Madero', 12284],
['Sonora', 'Hermosillo', 9435],
['Nuevo León', 'Monterrey', 9379],
['San Luis Potosí.', 'San Luis Potosí', 8595],
['Yucatán', 'Mérida', 8577],
['CDMX', 'Tlalpan', 8567],
['Baja California', 'Mexicali', 8492],
['Edo. Mex', 'Ecatepec', 8427],
['CDMX', 'Álvaro Obregón', 8044],
['CDMX', 'Coyoacán', 7071],
['Guerrero', 'Acapulco', 6952],
['Jalisco', 'Guadalajara', 6908],
['Veracruz.', 'Veracruz', 6597],
['CDMX', 'Xochimilco', 6235],
['Edo. Mex', 'Nezahualcoyotl', 6186],
['Sinaloa', 'Culiacán', 6160],
['CDMX', 'Azcapotzalco', 5801],
['Edo. Mex', 'Toluca', 5642]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
