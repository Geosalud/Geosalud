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
['Puebla.', 'Puebla', 14645],
['CDMX', 'Iztapalapa', 12782],
['Tabasco', 'Centro', 11494],
['Guanajuato', 'León', 10555],
['CDMX', 'Gustavo A. Madero', 9913],
['Sonora', 'Hermosillo', 8396],
['Baja California', 'Mexicali', 7701],
['Edo. Mex', 'Ecatepec', 7070],
['Nuevo León', 'Monterrey', 6907],
['CDMX', 'Tlalpan', 6706],
['Yucatán', 'Mérida', 6657],
['CDMX', 'Álvaro Obregón', 6290],
['Guerrero', 'Acapulco', 6248],
['Veracruz.', 'Veracruz', 5685],
['CDMX', 'Coyoacán', 5506],
['Edo. Mex', 'Nezahualcoyotl', 5305],
['CDMX', 'Xochimilco', 5235],
['Jalisco', 'Guadalajara', 5175],
['Sinaloa', 'Culiacán', 5087],
['San Luis Potosí.', 'San Luis Potosí', 5066],
['CDMX', 'Azcapotzalco', 4684],
['Edo. Mex', 'Toluca', 4683]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
