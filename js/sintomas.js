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
['Puebla.', 'Puebla', 12485],
['CDMX', 'Iztapalapa', 11620],
['Tabasco', 'Centro', 9506],
['Guanajuato', 'León', 8898],
['CDMX', 'Gustavo A. Madero', 8845],
['Sonora', 'Hermosillo', 7417],
['Baja California', 'Mexicali', 7106],
['Edo. Mex', 'Ecatepec', 6209],
['CDMX', 'Tlalpan', 5852],
['Guerrero', 'Acapulco', 5607],
['CDMX', 'Álvaro Obregón', 5444],
['Yucatán', 'Mérida', 5344],
['Nuevo León', 'Monterrey', 5099],
['Veracruz.', 'Veracruz', 4997],
['Edo. Mex', 'Nezahualcoyotl', 4834],
['CDMX', 'Coyoacán', 4819],
['CDMX', 'Xochimilco', 4761],
['Sinaloa', 'Culiacán', 4408],
['Jalisco', 'Guadalajara', 4383],
['CDMX', 'Azcapotzalco', 4203],
['CDMX', 'Cuauhtemoc', 4146],
['Edo. Mex', 'Toluca', 4138]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
