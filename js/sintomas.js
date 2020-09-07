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
['Puebla.', 'Puebla', 17841],
['CDMX', 'Iztapalapa', 15605],
['Tabasco', 'Centro', 13738],
['CDMX', 'Gustavo A. Madero', 12786],
['Guanajuato', 'León', 12723],
['Nuevo León', 'Monterrey', 9733],
['Sonora', 'Hermosillo', 9667],
['San Luis Potosí.', 'San Luis Potosí', 9028],
['CDMX', 'Tlalpan', 8873],
['Yucatán', 'Mérida', 8792],
['Baja California', 'Mexicali', 8620],
['Edo. Mex', 'Ecatepec', 8583],
['CDMX', 'Álvaro Obregón', 8400],
['CDMX', 'Coyoacán', 7288],
['Jalisco', 'Guadalajara', 7152],
['Guerrero', 'Acapulco', 7076],
['Veracruz.', 'Veracruz', 6732],
['CDMX', 'Xochimilco', 6413],
['Edo. Mex', 'Nezahualcoyotl', 6338],
['Sinaloa', 'Culiacán', 6227],
['CDMX', 'Azcapotzalco', 5973],
['Edo. Mex', 'Toluca', 5746]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
