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
['Puebla.', 'Puebla', 19841],
['CDMX', 'Iztapalapa', 18048],
['CDMX', 'Gustavo A. Madero', 15542],
['Tabasco', 'Centro', 15264],
['Guanajuato', 'León', 14507],
['Nuevo León', 'Monterrey', 12343],
['San Luis Potosí.', 'San Luis Potosí', 11320],
['CDMX', 'Tlalpan', 11072],
['Sonora', 'Hermosillo', 10544],
['CDMX', 'Álvaro Obregón', 10470],
['Yucatán', 'Mérida', 10410],
['Edo. Mex', 'Ecatepec', 9844],
['Baja California', 'Mexicali', 9117],
['Jalisco', 'Guadalajara', 8832],
['CDMX', 'Coyoacán', 8697],
['Guerrero', 'Acapulco', 8451],
['Veracruz.', 'Veracruz', 7561],
['CDMX', 'Xochimilco', 7334],
['CDMX', 'Azcapotzalco', 7244],
['Edo. Mex', 'Nezahualcoyotl', 7215],
['Sinaloa', 'Culiacán', 7075],
['CDMX', 'Cuauhtemoc', 6978]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
