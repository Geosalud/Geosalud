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
['Puebla.', 'Puebla', 15566],
['CDMX', 'Iztapalapa', 13404],
['Tabasco', 'Centro', 12059],
['Guanajuato', 'León', 11105],
['CDMX', 'Gustavo A. Madero', 10577],
['Sonora', 'Hermosillo', 8655],
['Baja California', 'Mexicali', 7916],
['Edo. Mex', 'Ecatepec', 7466],
['Nuevo León', 'Monterrey', 7430],
['CDMX', 'Tlalpan', 7186],
['Yucatán', 'Mérida', 7093],
['CDMX', 'Álvaro Obregón', 6764],
['Guerrero', 'Acapulco', 6456],
['Veracruz.', 'Veracruz', 6020],
['San Luis Potosí.', 'San Luis Potosí', 5980],
['CDMX', 'Coyoacán', 5908],
['Edo. Mex', 'Nezahualcoyotl', 5542],
['CDMX', 'Xochimilco', 5533],
['Jalisco', 'Guadalajara', 5391],
['Sinaloa', 'Culiacán', 5313],
['Edo. Mex', 'Toluca', 4999],
['CDMX', 'Azcapotzalco', 4933]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
