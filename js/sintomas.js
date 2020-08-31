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
['Puebla.', 'Puebla', 16993],
['CDMX', 'Iztapalapa', 14786],
['Tabasco', 'Centro', 13148],
['Guanajuato', 'León', 12239],
['CDMX', 'Gustavo A. Madero', 11843],
['Sonora', 'Hermosillo', 9275],
['Nuevo León', 'Monterrey', 8883],
['Baja California', 'Mexicali', 8373],
['Yucatán', 'Mérida', 8200],
['CDMX', 'Tlalpan', 8183],
['Edo. Mex', 'Ecatepec', 8138],
['San Luis Potosí.', 'San Luis Potosí', 8123],
['CDMX', 'Álvaro Obregón', 7656],
['CDMX', 'Coyoacán', 6819],
['Guerrero', 'Acapulco', 6773],
['Jalisco', 'Guadalajara', 6558],
['Veracruz.', 'Veracruz', 6405],
['CDMX', 'Xochimilco', 6097],
['Edo. Mex', 'Nezahualcoyotl', 6043],
['Sinaloa', 'Culiacán', 5929],
['CDMX', 'Azcapotzalco', 5590],
['Edo. Mex', 'Toluca', 5495]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
