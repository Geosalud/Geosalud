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
['Puebla.', 'Puebla', 11461],
['CDMX', 'Iztapalapa', 10878],
['Tabasco', 'Centro', 8428],
['CDMX', 'Gustavo A. Madero', 8167],
['Guanajuato', 'León', 7208],
['Baja California', 'Mexicali', 6793],
['Sonora', 'Hermosillo', 6382],
['Edo. Mex', 'Ecatepec', 5809],
['Guerrero', 'Acapulco', 5303],
['CDMX', 'Tlalpan', 5266],
['CDMX', 'Álvaro Obregón', 4913],
['Edo. Mex', 'Nezahualcoyotl', 4552],
['Veracruz.', 'Veracruz', 4552],
['Yucatán', 'Mérida', 4522],
['CDMX', 'Coyoacán', 4418],
['CDMX', 'Xochimilco', 4374],
['Nuevo León', 'Monterrey', 4277],
['Sinaloa', 'Culiacán', 4164],
['Jalisco', 'Guadalajara', 3923],
['CDMX', 'Azcapotzalco', 3861],
['Edo. Mex', 'Toluca', 3824],
['CDMX', 'Cuauhtemoc', 3818]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
