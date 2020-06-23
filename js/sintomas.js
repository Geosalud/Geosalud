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

['CDMX', 'Iztapalapa', 7587],
['CDMX', 'Gustavo A. Madero', 5568],
['Puebla.', 'Puebla', 5064],
['Baja California', 'Mexicali', 4355],
['Tabasco', 'Centro', 4168],
['Edo. Mex', 'Ecatepec', 3541],
['Edo. Mex', 'Nezahualcoyotl', 3182],
['CDMX', 'Tlalpan', 3077],
['CDMX', 'Álvaro Obregón', 2965],
['Veracruz.', 'Veracruz', 2802],
['CDMX', 'Xochimilco', 2799],
['CDMX', 'Coyoacán', 2744],
['Guerrero', 'Acapulco', 2671],
['Baja California', 'Tijuana', 2606],
['CDMX', 'Cuauhtemoc', 2553],
['Sinaloa', 'Culiacán', 2482],
['CDMX', 'Azcapotzalco', 2406],
['Guanajuato', 'León', 2388],
['CDMX', 'Iztacalco', 2330],
['CDMX', 'Venustiano Carranza', 2216],
['CDMX', 'Tlahuac', 2097],
['Edo. Mex', 'Naucalpan', 2023]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
