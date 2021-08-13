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



['CDMX', 'Iztapalapa', 131417],
['CDMX', 'Álvaro Obregón', 119333],
['CDMX', 'Gustavo A. Madero', 95019],
['CDMX', 'Tlalpan', 80672],
['Puebla.', 'Puebla', 60968],
['Querétaro.', 'Querétaro', 54291],
['Guanajuato', 'León', 48081],
['Nuevo León', 'Monterrey', 46732],
['CDMX', 'Coyoacán', 46367],
['Tabasco', 'Centro', 44665],
['CDMX', 'Xochimilco', 44528],
['San Luis Potosí.', 'San Luis Potosí', 44272],
['CDMX', 'Tlahuac', 43304],
['CDMX', 'Cuauhtemoc', 42548],
['Edo. Mex', 'Ecatepec', 42043],
['CDMX', 'Azcapotzalco', 41984],
['Sonora', 'Hermosillo', 40951],
['CDMX', 'Venustiano Carranza', 39191],
['Jalisco', 'Guadalajara', 37526],
['Yucatán', 'Mérida', 35784],
['Edo. Mex', 'Nezahualcoyotl', 34770],
['CDMX', 'Iztacalco', 33791]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
