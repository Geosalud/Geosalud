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
['Puebla.', 'Puebla', 15919],
['CDMX', 'Iztapalapa', 13740],
['Tabasco', 'Centro', 12337],
['Guanajuato', 'León', 11474],
['CDMX', 'Gustavo A. Madero', 10895],
['Sonora', 'Hermosillo', 8853],
['Baja California', 'Mexicali', 8024],
['Nuevo León', 'Monterrey', 7815],
['Edo. Mex', 'Ecatepec', 7623],
['CDMX', 'Tlalpan', 7427],
['Yucatán', 'Mérida', 7403],
['CDMX', 'Álvaro Obregón', 6995],
['Guerrero', 'Acapulco', 6551],
['San Luis Potosí.', 'San Luis Potosí', 6373],
['Veracruz.', 'Coyoacán', 6124],
['CDMX', 'Veracruz', 6109],
['Jalisco', 'Guadalajara', 5742],
['Edo. Mex', 'Nezahualcoyotl', 5678],
['CDMX', 'Xochimilco', 5648],
['Sinaloa', 'Culiacán', 5537],
['Edo. Mex', 'Toluca', 5130],
['CDMX', 'Azcapotzalco', 5086]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
