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
['Puebla.', 'Puebla', 13043],
['CDMX', 'Iztapalapa', 11964],
['Tabasco', 'Centro', 10249],
['Guanajuato', 'León', 9543],
['CDMX', 'Gustavo A. Madero', 9197],
['Sonora', 'Hermosillo', 7675],
['Baja California', 'Mexicali', 7294],
['Edo. Mex', 'Ecatepec', 6492],
['CDMX', 'Tlalpan', 6099],
['Nuevo León', 'Monterrey', 5986],
['Yucatán', 'Mérida', 5876],
['Guerrero', 'Acapulco', 5856],
['CDMX', 'Álvaro Obregón', 5766],
['Veracruz.', 'Veracruz', 5257],
['CDMX', 'Coyoacán', 5130],
['Edo. Mex', 'Nezahualcoyotl', 4989],
['CDMX', 'Xochimilco', 4914],
['Jalisco', 'Guadalajara', 4593],
['Sinaloa', 'Culiacán', 4574],
['CDMX', 'Azcapotzalco', 4381],
['CDMX', 'Cuauhtemoc', 4281],
['Edo. Mex', 'Toluca', 4248]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
