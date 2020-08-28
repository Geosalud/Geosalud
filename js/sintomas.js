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
['Puebla.', 'Puebla', 16701],
['CDMX', 'Iztapalapa', 14453],
['Tabasco', 'Centro', 12885],
['Guanajuato', 'León', 12009],
['CDMX', 'Gustavo A. Madero', 11541],
['Sonora', 'Hermosillo', 9188],
['Nuevo León', 'Monterrey', 8548],
['Baja California', 'Mexicali', 8245],
['Edo. Mex', 'Ecatepec', 8023],
['CDMX', 'Tlalpan', 7959],
['Yucatán', 'Mérida', 7922],
['San Luis Potosí.', 'San Luis Potosí', 7580],
['CDMX', 'Álvaro Obregón', 7415],
['Guerrero', 'Acapulco', 6695],
['CDMX', 'Coyoacán', 6586],
['Veracruz.', 'Veracruz', 6306],
['Jalisco', 'Guadalajara', 6283],
['Edo. Mex', 'Nezahualcoyotl', 5955],
['CDMX', 'Xochimilco', 5951],
['Sinaloa', 'Culiacán', 5848],
['CDMX', 'Azcapotzalco', 5433],
['Edo. Mex', 'Toluca', 5408]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
