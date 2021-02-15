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
['CDMX', 'Iztapalapa', 80029],
['CDMX', 'Alvaro Obregón', 62875],
['CDMX', 'Gustavo A. Madero', 61010],
['CDMX', 'Tlalpan', 52242],
['Puebla.', 'Puebla', 42579],
['Querétaro.', 'Querétaro', 38698],
['Guanajuato', 'León', 37995],
['Nuevo León', 'Monterrey', 33877],
['San Luis Potosí.', 'San Luis Potosí', 32471],
['Sonora', 'Hermosillo', 31383],
['CDMX', 'Coyoacán', 31166],
['CDMX', 'Xochimilco', 28890],
['CDMX', 'Tlahuac', 28580],
['Tabasco', 'Centro', 27925],
['Edo. Mex', 'Ecatepec', 27853],
['CDMX', 'Cuauhtemoc', 27427],
['CDMX', 'Azcapotzalco', 27379],
['Jalisco', 'Guadalajara', 26687],
['CDMX', 'Venustiano Carranza', 25162],
['Edo. Mex', 'Nezahualcoyotl', 22526],
['CDMX', 'Iztacalco', 21116],
['Chihuahua', 'Juárez', 21102]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
