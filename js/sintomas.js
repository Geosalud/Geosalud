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

['CDMX', 'Iztapalapa', 105962],
['CDMX', 'Alvaro Obregón', 86146],
['CDMX', 'Gustavo A. Madero', 75446],
['CDMX', 'Tlalpan', 66038],
['Puebla.', 'Puebla', 54406],
['Querétaro.', 'Querétaro', 49089],
['Guanajuato', 'León', 44135],
['San Luis Potosí.', 'San Luis Potosí', 39368],
['CDMX', 'Coyoacán', 38465],
['Nuevo León', 'Monterrey', 37635],
['CDMX', 'Xochimilco', 36297],
['Sonora', 'Hermosillo', 35004],
['CDMX', 'Tlahuac', 34638],
['CDMX', 'Cuauhtemoc', 34023],
['CDMX', 'Azcapotzalco', 33930],
['Tabasco', 'Centro', 33854],
['Edo. Mex', 'Ecatepec de Morelos', 33738],
['Jalisco', 'Guadalajara', 30887],
['CDMX', 'Venustiano Carranza', 30726],
['Edo. Mex', 'Nezahualcoyotl', 27813],
['CDMX', 'Iztacalco', 26152],
['Yucatàn', 'Mérida', 26140]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
