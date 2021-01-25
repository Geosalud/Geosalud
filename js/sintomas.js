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


['CDMX', 'Iztapalapa', 67547],
['CDMX', 'Gustavo A. Madero', 52552],
['CDMX', 'Álvaro Obregón', 52460],
['CDMX', 'Tlalpan', 42803],
['Puebla.', 'Puebla', 37269],
['Guanajuato', 'León', 34757],
['Querétaro.', 'Querétaro', 31765],
['Nuevo León', 'Monterrey', 30721],
['Sonora', 'Hermosillo', 28763],
['San Luis Potosí.', 'San Luis Potosí', 28266],
['CDMX', 'Coyoacán', 27208],
['Tabasco', 'Centro', 25892],
['CDMX', 'Xochimilco', 24899],
['CDMX', 'Tlahuac', 24609],
['Edo. Mex', 'Ecatepec', 24192],
['CDMX', 'Cuauhtemoc', 24050],
['CDMX', 'Azcapotzalco', 23823],
['Jalisco', 'Guadalajara', 23418],
['CDMX', 'Venustiano Carranza', 22471],
['Chihuahua', 'Juárez', 20371],
['Edo. Mex', 'Nezahualcoyotl', 19871],
['Yucatán', 'Iztacalco', 18392]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
