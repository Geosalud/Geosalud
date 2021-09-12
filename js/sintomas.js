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
['CDMX', 'Álvaro Obregòn', 119333],
['CDMX', 'Gustavo A. Madero', 95019],
['CDMX', 'Tlalpan', 80672],
['Puebla.', 'Puebla', 60968],
['Querétaro.', 'Querétaro', 54291],
['Tabasco', 'Centro', 48081],
['Nuevo León', 'Monterrey', 46732],
['Guanajuato', 'León', 46367],
['CDMX', 'Coyoacán', 44665],
['CDMX', 'Xochimilco', 44528],
['San Luis Potosí.', 'San Luis Potosí', 44272],
['CDMX', 'Tlahuac', 43304],
['CDMX', 'Cuauhtemoc', 42548],
['CDMX', 'Azcapotzalco', 42043],
['Edo. Mex', 'Ecatepec', 41984],
['Sonora', 'Hermosillo', 40951],
['Jalisco', 'Guadalajara', 39191],
['CDMX', 'Venustiano Carranza', 37526],
['Yucatán', 'Mérida', 35784],
['Edo. Mex', 'Nezahualcoyotl', 34770],
['CDMX', 'Iztacalco', 33791]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
