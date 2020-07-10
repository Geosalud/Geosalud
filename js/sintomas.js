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
['CDMX', 'Iztapalapa', 9368],
['Puebla.', 'Puebla', 8670],
['CDMX', 'Gustavo A. Madero', 6968],
['Tabasco', 'Centro', 6188],
['Baja California', 'Mexicali', 5806],
['Guanajuato', 'León', 4980],
['Edo. Mex', 'Ecatepec', 4824],
['CDMX', 'Tlalpan', 4337],
['Guerrero', 'Acapulco', 4103],
['Edo. Mex', 'Nezahualcoyotl', 4011],
['CDMX', 'Álvaro Obregón', 3932],
['Veracruz.', 'Veracruz', 3673],
['CDMX', 'Xochimilco', 3608],
['CDMX', 'Coyoacán', 3551],
['Sonora', 'Hermosillo', 3502],
['Sinaloa', 'Culiacán', 3309],
['Yucatán', 'Mérida', 3258],
['CDMX', 'Azcapotzalco', 3249],
['CDMX', 'Cuauhtemoc', 3233],
['Edo. Mex', 'Toluca', 3114],
['Baja California', 'Tijuana', 3088],
['Edo. Mex', 'Naucalpan', 2944]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
