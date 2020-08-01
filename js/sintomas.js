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
['Puebla.', 'Puebla', 12794],
['CDMX', 'Iztapalapa', 11746],
['Tabasco', 'Centro', 9708],
['Guanajuato', 'León', 9069],
['CDMX', 'Gustavo A. Madero', 8922],
['Sonora', 'Hermosillo', 7489],
['Baja California', 'Mexicali', 7142],
['Edo. Mex', 'Ecatepec', 6290],
['CDMX', 'Tlalpan', 5987],
['Guerrero', 'Acapulco', 5646],
['CDMX', 'Álvaro Obregón', 5531],
['Yucatán', 'Mérida', 5394],
['Nuevo León', 'Monterrey', 5303],
['Veracruz.', 'Veracruz', 5081],
['CDMX', 'Coyoacán', 4916],
['Edo. Mex', 'Nezahualcoyotl', 4893],
['CDMX', 'Xochimilco', 4805],
['Sinaloa', 'Culiacán', 4482],
['Jalisco', 'Guadalajara', 4448],
['CDMX', 'Azcapotzalco', 4275],
['CDMX', 'Cuauhtemoc', 4174],
['Edo. Mex', 'Toluca', 4166]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
