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
['CDMX', 'Iztapalapa', 10230],
['Puebla.', 'Puebla', 10014],
['CDMX', 'Gustavo A. Madero', 7663],
['Tabasco', 'Centro', 7387],
['Baja California', 'Mexicali', 6470],
['Guanajuato', 'León', 6383],
['Edo. Mex', 'Ecatepec', 5362],
['Sonora', 'Hermosillo', 5343],
['Guerrero', 'Acapulco', 4817],
['CDMX', 'Tlalpan', 4790],
['CDMX', 'Álvaro Obregón', 4451],
['Edo. Mex', 'Nezahualcoyotl', 4310],
['Veracruz.', 'Veracruz', 4163],
['CDMX', 'Xochimilco', 4005],
['Yucatán', 'Mérida', 3966],
['CDMX', 'Coyoacán', 3956],
['Sinaloa', 'Culiacán', 3805],
['CDMX', 'Azcapotzalco', 3643],
['Edo. Mex', 'Toluca', 3554],
['Nuevo León', 'Monterrey', 3530],
['CDMX', 'Cuauhtemoc', 3518],
['Baja California', 'Tijuana', 3437]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
