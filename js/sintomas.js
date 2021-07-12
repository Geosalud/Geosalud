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

['CDMX', 'Iztapalapa', 111324],
['CDMX', 'Alvaro Obregón', 96888],
['CDMX', 'Gustavo A. Madero', 80357],
['CDMX', 'Tlalpan', 70859],
['Puebla.', 'Puebla', 55543],
['Querétaro.', 'Querétaro', 49957],
['Guanajuato', 'León', 44704],
['CDMX', 'Coyoacán', 40728],
['San Luis Potosí.', 'San Luis Potosí', 40451],
['Nuevo León', 'Monterrey', 39307],
['Tabasco', 'Centro', 39023],
['CDMX', 'Xochimilco', 38140],
['Sonora', 'Hermosillo', 37464],
['CDMX', 'Tlahuac', 36804],
['CDMX', 'Cuauhtemoc', 36630],
['CDMX', 'Azcapotzalco', 36013],
['Edo. Mex', 'Ecatepec', 35572],
['CDMX', 'Venustiano Carranza', 33106],
['Yucatàn', 'Mérida', 31892],
['Jalisco', 'Guadalajara', 31775],
['Edo. Mex', 'Nezahualcoyotl', 29260],
['CDMX', 'Iztacalco', 28055]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
