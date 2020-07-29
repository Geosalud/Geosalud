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
['Puebla.', 'Puebla', 12193],
['CDMX', 'Iztapalapa', 11399],
['Tabasco', 'Centro', 9103],
['CDMX', 'Gustavo A. Madero', 8690],
['Guanajuato', 'León', 8483],
['Baja California', 'Mexicali', 7025],
['Sonora', 'Hermosillo', 6979],
['Edo. Mex', 'Ecatepec', 6124],
['CDMX', 'Tlalpan', 5639],
['Guerrero', 'Acapulco', 5500],
['CDMX', 'Álvaro Obregón', 5334],
['Yucatán', 'Mérida', 5043],
['Nuevo León', 'Monterrey', 4873],
['Veracruz.', 'Veracruz', 4870],
['CDMX', 'Coyoacán', 4750],
['Edo. Mex', 'Nezahualcoyotl', 4732],
['CDMX', 'Xochimilco', 4643],
['Sinaloa', 'Culiacán', 4381],
['Jalisco', 'Guadalajara', 4276],
['CDMX', 'Azcapotzalco', 4077],
['CDMX', 'Cuauhtemoc', 4068],
['Edo. Mex', 'Toluca', 4013]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
