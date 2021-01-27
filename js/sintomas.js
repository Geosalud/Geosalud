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


['CDMX', 'Iztapalapa', 68735],
['CDMX', 'Gustavo A. Madero', 53530],
['CDMX', 'Álvaro Obregón', 53488],
['CDMX', 'Tlalpan', 43554],
['Puebla.', 'Puebla', 37958],
['Guanajuato', 'León', 35245],
['Querétaro.', 'Querétaro', 32686],
['Nuevo León', 'Monterrey', 31095],
['Sonora', 'Hermosillo', 28979],
['San Luis Potosí.', 'San Luis Potosí', 28702],
['CDMX', 'Coyoacán', 27624],
['Tabasco', 'Centro', 26157],
['CDMX', 'Xochimilco', 25311],
['CDMX', 'Tlahuac', 25021],
['Edo. Mex', 'Ecatepec', 24561],
['CDMX', 'Cuauhtemoc', 24502],
['CDMX', 'Azcapotzalco', 24310],
['Jalisco', 'Guadalajara', 23951],
['CDMX', 'Venustiano Carranza', 22773],
['Chihuahua', 'Juárez', 20581],
['Edo. Mex', 'Nezahualcoyotl', 20174],
['Yucatán', 'Iztacalco', 18703]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
