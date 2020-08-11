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
['Puebla.', 'Puebla', 14416],
['CDMX', 'Iztapalapa', 12689],
['Tabasco', 'Centro', 11356],
['Guanajuato', 'León', 10379],
['CDMX', 'Gustavo A. Madero', 9858],
['Sonora', 'Hermosillo', 8249],
['Baja California', 'Mexicali', 7668],
['Edo. Mex', 'Ecatepec', 6936],
['Nuevo León', 'Monterrey', 6800],
['CDMX', 'Tlalpan', 6629],
['Yucatán', 'Mérida', 6523],
['Guerrero', 'Acapulco', 6223],
['CDMX', 'Álvaro Obregón', 6221],
['Veracruz.', 'Veracruz', 5648],
['CDMX', 'Coyoacán', 5481],
['Edo. Mex', 'Nezahualcoyotl', 5270],
['CDMX', 'Xochimilco', 5192],
['Jalisco', 'Guadalajara', 5075],
['Sinaloa', 'Culiacán', 4971],
['San Luis Potosí.', 'San Luis Potosí', 4963],
['CDMX', 'Azcapotzalco', 4660],
['Edo. Mex', 'Toluca', 4644]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
