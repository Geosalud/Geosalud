Highcharts.chart('sintomas', {

    title: {
        text: ' '
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
['CDMX', 'Iztapalapa', 1567],
['Baja California', 'Tijuana', 1139],
['CDMX', 'Gustavo A. Madero', 1064],
['Tabasco', 'Centro', 848],
['Sinaloa', 'Culiacan', 842],
['Baja California', 'Mexicali', 833],
['Quintana Roo', 'Benito Juarez', 754],
['CDMX', 'Tlalpan', 677],
['Edo. Mex', 'Nezahualcoyotl', 667],
['Edo. Mex', 'Ecatepec', 635],
['CDMX', 'Alvaro Obregon', 542],
['CDMX', 'Cuauhtemoc', 504],
['Puebla', 'Puebla.', 492],
['CDMX', 'Iztacalco', 482],
['CDMX', 'Coyoacan', 468],
['Yucatán', 'Merida', 460],
['CDMX', 'Miguel Hidalgo', 410],
['CDMX', 'Xochimilco', 409],
['Edo. Mex', 'Naucalpan', 402],
['Chihuahua', 'Juarez', 388],
['CDMX', 'Venustiano C.', 385]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
