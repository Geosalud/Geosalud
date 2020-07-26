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
['Puebla.', 'Puebla', 11841],
['CDMX', 'Iztapalapa', 11157],
['Tabasco', 'Centro', 8696],
['CDMX', 'Gustavo A. Madero', 8425],
['Guanajuato', 'León', 7793],
['Baja California', 'Mexicali', 6890],
['Sonora', 'Hermosillo', 6731],
['Edo. Mex', 'Ecatepec', 5949],
['CDMX', 'Tlalpan', 5437],
['Guerrero', 'Acapulco', 5393],
['CDMX', 'Álvaro Obregón', 5106],
['Yucatán', 'Mérida', 4764],
['Veracruz.', 'Veracruz', 4688],
['Edo. Mex', 'Nezahualcoyotl', 4652],
['Nuevo León', 'Monterrey', 4558],
['CDMX', 'Coyoacán', 4503],
['CDMX', 'Xochimilco', 4490],
['Sinaloa', 'Culiacán', 4272],
['Jalisco', 'Guadalajara', 4069],
['CDMX', 'Azcapotzalco', 3988],
['CDMX', 'Cuauhtemoc', 3906],
['Edo. Mex', 'Toluca', 3877]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
