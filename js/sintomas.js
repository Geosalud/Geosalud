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
['Puebla.', 'Puebla', 15634],
['CDMX', 'Iztapalapa', 13468],
['Tabasco', 'Centro', 12157],
['Guanajuato', 'León', 11298],
['CDMX', 'Gustavo A. Madero', 10645],
['Sonora', 'Hermosillo', 8786],
['Baja California', 'Mexicali', 7952],
['Nuevo León', 'Monterrey', 7525],
['Edo. Mex', 'Ecatepec', 7508],
['CDMX', 'Tlalpan', 7221],
['Yucatán', 'Mérida', 7194],
['CDMX', 'Álvaro Obregón', 6809],
['Guerrero', 'Acapulco', 6496],
['Veracruz.', 'Veracruz', 6049],
['San Luis Potosí.', 'San Luis Potosí', 6035],
['CDMX', 'Coyoacán', 5985],
['Edo. Mex', 'Nezahualcoyotl', 5588],
['CDMX', 'Xochimilco', 5558],
['Jalisco', 'Guadalajara', 5486],
['Sinaloa', 'Culiacán', 5442],
['Edo. Mex', 'Toluca', 5056],
['CDMX', 'Azcapotzalco', 4965]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
