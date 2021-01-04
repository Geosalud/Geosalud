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


['CDMX', 'Iztapalapa', 48576],
['CDMX', 'Gustavo A. Madero', 39812],
['CDMX', 'Álvaro Obregón', 37371],
['Puebla.', 'Puebla', 31075],
['CDMX', 'Tlalpan', 30755],
['Guanajuato', 'León', 28383],
['Nuevo León', 'Monterrey', 26219],
['Sonora', 'Hermosillo', 24793],
['Querétaro.', 'Querétaro', 24495],
['San Luis Potosí.', 'San Luis Potosí', 23508],
['Tabasco', 'Centro', 22920],
['CDMX', 'Coyoacán', 21281],
['CDMX', 'Xochimilco', 19276],
['Chihuahua', 'Juárez', 19256],
['Edo. Mex', 'Ecatepec', 19182],
['CDMX', 'Cuauhtemoc', 18940],
['CDMX', 'Tlahuac', 18494],
['Jalisco', 'Guadalajara', 18450],
['CDMX', 'Venustiano Carranza', 17785],
['CDMX', 'Azcapotzalco', 17532],
['Yucatán', 'Mérida', 16434],
['Edo. Mex', 'Nezahualcoyotl', 15879]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
