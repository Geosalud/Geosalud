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
['CDMX', 'Iztapalapa', 23430],
['Puebla.', 'Puebla', 23078],
['CDMX', 'Gustavo A. Madero', 20498],
['Sonora', 'Hermosillo', 18135],
['Nuevo León', 'Monterrey', 17720],
['Guanajuato', 'León', 17095],
['Tabasco', 'Centro', 16814],
['San Luis Potosí.', 'San Luis Potosí', 16110],
['CDMX', 'Tlalpan', 15281],
['CDMX', 'Álvaro Obregón', 14227],
['Yucatán', 'Mérida', 12842],
['Jalisco', 'Guadalajara', 11967],
['Edo. Mex', 'Ecatepec', 11697],
['Chihuahua', 'Juárez', 11666],
['CDMX', 'Coyoacán', 11302],
['Querétaro.', 'Querétaro', 11172],
['Baja California', 'Mexicali', 11097],
['Guerrero', 'Acapulco', 9950],
['Edo. Mex', 'Nezahualcoyotl', 9515],
['CDMX', 'Venustiano Carranza', 9514],
['CDMX', 'Azcapotzalco', 9463],
['CDMX', 'Cuauhtemoc', 9279]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
