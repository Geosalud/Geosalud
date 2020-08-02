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
['Puebla.', 'Puebla', 13007],
['CDMX', 'Iztapalapa', 11851],
['Tabasco', 'Centro', 9890],
['Guanajuato', 'León', 9324],
['CDMX', 'Gustavo A. Madero', 9043],
['Sonora', 'Hermosillo', 7675],
['Baja California', 'Mexicali', 7217],
['Edo. Mex', 'Ecatepec', 6401],
['CDMX', 'Tlalpan', 6013],
['Guerrero', 'Acapulco', 5731],
['Yucatán', 'Mérida', 5699],
['Nuevo León', 'Monterrey', 5611],
['CDMX', 'Álvaro Obregón', 5600],
['Veracruz.', 'Veracruz', 5192],
['CDMX', 'Coyoacán', 5005],
['Edo. Mex', 'Nezahualcoyotl', 4947],
['CDMX', 'Xochimilco', 4840],
['Sinaloa', 'Culiacán', 4535],
['Jalisco', 'Guadalajara', 4506],
['CDMX', 'Azcapotzalco', 4335],
['Edo. Mex', 'Toluca', 4223],
['CDMX', 'Cuauhtemoc', 4204]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
