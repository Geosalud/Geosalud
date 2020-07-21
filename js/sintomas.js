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
['Puebla.', 'Puebla', 10540],
['CDMX', 'Iztapalapa', 10467],
['Tabasco', 'Centro', 7971],
['CDMX', 'Gustavo A. Madero', 7872],
['Guanajuato', 'León', 6766],
['Baja California', 'Mexicali', 6632],
['Sonora', 'Hermosillo', 5875],
['Edo. Mex', 'Ecatepec', 5549],
['Guerrero', 'Acapulco', 5069],
['CDMX', 'Tlalpan', 4999],
['CDMX', 'Álvaro Obregón', 4698],
['Edo. Mex', 'Nezahualcoyotl', 4413],
['Veracruz.', 'Veracruz', 4354],
['Yucatán', 'Mérida', 4182],
['CDMX', 'Xochimilco', 4164],
['CDMX', 'Coyoacán', 4161],
['Nuevo León', 'Monterrey', 3928],
['Sinaloa', 'Culiacán', 3917],
['CDMX', 'Azcapotzalco', 3722],
['Jalisco', 'Guadalajara', 3607],
['CDMX', 'Cuauhtemoc', 3602],
['Edo. Mex', 'Toluca', 3590]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
