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
['CDMX', 'Iztapalapa', 8065],
['Puebla.', 'Puebla', 6224],
['CDMX', 'Gustavo A. Madero', 5993],
['Baja California', 'Mexicali', 4740],
['Tabasco', 'Centro', 4705],
['Edo. Mex', 'Ecatepec', 3929],
['CDMX', 'Tlalpan', 3520],
['Edo. Mex', 'Nezahualcoyotl', 3434],
['CDMX', 'Álvaro Obregón', 3234],
['Guanajuato', 'León', 3210],
['Veracruz.', 'Veracruz', 3122],
['CDMX', 'Xochimilco', 3056],
['CDMX', 'Coyoacán', 2975],
['Guerrero', 'Acapulco', 2970],
['CDMX', 'Cuauhtemoc', 2793],
['Baja California', 'Tijuana', 2757],
['Sinaloa', 'Culiacán', 2746],
['CDMX', 'Azcapotzalco', 2657],
['CDMX', 'Iztacalco', 2492],
['CDMX', 'Venustiano Carranza', 2381],
['Edo. Mex', 'Toluca', 2348],
['Edo. Mex', 'Naucalpan', 2311]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
