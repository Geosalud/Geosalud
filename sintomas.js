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
['Puebla.', 'Puebla', 12074],
['CDMX', 'Iztapalapa', 11321],
['Tabasco', 'Centro', 8965],
['CDMX', 'Gustavo A. Madero', 8550],
['Guanajuato', 'León', 8224],
['Baja California', 'Mexicali', 6980],
['Sonora', 'Hermosillo', 6843],
['Edo. Mex', 'Ecatepec', 6038],
['CDMX', 'Tlalpan', 5581],
['Guerrero', 'Acapulco', 5431],
['CDMX', 'Álvaro Obregón', 5223],
['Yucatán', 'Mérida', 4922],
['Nuevo León', 'Monterrey', 4831],
['Veracruz.', 'Veracruz', 4806],
['Edo. Mex', 'Nezahualcoyotl', 4700],
['CDMX', 'Coyoacán', 4606],
['CDMX', 'Xochimilco', 4596],
['Sinaloa', 'Culiacán', 4337],
['Jalisco', 'Guadalajara', 4191],
['CDMX', 'Azcapotzalco', 4020],
['CDMX', 'Cuauhtemoc', 3953],
['Edo. Mex', 'Toluca', 3901]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
