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
['Puebla.', 'Puebla', 14243],
['CDMX', 'Iztapalapa', 12656],
['Tabasco', 'Centro', 11220],
['Guanajuato', 'León', 10295],
['CDMX', 'Gustavo A. Madero', 9774],
['Sonora', 'Hermosillo', 8211],
['Baja California', 'Mexicali', 7594],
['Edo. Mex', 'Ecatepec', 6879],
['Nuevo León', 'Monterrey', 6650],
['CDMX', 'Tlalpan', 6617],
['Yucatán', 'Mérida', 6416],
['Guerrero', 'Acapulco', 6189],
['CDMX', 'Álvaro Obregón', 6162],
['Veracruz.', 'Veracruz', 5586],
['CDMX', 'Coyoacán', 5424],
['Edo. Mex', 'Nezahualcoyotl', 5250],
['CDMX', 'Xochimilco', 5184],
['Jalisco', 'Guadalajara', 4964],
['Sinaloa', 'Culiacán', 4943],
['San Luis Potosí.', 'San Luis Potosí', 4710],
['Edo. Mex', 'Toluca', 4607],
['CDMX', 'Azcapotzalco', 4597]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
