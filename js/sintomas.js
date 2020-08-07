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
['Puebla.', 'Puebla', 13762],
['CDMX', 'Iztapalapa', 12305],
['Tabasco', 'Centro', 10856],
['Guanajuato', 'León', 9928],
['CDMX', 'Gustavo A. Madero', 9439],
['Sonora', 'Hermosillo', 8009],
['Baja California', 'Mexicali', 7443],
['Edo. Mex', 'Ecatepec', 6715],
['Nuevo León', 'Monterrey', 6375],
['CDMX', 'Tlalpan', 6275],
['Yucatán', 'Mérida', 6180],
['Guerrero', 'Acapulco', 6062],
['CDMX', 'Álvaro Obregón', 5934],
['Veracruz.', 'Veracruz', 5423],
['CDMX', 'Coyoacán', 5246],
['Edo. Mex', 'Nezahualcoyotl', 5138],
['CDMX', 'Xochimilco', 5086],
['Sinaloa', 'Culiacán', 4801],
['Jalisco', 'Guadalajara', 4790],
['CDMX', 'Toluca', 4477],
['CDMX', 'Azcapotzalco', 4466],
['CDMX', 'Cuauhtemoc', 4387]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
