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


['CDMX', 'Iztapalapa', 72938],
['CDMX', 'Álvaro Obregón', 57136],
['CDMX', 'Gustavo A. Madero', 56641],
['CDMX', 'Tlalpan', 47395],
['Puebla.', 'Puebla', 39719],
['Guanajuato', 'León', 36275],
['Querétaro.', 'Querétaro', 35187],
['Nuevo León', 'Monterrey', 32369],
['San Luis Potosí.', 'San Luis Potosí', 30298],
['Sonora', 'Hermosillo', 30139],
['CDMX', 'Coyoacán', 28841],
['Tabasco', 'Centro', 26760],
['CDMX', 'Xochimilco', 26639],
['CDMX', 'Tlahuac', 26437],
['Edo. Mex', 'Ecatepec', 25995],
['CDMX', 'Cuauhtemoc', 25547],
['CDMX', 'Azcapotzalco', 25500],
['Jalisco', 'Guadalajara', 25214],
['CDMX', 'Venustiano Carranza', 23649],
['Edo. Mex', 'Nezahualcoyotl', 21047],
['Chihuahua', 'Juárez', 20808],
['CDMX', 'Iztacalco', 19690]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
