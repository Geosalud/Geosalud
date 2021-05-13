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

['CDMX', 'Iztapalapa', 103833],
['CDMX', 'Alvaro Obregón', 82825],
['CDMX', 'Gustavo A. Madero', 74362],
['CDMX', 'Tlalpan', 64746],
['Puebla.', 'Puebla', 53634],
['Querétaro.', 'Querétaro', 48679],
['Guanajuato', 'León', 43932],
['San Luis Potosí.', 'San Luis Potosí', 38581],
['CDMX', 'Coyoacán', 37763],
['Nuevo León', 'Monterrey', 37188],
['CDMX', 'Xochimilco', 35761],
['Sonora', 'Hermosillo', 34463],
['CDMX', 'Tlahuac', 34252],
['CDMX', 'Azcapotzalco', 33403],
['CDMX', 'Cuauhtemoc', 33371],
['Edo. Mex', 'Ecatepec', 32915],
['Tabasco', 'Centro', 32415],
['Jalisco', 'Guadalajara', 30561],
['CDMX', 'Venustiano Carranza', 30181],
['Edo. Mex', 'Nezahualcoyotl', 27104],
['CDMX', 'Iztacalco', 25623],
['Yucatàn', 'Mérida', 24167]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
