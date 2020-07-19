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
['CDMX', 'Iztapalapa', 10313],
['Puebla.', 'Puebla', 10219],
['CDMX', 'Gustavo A. Madero', 7722],
['Tabasco', 'Centro', 7592],
['Guanajuato', 'León', 6514],
['Baja California', 'Mexicali', 6488],
['Sonora', 'Hermosillo', 5704],
['Edo. Mex', 'Ecatepec', 5467],
['Guerrero', 'Acapulco', 4929],
['CDMX', 'Tlalpan', 4904],
['CDMX', 'Álvaro Obregón', 4517],
['Edo. Mex', 'Nezahualcoyotl', 4358],
['Veracruz.', 'Veracruz', 4254],
['CDMX', 'Xochimilco', 4055],
['Yucatán', 'Mérida', 4048],
['CDMX', 'Coyoacán', 4027],
['Sinaloa', 'Culiacán', 3913],
['CDMX', 'Azcapotzalco', 3657],
['Nuevo León', 'Monterrey', 3607],
['Edo. Mex', 'Toluca', 3573],
['CDMX', 'Cuauhtemoc', 3544],
['Jalisco', 'Guadalajara', 3518]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
