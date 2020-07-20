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
['CDMX', 'Iztapalapa', 10403],
['Puebla.', 'Puebla', 10391],
['CDMX', 'Gustavo A. Madero', 7786],
['Tabasco', 'Centro', 7770],
['Guanajuato', 'León', 6591],
['Baja California', 'Mexicali', 6525],
['Sonora', 'Hermosillo', 5803],
['Edo. Mex', 'Ecatepec', 5522],
['Guerrero', 'Acapulco', 5013],
['CDMX', 'Tlalpan', 4955],
['CDMX', 'Álvaro Obregón', 4613],
['Edo. Mex', 'Nezahualcoyotl', 4389],
['Veracruz.', 'Veracruz', 4319],
['Yucatán', 'Mérida', 4134],
['CDMX', 'Xochimilco', 4091],
['CDMX', 'Coyoacán', 4087],
['Sinaloa', 'Culiacán', 3915],
['Nuevo León', 'Monterrey', 3771],
['CDMX', 'Azcapotzalco', 3691],
['CDMX', 'Cuauhtemoc', 3586],
['Edo. Mex', 'Toluca', 3583],
['Jalisco', 'Guadalajara', 3568]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
