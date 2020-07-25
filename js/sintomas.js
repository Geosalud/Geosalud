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
['Puebla.', 'Puebla', 11587],
['CDMX', 'Iztapalapa', 11062],
['Tabasco', 'Centro', 8563],
['CDMX', 'Gustavo A. Madero', 8349],
['Guanajuato', 'León', 7438],
['Baja California', 'Mexicali', 6832],
['Sonora', 'Hermosillo', 6624],
['Edo. Mex', 'Ecatepec', 5873],
['CDMX', 'Tlalpan', 5408],
['Guerrero', 'Acapulco', 5363],
['CDMX', 'Álvaro Obregón', 4971],
['Veracruz.', 'Veracruz', 4649],
['Yucatán', 'Mérida', 4616],
['Edo. Mex', 'Nezahualcoyotl', 4607],
['CDMX', 'Coyoacán', 4480],
['Nuevo León', 'Monterrey', 4468],
['CDMX', 'Xochimilco', 4459],
['Sinaloa', 'Culiacán', 4210],
['Jalisco', 'Guadalajara', 4028],
['CDMX', 'Azcapotzalco', 3938],
['CDMX', 'Cuauhtemoc', 3869],
['Edo. Mex', 'Toluca', 3847]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
