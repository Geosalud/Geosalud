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


['CDMX', 'Iztapalapa', 171709],
['CDMX', 'Alvaro Obregón', 158520],
['CDMX', 'Gustavo A. Madero', 128493],
['CDMX', 'Tlalpan', 108629],
['Puebla.', 'Puebla', 85375],
['Guanajuato', 'León', 75637],
['Tabasco', 'Centro', 73599],
['Querétaro.', 'Querétaro', 73388],
['San Luis Potosí.', 'San Luis Potosí', 69472],
['Nuevo León', 'Monterrey', 67895],
['CDMX', 'Coyoacán', 60745],
['CDMX', 'Cuauhtemoc', 59551],
['CDMX', 'Xochimilco', 58671],
['CDMX', 'Tlahuac', 58172],
['CDMX', 'Azcapotzalco', 56415],
['Yucatán', 'Mérida', 56045],
['Sonora', 'Hermosillo', 56001],
['Jalisco', 'Guadalajara', 55706],
['Edo. Mex', 'Ecatepec', 54786],
['CDMX', 'Venustiano Carranza', 52354],
['CDMX', 'Iztacalco', 45866],



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
