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
['CDMX', 'Iztapalapa', 9647],
['Puebla.', 'Puebla', 9257],
['CDMX', 'Gustavo A. Madero', 7278],
['Tabasco', 'Centro', 6723],
['Baja California', 'Mexicali', 6053],
['Guanajuato', 'León', 5692],
['Edo. Mex', 'Ecatepec', 5025],
['CDMX', 'Tlalpan', 4498],
['Guerrero', 'Acapulco', 4310],
['Edo. Mex', 'Nezahualcoyotl', 4148],
['CDMX', 'Álvaro Obregón', 4119],
['Sonora', 'Hermosillo', 3959],
['Veracruz.', 'Veracruz', 3810],
['CDMX', 'Xochimilco', 3762],
['CDMX', 'Coyoacán', 3689],
['Yucatán', 'Mérida', 3548],
['Sinaloa', 'Culiacán', 3468],
['CDMX', 'Azcapotzalco', 3410],
['CDMX', 'Cuauhtemoc', 3350],
['Edo. Mex', 'Toluca', 3254],
['Baja California', 'Tijuana', 3171],
['Jalisco', 'Guadalajara', 3115]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
