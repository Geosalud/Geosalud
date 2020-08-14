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
['Puebla.', 'Puebla', 15011],
['CDMX', 'Iztapalapa', 13028],
['Tabasco', 'Centro', 11701],
['Guanajuato', 'León', 10726],
['CDMX', 'Gustavo A. Madero', 10198],
['Sonora', 'Hermosillo', 8499],
['Baja California', 'Mexicali', 7780],
['Edo. Mex', 'Ecatepec', 7261],
['Nuevo León', 'Monterrey', 7108],
['CDMX', 'Tlalpan', 6889],
['Yucatán', 'Mérida', 6804],
['CDMX', 'Álvaro Obregón', 6452],
['Guerrero', 'Acapulco', 6332],
['Veracruz.', 'Veracruz', 5841],
['CDMX', 'Coyoacán', 5702],
['San Luis Potosí.', 'San Luis Potosí', 5433],
['CDMX', 'Nezahualcoyotl', 5398],
['CDMX', 'Xochimilco', 5349],
['Jalisco', 'Guadalajara', 5236],
['Sinaloa', 'Culiacán', 5147],
['Edo. Mex', 'Toluca', 4822],
['CDMX', 'Azcapotzalco', 4780]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
