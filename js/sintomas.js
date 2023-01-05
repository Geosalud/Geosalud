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


['CDMX', 'Iztapalapa', 261676],
['CDMX', 'Alvaro Obregón', 231809],
['CDMX', 'Gustavo A. Madero', 220634],
['CDMX', 'Tlalpan', 175361],
['San Luis Potosí.', 'San Luis Potosí', 150711],
['Puebla.', 'Puebla', 136235],
['Guanajuato', 'León', 132238],
['Querétaro.', 'Querétaro', 119785],
['Nuevo León', 'Monterrey', 114046],
['Tabasco', 'Centro', 109194],
['CDMX', 'Coyoacán', 109151],
['CDMX', 'Azcapotzalco', 99970],
['Yucatán', 'Cuauhtemoc', 99867],
['Yucatán', 'Mérida', 94887],
['Jalisco', 'Guadalajara', 94778],
['CDMX', 'Xochimilco', 94669],
['Edo. Méx.', 'Ecatepec', 90618],
['CDMX', 'Tlahuac', 87975],
['Sinaloa', 'Culiacán', 83295],
['CDMX', 'Venustiano Carranza', 81752],
['Sonora', 'Hermosillo', 80658],
['Aguascalientes.', 'Aguascalientes', 76485]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
