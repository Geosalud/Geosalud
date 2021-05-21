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

['CDMX', 'Iztapalapa', 104615],
['CDMX', 'Alvaro Obregón', 83805],
['CDMX', 'Gustavo A. Madero', 74813],
['CDMX', 'Tlalpan', 65215],
['Puebla.', 'Puebla', 53945],
['Querétaro.', 'Querétaro', 48825],
['Guanajuato', 'León', 43999],
['San Luis Potosí.', 'San Luis Potosí', 38977],
['CDMX', 'Coyoacán', 37974],
['Nuevo León', 'Monterrey', 37355],
['CDMX', 'Xochimilco', 36000],
['Sonora', 'Hermosillo', 34651],
['CDMX', 'Tlahuac', 34371],
['CDMX', 'Azcapotzalco', 33619],
['CDMX', 'Cuauhtemoc', 33580],
['Edo. Mex', 'Ecatepec', 33092],
['Tabasco', 'Centro', 32769],
['Jalisco', 'Guadalajara', 30683],
['CDMX', 'Venustiano Carranza', 30390],
['Edo. Mex', 'Nezahualcoyotl', 27302],
['CDMX', 'Iztacalco', 25784],
['Yucatàn', 'Mérida', 24708]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
