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

['CDMX', 'Iztapalapa', 6048],
['CDMX', 'Gustavo A. Madero', 4300],
['Baja California', 'Mexicali', 3376],
['Tabasco', 'Centro', 3021],
['Puebla.', 'Puebla', 2951],
['Edo. Mex', 'Nezahualcoyotl', 2552],
['CDMX', 'Tlalpan', 2397],
['Baja California', 'Tijuana', 2381],
['Edo. Mex', 'Ecatepec', 2360],
['CDMX', 'Álvaro Obregón', 2195],
['CDMX', 'Xochimilco', 2167],
['Veracruz.', 'Veracruz', 2123],
['CDMX', 'Coyoacán', 2084],
['Sinaloa', 'Culiacán', 2040],
['CDMX', 'Cuauhtemoc', 1947],
['CDMX', 'Iztacalco', 1877],
['Guerrero', 'Acapulco', 1837],
['CDMX', 'Azcapotzalco', 1810],
['CDMX', 'Venustiano Carranza', 1718],
['CDMX', 'Tlahuac', 1606],
['Quintana Roo', 'Benito Juárez', 1573],
['Guanajuato', 'León', 1420]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
