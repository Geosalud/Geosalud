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
['Puebla.', 'Puebla', 18741],
['CDMX', 'Iztapalapa', 16718],
['Tabasco', 'Centro', 14419],
['CDMX', 'Gustavo A. Madero', 13868],
['Guanajuato', 'León', 13620],
['Nuevo León', 'Monterrey', 10672],
['Sonora', 'Hermosillo', 10020],
['San Luis Potosí.', 'San Luis Potosí', 10016],
['CDMX', 'Tlalpan', 9914],
['Yucatán', 'Mérida', 9526],
['CDMX', 'Álvaro Obregón', 9298],
['Edo. Mex', 'Ecatepec', 9210],
['Baja California', 'Mexicali', 8790],
['CDMX', 'Coyoacán', 8007],
['Jalisco', 'Guadalajara', 7806],
['Guerrero', 'Acapulco', 7566],
['Veracruz.', 'Veracruz', 7093],
['CDMX', 'Xochimilco', 6791],
['Edo. Mex', 'Nezahualcoyotl', 6742],
['Sinaloa', 'Culiacán', 6551],
['CDMX', 'Azcapotzalco', 6478],
['CDMX', 'Cuauhtemoc', 6194]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
