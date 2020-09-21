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
['Puebla.', 'Puebla', 19053],
['CDMX', 'Iztapalapa', 17042],
['Tabasco', 'Centro', 14672],
['CDMX', 'Gustavo A. Madero', 14270],
['Guanajuato', 'León', 13888],
['Nuevo León', 'Monterrey', 11133],
['San Luis Potosí.', 'San Luis Potosí', 10353],
['CDMX', 'Tlalpan', 10348],
['Sonora', 'Hermosillo', 10210],
['Yucatán', 'Mérida', 9759],
['CDMX', 'Álvaro Obregón', 9604],
['Edo. Mex', 'Ecatepec', 9432],
['Baja California', 'Mexicali', 8845],
['CDMX', 'Coyoacán', 8176],
['Jalisco', 'Guadalajara', 8103],
['Guerrero', 'Acapulco', 7817],
['Veracruz.', 'Veracruz', 7180],
['CDMX', 'Xochimilco', 6935],
['Edo. Mex', 'Nezahualcoyotl', 6844],
['Sinaloa', 'Culiacán', 6714],
['CDMX', 'Azcapotzalco', 6639],
['CDMX', 'Cuauhtemoc', 6365]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
