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


['CDMX', 'Iztapalapa', 48162],
['CDMX', 'Gustavo A. Madero', 39533],
['CDMX', 'Álvaro Obregón', 37077],
['Puebla.', 'Puebla', 30528],
['CDMX', 'Tlalpan', 30522],
['Guanajuato', 'León', 28212],
['Nuevo León', 'Monterrey', 25851],
['Sonora', 'Hermosillo', 24517],
['Querétaro.', 'Querétaro', 24227],
['San Luis Potosí.', 'San Luis Potosí', 23261],
['Tabasco', 'Centro', 22707],
['CDMX', 'Coyoacán', 21142],
['Chihuahua', 'Juárez', 19197],
['Edo. Mex', 'Ecatepec', 19064],
['CDMX', 'Xochimilco', 19044],
['CDMX', 'Cuauhtemoc', 18767],
['CDMX', 'Tlahuac', 18290],
['Jalisco', 'Guadalajara', 18265],
['CDMX', 'Venustiano Carranza', 17651],
['CDMX', 'Azcapotzalco', 17383],
['Yucatán', 'Mérida', 16320],
['Edo. Mex', 'Nezahualcoyotl', 15777]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
