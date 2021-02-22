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
['CDMX', 'Iztapalapa', 82942],
['CDMX', 'Alvaro Obregón', 65303],
['CDMX', 'Gustavo A. Madero', 62922],
['CDMX', 'Tlalpan', 54109],
['Puebla.', 'Puebla', 44020],
['Querétaro.', 'Querétaro', 39949],
['Guanajuato', 'León', 38638],
['Nuevo León', 'Monterrey', 34293],
['San Luis Potosí.', 'San Luis Potosí', 33564],
['CDMX', 'Coyoacán', 32189],
['Sonora', 'Hermosillo', 31798],
['CDMX', 'Xochimilco', 30047],
['CDMX', 'Tlahuac', 29490],
['Edo. Mex', 'Ecatepec', 28731],
['CDMX', 'Azcapotzalco', 28337],
['Tabasco', 'Centro', 28312],
['CDMX', 'Cuauhtemoc', 28307],
['Jalisco', 'Guadalajara', 27316],
['CDMX', 'Venustiano Carranza', 25823],
['Edo. Mex', 'Nezahualcoyotl', 23109],
['CDMX', 'Iztacalco', 21683],
['Chihuahua', 'Juárez', 21183]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
