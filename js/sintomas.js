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


['CDMX', 'Iztapalapa', 163006],
['CDMX', 'Alvaro Obregón', 152051],
['CDMX', 'Gustavo A. Madero', 120774],
['CDMX', 'Tlalpan', 104515],
['Puebla.', 'Puebla', 82124],
['Guanajuato', 'León', 71264],
['Querétaro.', 'Querétaro', 69447],
['Tabasco', 'Centro', 66605],
['Nuevo León', 'Monterrey', 63161],
['San Luis Potosí.', 'San Luis Potosí', 61977],
['CDMX', 'Coyoacán', 57352],
['CDMX', 'Xochimilco', 55939],
['CDMX', 'Cuauhtemoc', 55279],
['CDMX', 'Tlahuac', 54289],
['Sonora', 'Hermosillo', 53790],
['CDMX', 'Azcapotzalco', 53757],
['Edo. Mex', 'Ecatepec', 52555],
['Yucatán', 'Mérida', 52233],
['Jalisco', 'Guadalajara', 52083],
['CDMX', 'Venustiano Carranza', 49607],
['Edo. Mex', 'Nezahualcoyotl', 42897],
['CDMX', 'Iztacalco', 42472]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
