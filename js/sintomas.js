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

['CDMX', 'Iztapalapa', 7675],
['CDMX', 'Gustavo A. Madero', 5631],
['Puebla.', 'Puebla', 5480],
['Baja California', 'Mexicali', 4423],
['Tabasco', 'Centro', 4275],
['Edo. Mex', 'Ecatepec', 3590],
['Edo. Mex', 'Nezahualcoyotl', 3216],
['CDMX', 'Tlalpan', 3184],
['CDMX', 'Álvaro Obregón', 3009],
['Veracruz.', 'Veracruz', 2853],
['CDMX', 'Xochimilco', 2836],
['CDMX', 'Coyoacán', 2772],
['Guerrero', 'Acapulco', 2760],
['Guanajuato', 'León', 2666],
['Baja California', 'Tijuana', 2637],
['CDMX', 'Cuauhtemoc', 2606],
['Sinaloa', 'Culiacán', 2602],
['CDMX', 'Azcapotzalco', 2434],
['CDMX', 'Iztacalco', 2363],
['CDMX', 'Venustiano Carranza', 2241],
['CDMX', 'Tlahuac', 2147],
['Edo. Mex', 'Naucalpan', 2100]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
