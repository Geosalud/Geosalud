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
['Puebla.', 'Puebla', 12286],
['CDMX', 'Iztapalapa', 11459],
['Tabasco', 'Centro', 9312],
['CDMX', 'Gustavo A. Madero', 8765],
['Guanajuato', 'León', 8686],
['Sonora', 'Hermosillo', 7272],
['Baja California', 'Mexicali', 7046],
['Edo. Mex', 'Ecatepec', 6155],
['CDMX', 'Tlalpan', 5697],
['Guerrero', 'Acapulco', 5530],
['CDMX', 'Álvaro Obregón', 5404],
['Yucatán', 'Mérida', 5129],
['Nuevo León', 'Monterrey', 4996],
['Veracruz.', 'Veracruz', 4935],
['Edo. Mex', 'Nezahualcoyotl', 4769],
['CDMX', 'Coyoacán', 4758],
['CDMX', 'Xochimilco', 4699],
['Sinaloa', 'Culiacán', 4395],
['Jalisco', 'Guadalajara', 4293],
['CDMX', 'Azcapotzalco', 4154],
['CDMX', 'Cuauhtemoc', 4114],
['Edo. Mex', 'Toluca', 4099]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
