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

['CDMX', 'Iztapalapa', 2974],
['CDMX', 'Gustavo A. Madero', 1799],
['Baja California', 'Tijuana', 1569],
['Tabasco', 'Centro', 1460],
['Baja California', 'Mexicali', 1407],
['Sinaloa', 'Culiacán', 1159],
['Edo. Mex', 'Nezahualcoyotl', 1157],
['CDMX', 'Tlalpan', 1136],
['Edo. Mex', 'Ecatepec', 1126],
['Quintana Roo', 'Benito Juárez', 1002],
['CDMX', 'Álvaro Obregón', 907],
['CDMX', 'Coyoacán', 880],
['CDMX', 'Iztacalco', 868],
['CDMX', 'Xochimilco', 849],
['CDMX', 'Cuauhtemoc', 838],
['Puebla.', 'Puebla', 816],
['Veracruz.', 'Veracruz', 782],
['CDMX', 'Venustiano Carranza', 742],
['CDMX', 'Tlahuac', 699],
['Edo. Mex', 'Naucalpan', 684],
['CDMX', 'Azcapotzalco', 677]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
