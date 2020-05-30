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

['CDMX', 'Iztapalapa', 4591],
['CDMX', 'Gustavo A. Madero', 2957],
['Baja California', 'Mexicali', 2341],
['Tabasco', 'Centro', 2116],
['Baja California', 'Tijuana', 2049],
['Edo. Mex', 'Nezahualcoyotl', 1816],
['CDMX', 'Tlalpan', 1721],
['Puebla.', 'Puebla', 1701],
['Edo. Mex', 'Ecatepec', 1691],
['Sinaloa', 'Culiacán', 1565],
['CDMX', 'Álvaro Obregón', 1495],
['CDMX', 'Coyoacán', 1459],
['CDMX', 'Xochimilco', 1454],
['CDMX', 'Iztacalco', 1374],
['CDMX', 'Cuauhtemoc', 1372],
['Veracruz.', 'Veracruz', 1349],
['Quintana Roo', 'Benito Juárez', 1305],
['CDMX', 'Venustiano Carranza', 1251],
['CDMX', 'Azcapotzalco', 1217],
['CDMX', 'Tlahuac', 1189],
['Edo. Mex', 'Naucalpan', 1041]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
