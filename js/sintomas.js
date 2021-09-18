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


['CDMX', 'Iztapalapa', 146678],
['CDMX', 'Álvaro Obregòn', 134005],
['CDMX', 'Gustavo A. Madero', 105401],
['CDMX', 'Tlalpan', 89946],
['Puebla.', 'Puebla', 72556],
['Querétaro.', 'Querétaro', 61684],
['Tabasco', 'Centro', 57107],
['Nuevo León', 'Monterrey', 55368],
['Guanajuato', 'León', 54141],
['CDMX', 'Coyoacán', 50622],
['CDMX', 'Xochimilco', 50209],
['San Luis Potosí.', 'San Luis Potosí', 50002],
['CDMX', 'Tlahuac', 48373],
['CDMX', 'Cuauhtemoc', 47559],
['CDMX', 'Azcapotzalco', 47537],
['Edo. Mex', 'Ecatepec', 47312],
['Sonora', 'Hermosillo', 45161],
['Jalisco', 'Guadalajara', 44493],
['CDMX', 'Venustiano Carranza', 43817],
['Yucatán', 'Mérida', 41731],
['Edo. Mex', 'Nezahualcoyotl', 38525],
['CDMX', 'Iztacalco', 37404]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
