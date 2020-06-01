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

['CDMX', 'Iztapalapa', 4818],
['CDMX', 'Gustavo A. Madero', 3109],
['Baja California', 'Mexicali', 2435],
['Tabasco', 'Centro', 2229],
['Baja California', 'Tijuana', 2105],
['Edo. Mex', 'Nezahualcoyotl', 1923],
['CDMX', 'Tlalpan', 1835],
['Puebla.', 'Puebla', 1824],
['Edo. Mex', 'Ecatepec', 1770],
['Sinaloa', 'Culiacan', 1634],
['CDMX', 'Álvaro Obregón', 1612],
['CDMX', 'Coyoacán', 1572],
['CDMX', 'Xochimilco', 1544],
['CDMX', 'Iztacalco', 1473],
['Veracruz.', 'Veracruz', 1440],
['CDMX', 'Cuauhtemoc', 1428],
['Quintana Roo', 'Benito Juárez', 1349],
['CDMX', 'Venustiano Carranza', 1338],
['CDMX', 'Azcapotzalco', 1281],
['CDMX', 'Tlahuac', 1271],
['Guerrero', 'Acapulco', 1177]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
