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
['CDMX', 'Iztapalapa', 9621],
['Puebla.', 'Puebla', 9154],
['CDMX', 'Gustavo A. Madero', 7229],
['Tabasco', 'Centro', 6538],
['Baja California', 'Mexicali', 6000],
['Guanajuato', 'León', 5456],
['Edo. Mex', 'Ecatepec', 4959],
['CDMX', 'Tlalpan', 4482],
['Guerrero', 'Acapulco', 4298],
['Edo. Mex', 'Nezahualcoyotl', 4131],
['CDMX', 'Álvaro Obregón', 4086],
['Sonora', 'Hermosillo', 3882],
['Veracruz.', 'Veracruz', 3782],
['CDMX', 'Xochimilco', 3717],
['CDMX', 'Coyoacán', 3657],
['Yucatán', 'Mérida', 3459],
['Sinaloa', 'Culiacán', 3384],
['CDMX', 'Azcapotzalco', 3370],
['CDMX', 'Cuauhtemoc', 3338],
['Edo. Mex', 'Toluca', 3218],
['Baja California', 'Tijuana', 3150],
['Jalisco', 'Guadalajara', 3036]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
