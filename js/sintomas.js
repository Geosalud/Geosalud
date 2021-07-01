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

['CDMX', 'Iztapalapa', 108855],
['CDMX', 'Alvaro Obregón', 91726],
['CDMX', 'Gustavo A. Madero', 77605],
['CDMX', 'Tlalpan', 68174],
['Puebla.', 'Puebla', 55051],
['Querétaro.', 'Querétaro', 49418],
['Guanajuato', 'León', 44409],
['San Luis Potosí.', 'San Luis Potosí', 40079],
['CDMX', 'Coyoacán', 39605],
['Nuevo León', 'Monterrey', 38547],
['Tabasco', 'Centro', 37651],
['CDMX', 'Xochimilco', 37203],
['Sonora', 'Hermosillo', 36699],
['CDMX', 'Tlahuac', 35666],
['CDMX', 'Cuauhtemoc', 35397],
['CDMX', 'Azcapotzalco', 35057],
['Edo. Mex', 'Ecatepec', 34588],
['CDMX', 'Venustiano Carranza', 31868],
['Jalisco', 'Guadalajara', 31308],
['Yucatàn', 'Mérida', 30455],
['Edo. Mex', 'Nezahualcoyotl', 28523],
['CDMX', 'Iztacalco', 27004]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
