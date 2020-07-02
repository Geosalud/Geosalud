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
['CDMX', 'Iztapalapa', 8332],
['Puebla.', 'Puebla', 7002],
['CDMX', 'Gustavo A. Madero', 6167],
['Baja California', 'Mexicali', 5110],
['Tabasco', 'Centro', 5092],
['Edo. Mex', 'Ecatepec', 4073],
['Guanajuato', 'León', 3782],
['CDMX', 'Tlalpan', 3768],
['Edo. Mex', 'Nezahualcoyotl', 3545],
['CDMX', 'Álvaro Obregón', 3395],
['Veracruz.', 'Veracruz', 3262],
['CDMX', 'Xochimilco', 3218],
['Guerrero', 'Acapulco', 3186],
['CDMX', 'Coyoacán', 3065],
['Sinaloa', 'Culiacán', 2909],
['CDMX', 'Cuauhtemoc', 2892],
['Baja California', 'Tijuana', 2845],
['CDMX', 'Azcapotzalco', 2771],
['Yucatán', 'Mérida', 2577],
['CDMX', 'Iztacalco', 2555],
['Edo. Mex', 'Toluca', 2552],
['Edo. Mex', 'Naucalpan', 2489]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
