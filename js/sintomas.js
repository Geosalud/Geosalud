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

['CDMX', 'Iztapalapa', 5177],
['CDMX', 'Gustavo A. Madero', 3446],
['Baja California', 'Mexicali', 2690],
['Tabasco', 'Centro', 2557],
['Baja California', 'Tijuana', 2209],
['Puebla.', 'Puebla', 2077],
['Edo. Mex', 'Nezahualcoyotl', 2075],
['CDMX', 'Tlalpan', 1972],
['Edo. Mex', 'Ecatepec', 1911],
['CDMX', 'Álvaro Obregón', 1786],
['Sinaloa', 'Culiacán', 1774],
['CDMX', 'Xochimilco', 1707],
['CDMX', 'Coyoacán', 1706],
['Veracruz.', 'Veracruz', 1670],
['CDMX', 'Cuauhtemoc', 1580],
['CDMX', 'Iztacalco', 1560],
['CDMX', 'Azcapotzalco', 1461],
['CDMX', 'Venustiano Carranza', 1449],
['Quintana Roo', 'Benito Juárez', 1421],
['CDMX', 'Tlahuac', 1352],
['Guerrero', 'Acapulco', 1334],
['Edo. Mex', 'Naucalpan', 1160]










        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
