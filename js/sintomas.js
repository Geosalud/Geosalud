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
['CDMX', 'Iztapalapa', 65008],
['CDMX', 'Gustavo A. Madero', 50667],
['CDMX', 'Álvaro Obregón', 50183],
['CDMX', 'Tlalpan', 40821],
['Puebla.', 'Puebla', 36008],
['Guanajuato', 'León', 33755],
['Querétaro.', 'Querétaro', 29938],
['Nuevo León', 'Monterrey', 29849],
['Sonora', 'Hermosillo', 28353],
['San Luis Potosí.', 'San Luis Potosí', 27796],
['CDMX', 'Coyoacán', 26306],
['Tabasco', 'Centro', 25478],
['CDMX', 'Xochimilco', 24136],
['CDMX', 'Tlahuac', 23853],
['Edo. Mex', 'Ecatepec', 23407],
['CDMX', 'Cuauhtemoc', 23366],
['CDMX', 'Azcapotzalco', 22764],
['Jalisco', 'Guadalajara', 22490],
['CDMX', 'Venustiano Carranza', 21776],
['Chihuahua', 'Juárez', 20078],
['Edo. Mex', 'Nezahualcoyotl', 19241],
['Yucatán', 'Mérida', 17843]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
