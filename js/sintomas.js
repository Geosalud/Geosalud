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
['CDMX', 'Iztapalapa', 8477],
['Puebla.', 'Puebla', 7306],
['CDMX', 'Gustavo A. Madero', 6261],
['Baja California', 'Mexicali', 5249],
['Tabasco', 'Centro', 5177],
['Edo. Mex', 'Ecatepec', 4153],
['Guanajuato', 'León', 3882],
['CDMX', 'Tlalpan', 3849],
['Edo. Mex', 'Nezahualcoyotl', 3617],
['CDMX', 'Álvaro Obregón', 3480],
['Veracruz.', 'Veracruz', 3289],
['CDMX', 'Xochimilco', 3272],
['Guerrero', 'Acapulco', 3242],
['CDMX', 'Coyoacán', 3159],
['Sinaloa', 'Culiacán', 2950],
['CDMX', 'Cuauhtemoc', 2935],
['Baja California', 'Tijuana', 2890],
['CDMX', 'Azcapotzalco', 2841],
['Yucatán', 'Mérida', 2643],
['Edo. Mex', 'Toluca', 2596],
['CDMX', 'Iztacalco', 2585],
['Edo. Mex', 'Naucalpan', 2538]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
