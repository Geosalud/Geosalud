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


['CDMX', 'Iztapalapa', 70791],
['CDMX', 'Álvaro Obregón', 55207],
['CDMX', 'Gustavo A. Madero', 55050],
['CDMX', 'Tlalpan', 45418],
['Puebla.', 'Puebla', 38847],
['Guanajuato', 'León', 35665],
['Querétaro.', 'Querétaro', 33872],
['Nuevo León', 'Monterrey', 31745],
['Sonora', 'Hermosillo', 29424],
['San Luis Potosí.', 'San Luis Potosí', 29303],
['CDMX', 'Coyoacán', 28167],
['Tabasco', 'Centro', 26386],
['CDMX', 'Xochimilco', 25874],
['CDMX', 'Tlahuac', 25735],
['Edo. Mex', 'Ecatepec', 25162],
['CDMX', 'Cuauhtemoc', 24996],
['CDMX', 'Azcapotzalco', 24898],
['Jalisco', 'Guadalajara', 24559],
['CDMX', 'Venustiano Carranza', 23241],
['Chihuahua', 'Juárez', 20697],
['Edo. Mex', 'Nezahualcoyotl', 20598],
['Yucatán', 'Iztacalco', 19281]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
