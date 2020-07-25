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
['Puebla', 'Puebla.', 11587],
['Iztapalapa', 'CDMX', 11062],
['Centro', 'Tabasco', 8563],
['Gustavo A. Madero', 'CDMX', 8349],
['León', 'Guanajuato', 7438],
['Mexicali', 'Baja California', 6832],
['Hermosillo', 'Sonora', 6624],
['Ecatepec', 'Edo. Mex', 5873],
['Tlalpan', 'CDMX', 5408],
['Acapulco', 'Guerrero', 5363],
['Álvaro Obregón', 'CDMX', 4971],
['Veracruz', 'Veracruz.', 4649],
['Mérida', 'Yucatán', 4616],
['Nezahualcoyotl', 'Edo. Mex', 4607],
['Coyoacán', 'CDMX', 4480],
['Monterrey', 'Nuevo León', 4468],
['Xochimilco', 'CDMX', 4459],
['Culiacán', 'Sinaloa', 4210],
['Guadalajara', 'Jalisco', 4028],
['Azcapotzalco', 'CDMX', 3938],
['Cuauhtemoc', 'CDMX', 3869],
['Toluca', 'Edo. Mex', 3847]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
