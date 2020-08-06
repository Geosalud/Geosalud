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
['Puebla.', 'Puebla', 13596],
['CDMX', 'Iztapalapa', 12150],
['Tabasco', 'Centro', 10695],
['Guanajuato', 'León', 9825],
['CDMX', 'Gustavo A. Madero', 9365],
['Sonora', 'Hermosillo', 7952],
['Baja California', 'Mexicali', 7371],
['Edo. Mex', 'Ecatepec', 6643],
['Nuevo León', 'Monterrey', 6294],
['CDMX', 'Tlalpan', 6224],
['Yucatán', 'Mérida', 6053],
['Guerrero', 'Acapulco', 5990],
['CDMX', 'Álvaro Obregón', 5873],
['Veracruz.', 'Veracruz', 5348],
['CDMX', 'Coyoacán', 5222],
['Edo. Mex', 'Nezahualcoyotl', 5084],
['CDMX', 'Xochimilco', 5052],
['Sinaloa', 'Culiacán', 4742],
['Jalisco', 'Guadalajara', 4730],
['CDMX', 'Azcapotzalco', 4438],
['Edo. Mex', 'Toluca', 4407],
['CDMX', 'Cuauhtemoc', 4351]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
