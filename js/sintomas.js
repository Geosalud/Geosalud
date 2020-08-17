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
['Puebla.', 'Puebla', 15506],
['CDMX', 'Iztapalapa', 13355],
['Tabasco', 'Centro', 11966],
['Guanajuato', 'León', 11045],
['CDMX', 'Gustavo A. Madero', 10458],
['Sonora', 'Hermosillo', 8640],
['Baja California', 'Mexicali', 7889],
['Edo. Mex', 'Ecatepec', 7449],
['Nuevo León', 'Monterrey', 7390],
['CDMX', 'Tlalpan', 7177],
['Yucatán', 'Mérida', 7017],
['CDMX', 'Álvaro Obregón', 6682],
['Guerrero', 'Acapulco', 6417],
['Veracruz.', 'Veracruz', 5965],
['CDMX', 'Coyoacán', 5888],
['San Luis Potosí.', 'San Luis Potosí', 5847],
['Edo. Mex', 'Xochimilco', 5530],
['CDMX', 'Nezahualcoyotl', 5527],
['Jalisco', 'Guadalajara', 5339],
['Sinaloa', 'Culiacán', 5307],
['Edo. Mex', 'Toluca', 4985],
['CDMX', 'Azcapotzalco', 4896]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
