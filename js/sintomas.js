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


['CDMX', 'Iztapalapa', 155985],
['CDMX', 'Alvaro Obregón', 143442],
['CDMX', 'Gustavo A. Madero', 112759],
['CDMX', 'Tlalpan', 99625],
['Puebla.', 'Puebla', 79905],
['Querétaro.', 'Querétaro', 66593],
['Guanajuato', 'León', 66104],
['Tabasco', 'Centro', 63069],
['Nuevo León', 'Monterrey', 59419],
['San Luis Potosí.', 'San Luis Potosí', 56045],
['CDMX', 'Coyoacán', 53540],
['CDMX', 'Xochimilco', 52930],
['Sonora', 'Tlahuac', 51326],
['Sonora', 'Hermosillo', 51005],
['CDMX', 'Azcapotzalco', 50827],
['CDMX', 'Cuauhtemoc', 50775],
['Edo. Mex', 'Ecatepec', 50735],
['Jalisco', 'Guadalajara', 49014],
['Yucatán', 'Mérida', 48030],
['CDMX', 'Venustiano Carranza', 46343],
['Edo. Mex', 'Nezahualcoyotl', 40453],
['CDMX', 'Iztacalco', 39435]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
