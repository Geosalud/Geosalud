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

['CDMX', 'Iztapalapa', 5364],
['CDMX', 'Gustavo A. Madero', 3581],
['Baja California', 'Mexicali', 2771],
['Tabasco', 'Centro', 2613],
['Baja California', 'Tijuana', 2254],
['Puebla.', 'Puebla', 2199],
['Edo. Mex', 'Nezahualcoyotl', 2186],
['CDMX', 'Tlalpan', 2041],
['Edo. Mex', 'Ecatepec', 1973],
['CDMX', 'Álvaro Obregón', 1835],
['Sinaloa', 'Culiacán', 1821],
['CDMX', 'Xochimilco', 1798],
['CDMX', 'Coyoacán', 1770],
['Veracruz.', 'Veracruz', 1749],
['CDMX', 'Cuauhtemoc', 1637],
['CDMX', 'Iztacalco', 1623],
['CDMX', 'Azcapotzalco', 1511],
['CDMX', 'Venustiano Carranza', 1506],
['Quintana Roo', 'Benito Juárez', 1458],
['CDMX', 'Tlahuac', 1404],
['Guerrero', 'Acapulco', 1346],
['Edo. Mex', 'Naucalpan', 1200]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
