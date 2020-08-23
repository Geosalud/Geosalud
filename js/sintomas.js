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
['Puebla.', 'Puebla', 16151],
['CDMX', 'Iztapalapa', 14002],
['Tabasco', 'Centro', 12519],
['Guanajuato', 'León', 11631],
['CDMX', 'Gustavo A. Madero', 11108],
['Sonora', 'Hermosillo', 8992],
['Baja California', 'Mexicali', 8120],
['Nuevo León', 'Monterrey', 8089],
['Edo. Mex', 'Ecatepec', 7729],
['CDMX', 'Tlalpan', 7621],
['Yucatán', 'Mérida', 7558],
['CDMX', 'Álvaro Obregón', 7175],
['San Luis Potosí.', 'San Luis Potosí', 6763],
['Guerrero', 'Acapulco', 6603],
['CDMX', 'Coyoacán', 6301],
['Veracruz.', 'Veracruz', 6186],
['Jalisco', 'Guadalajara', 5877],
['CDMX', 'Xochimilco', 5769],
['Edo. Mex', 'Nezahualcoyotl', 5768],
['Sinaloa', 'Culiacán', 5661],
['Edo. Mex', 'Toluca', 5204],
['CDMX', 'Azcapotzalco', 5203]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
