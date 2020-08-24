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
['Puebla.', 'Puebla', 16246],
['CDMX', 'Iztapalapa', 14099],
['Tabasco', 'Centro', 12573],
['Guanajuato', 'León', 11650],
['CDMX', 'Gustavo A. Madero', 11209],
['Sonora', 'Hermosillo', 8992],
['Nuevo León', 'Monterrey', 8181],
['Baja California', 'Mexicali', 8168],
['Edo. Mex', 'Ecatepec', 7798],
['CDMX', 'Tlalpan', 7688],
['Yucatán', 'Mérida', 7589],
['CDMX', 'Álvaro Obregón', 7209],
['San Luis Potosí.', 'San Luis Potosí', 6929],
['Guerrero', 'Acapulco', 6617],
['CDMX', 'Coyoacán', 6311],
['Veracruz.', 'Veracruz', 6207],
['Jalisco', 'Guadalajara', 5962],
['CDMX', 'Xochimilco', 5833],
['Edo. Mex', 'Nezahualcoyotl', 5795],
['Sinaloa', 'Culiacán', 5671],
['Edo. Mex', 'Toluca', 5242],
['CDMX', 'Azcapotzalco', 5214]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
