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
['Puebla.', 'Puebla', 16485],
['CDMX', 'Iztapalapa', 14334],
['Tabasco', 'Centro', 12810],
['Guanajuato', 'León', 11918],
['CDMX', 'Gustavo A. Madero', 11406],
['Sonora', 'Hermosillo', 9146],
['Nuevo León', 'Monterrey', 8424],
['Baja California', 'Mexicali', 8218],
['Edo. Mex', 'Ecatepec', 7960],
['Yucatán', 'Mérida', 7846],
['CDMX', 'Tlalpan', 7841],
['San Luis Potosí.', 'San Luis Potosí', 7413],
['CDMX', 'Álvaro Obregón', 7359],
['Guerrero', 'Acapulco', 6678],
['CDMX', 'Coyoacán', 6517],
['Veracruz.', 'Veracruz', 6293],
['Jalisco', 'Guadalajara', 6224],
['Edo. Mex', 'Nezahualcoyotl', 5909],
['CDMX', 'Xochimilco', 5906],
['Sinaloa', 'Culiacán', 5797],
['CDMX', 'Azcapotzalco', 5397],
['Edo. Mex', 'Toluca', 5340]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
