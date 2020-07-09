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
['CDMX', 'Iztapalapa', 9248],
['Puebla.', 'Puebla', 8396],
['CDMX', 'Gustavo A. Madero', 6882],
['Tabasco', 'Centro', 6078],
['Baja California', 'Mexicali', 5707],
['Guanajuato', 'León', 4809],
['Edo. Mex', 'Ecatepec', 4713],
['CDMX', 'Tlalpan', 4261],
['Guerrero', 'Acapulco', 3964],
['Edo. Mex', 'Nezahualcoyotl', 3952],
['CDMX', 'Álvaro Obregón', 3842],
['Veracruz.', 'Veracruz', 3610],
['CDMX', 'Xochimilco', 3521],
['CDMX', 'Coyoacán', 3471],
['Sonora', 'Hermosillo', 3312],
['Sinaloa', 'Culiacán', 3276],
['Yucatán', 'Mérida', 3184],
['CDMX', 'Azcapotzalco', 3181],
['CDMX', 'Cuauhtemoc', 3172],
['Baja California', 'Tijuana', 3058],
['Edo. Mex', 'Toluca', 3049],
['Edo. Mex', 'Naucalpan', 2864]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
