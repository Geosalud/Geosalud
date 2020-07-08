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
['CDMX', 'Iztapalapa', 9030],
['Puebla.', 'Puebla', 8159],
['CDMX', 'Gustavo A. Madero', 6750],
['Tabasco', 'Centro', 5917],
['Baja California', 'Mexicali', 5615],
['Edo. Mex', 'Ecatepec', 4639],
['Guanajuato', 'León', 4637],
['CDMX', 'Tlalpan', 4207],
['Edo. Mex', 'Nezahualcoyotl', 3881],
['Guerrero', 'Acapulco', 3762],
['CDMX', 'Álvaro Obregón', 3759],
['Veracruz.', 'Veracruz', 3552],
['CDMX', 'Xochimilco', 3470],
['CDMX', 'Coyoacán', 3429],
['Sinaloa', 'Culiacán', 3203],
['Sonora', 'Hermosillo', 3147],
['CDMX', 'Cuauhtemoc', 3137],
['CDMX', 'Azcapotzalco', 3117],
['Yucatán', 'Mérida', 3067],
['Baja California', 'Tijuana', 3045],
['Edo. Mex', 'Toluca', 2915],
['Edo. Mex', 'Naucalpan', 2815]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
