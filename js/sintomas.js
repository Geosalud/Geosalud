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

['CDMX', 'Iztapalapa', 108322],
['CDMX', 'Alvaro Obregón', 90751],
['CDMX', 'Gustavo A. Madero', 77194],
['CDMX', 'Tlalpan', 67876],
['Puebla.', 'Puebla', 54967],
['Querétaro.', 'Querétaro', 49381],
['Guanajuato', 'León', 44375],
['San Luis Potosí.', 'San Luis Potosí', 40010],
['CDMX', 'Coyoacán', 39417],
['Nuevo León', 'Monterrey', 38387],
['Tabasco', 'Centro', 37245],
['CDMX', 'Xochimilco', 37063],
['Sonora', 'Hermosillo', 36479],
['CDMX', 'Tlahuac', 35458],
['CDMX', 'Cuauhtemoc', 35155],
['CDMX', 'Azcapotzalco', 34884],
['Edo. Mex', 'Ecatepec', 34437],
['CDMX', 'Venustiano Carranza', 31657],
['Jalisco', 'Guadalajara', 31243],
['Yucatàn', 'Mérida', 30015],
['Edo. Mex', 'Nezahualcoyotl', 28397],
['CDMX', 'Iztacalco', 26878]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
