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
['Puebla.', 'Puebla', 16310],
['CDMX', 'Iztapalapa', 14133],
['Tabasco', 'Centro', 12671],
['Guanajuato', 'León', 11718],
['CDMX', 'Gustavo A. Madero', 11228],
['Sonora', 'Hermosillo', 9003],
['Nuevo León', 'Monterrey', 8259],
['Baja California', 'Mexicali', 8169],
['Edo. Mex', 'Ecatepec', 7848],
['CDMX', 'Tlalpan', 7705],
['Yucatán', 'Mérida', 7665],
['CDMX', 'Álvaro Obregón', 7246],
['San Luis Potosí.', 'San Luis Potosí', 7061],
['Guerrero', 'Acapulco', 6648],
['CDMX', 'Coyoacán', 6329],
['Veracruz.', 'Veracruz', 6256],
['Jalisco', 'Guadalajara', 6025],
['CDMX', 'Xochimilco', 5842],
['Edo. Mex', 'Nezahualcoyotl', 5809],
['Sinaloa', 'Culiacán', 5677],
['Edo. Mex', 'Toluca', 5253],
['CDMX', 'Azcapotzalco', 5238]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
