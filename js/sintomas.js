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

['CDMX', 'Iztapalapa', 4274],
['CDMX', 'Gustavo A. Madero', 2701],
['Baja California', 'Mexicali', 2132],
['Baja California', 'Tijuana', 1982],
['Tabasco', 'Centro', 1948],
['Edo. Mex', 'Nezahualcoyotl', 1703],
['CDMX', 'Tlalpan', 1581],
['Edo. Mex', 'Ecatepec de Morelos', 1553],
['Sinaloa', 'Culiacan', 1522],
['Puebla.', 'Puebla', 1466],
['CDMX', 'Alvaro Obregon', 1390],
['CDMX', 'Coyoacan', 1352],
['CDMX', 'Xochimilco', 1319],
['CDMX', 'Iztacalco', 1304],
['Veracruz.', 'Veracruz', 1299],
['CDMX', 'Cuauhtemoc', 1275],
['Quintana Roo', 'Benito Juarez', 1262],
['CDMX', 'Venustiano Carranza', 1151],
['CDMX', 'Tlahuac', 1136],
['CDMX', 'Azcapotzalco', 1113],
['Edo. Mex', 'Naucalpan de Juarez', 997]





        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
