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
['Puebla.', 'Puebla', 16360],
['CDMX', 'Iztapalapa', 14209],
['Tabasco', 'Centro', 12776],
['Guanajuato', 'León', 11817],
['CDMX', 'Gustavo A. Madero', 11270],
['Sonora', 'Hermosillo', 9095],
['Nuevo León', 'Monterrey', 8363],
['Baja California', 'Mexicali', 8188],
['Edo. Mex', 'Ecatepec', 7878],
['Yucatán', 'Mérida', 7780],
['CDMX', 'Tlalpan', 7731],
['San Luis Potosí.', 'San Luis Potosí', 7312],
['CDMX', 'Álvaro Obregón', 7290],
['Guerrero', 'Acapulco', 6651],
['CDMX', 'Coyoacán', 6359],
['Veracruz.', 'Veracruz', 6267],
['Jalisco', 'Guadalajara', 6147],
['CDMX', 'Xochimilco', 5880],
['Edo. Mex', 'Nezahualcoyotl', 5845],
['Sinaloa', 'Culiacán', 5755],
['Edo. Mex', 'Toluca', 5277],
['CDMX', 'Azcapotzalco', 5264]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
