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

['CDMX', 'Iztapalapa', 4125],
['CDMX', 'Gustavo A. Madero', 2636],
['Baja California', 'Mexicali', 2023],
['Baja California', 'Tijuana', 1923],
['Tabasco', 'Centro', 1905],
['Edo. Mex', 'Nezahualcoyotl', 1659],
['CDMX', 'Tlalpan', 1540],
['Edo. Mex', 'Ecatepec de Morelos', 1468],
['Sinaloa', 'Culiacan', 1468],
['Puebla.', 'Puebla', 1372],
['CDMX', 'Alvaro Obregon', 1325],
['CDMX', 'Coyoacan', 1291],
['CDMX', 'Iztacalco', 1256],
['Veracruz.', 'Veracruz', 1247],
['CDMX', 'Xochimilco', 1245],
['Quintana Roo', 'Benito Juarez', 1234],
['CDMX', 'Cuauhtemoc', 1224],
['CDMX', 'Venustiano Carranza', 1127],
['CDMX', 'Tlahuac', 1099],
['CDMX', 'Azcapotzalco', 1058],
['Edo. Mex', 'Naucalpan de Juarez', 936]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
