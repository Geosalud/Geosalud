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
['Puebla.', 'Puebla', 13986],
['CDMX', 'Iztapalapa', 12429],
['Tabasco', 'Centro', 10935],
['Guanajuato', 'León', 10079],
['CDMX', 'Gustavo A. Madero', 9619],
['Sonora', 'Hermosillo', 8128],
['Baja California', 'Mexicali', 7481],
['Edo. Mex', 'Ecatepec', 6785],
['Nuevo León', 'Monterrey', 6488],
['CDMX', 'Tlalpan', 6386],
['Yucatán', 'Mérida', 6252],
['Guerrero', 'Acapulco', 6075],
['CDMX', 'Álvaro Obregón', 6070],
['Veracruz.', 'Veracruz', 5455],
['CDMX', 'Coyoacán', 5303],
['Edo. Mex', 'Nezahualcoyotl', 5195],
['CDMX', 'Xochimilco', 5125],
['Sinaloa', 'Culiacán', 4889],
['Jalisco', 'Guadalajara', 4842],
['Edo. Mex', 'Toluca', 4525],
['San Luis Potosí.', 'San Luis Potosí', 4513],
['CDMX', 'Azcapotzalco', 4503]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
