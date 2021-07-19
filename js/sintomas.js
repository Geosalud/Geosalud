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

['CDMX', 'Iztapalapa', 114111],
['CDMX', 'Alvaro Obregón', 101007],
['CDMX', 'Gustavo A. Madero', 83064],
['CDMX', 'Tlalpan', 73286],
['Puebla.', 'Puebla', 56099],
['Querétaro.', 'Querétaro', 50588],
['Guanajuato', 'León', 45289],
['CDMX', 'Coyoacán', 41847],
['San Luis Potosí.', 'San Luis Potosí', 40813],
['Nuevo León', 'Monterrey', 40130],
['Tabasco', 'Centro', 39855],
['CDMX', 'Xochimilco', 39323],
['Sonora', 'Tlahuac', 38073],
['Sonora', 'Hermosillo', 38048],
['CDMX', 'Cuauhtemoc', 37668],
['CDMX', 'Azcapotzalco', 37149],
['Edo. Mex', 'Ecatepec', 36536],
['CDMX', 'Venustiano Carranza', 34158],
['Yucatàn', 'Mérida', 32764],
['Jalisco', 'Guadalajara', 32460],
['Edo. Mex', 'Nezahualcoyotl', 30052],
['CDMX', 'Iztacalco', 29104]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
