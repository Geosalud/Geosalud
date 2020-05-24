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

['CDMX', 'Iztapalapa', 3772],
['CDMX', 'Gustavo A. Madero', 2401],
['Baja California', 'Mexicali', 1856],
['Baja California', 'Tijuana', 1824],
['Tabasco', 'Centro', 1768],
['Edo. Mex', 'Nezahualcoyotl', 1467],
['CDMX', 'Tlalpan', 1389],
['Sinaloa', 'Culiacán', 1334],
['Edo. Mex', 'Ecatepec', 1333],
['CDMX', 'Álvaro Obregón', 1201],
['Puebla.', 'Puebla', 1181],
['Quintana Roo', 'Benito Juárez', 1169],
['CDMX', 'Coyoacán', 1161],
['CDMX', 'Iztacalco', 1147],
['CDMX', 'Cuauhtemoc', 1093],
['CDMX', 'Xochimilco', 1089],
['Veracruz.', 'Veracruz', 1044],
['CDMX', 'Venustiano Carranza', 1009],
['CDMX', 'Tlahuac', 950],
['CDMX', 'Azcapotzalco', 945],
['Edo. Mex', 'Naucalpan', 824]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
