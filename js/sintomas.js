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

['CDMX', 'Iztapalapa', 93300],
['CDMX', 'Alvaro Obregón', 73355],
['CDMX', 'Gustavo A. Madero', 68980],
['CDMX', 'Tlalpan', 59623],
['Puebla.', 'Puebla', 48614],
['Querétaro.', 'Querétaro', 45128],
['Guanajuato', 'León', 42072],
['San Luis Potosí.', 'San Luis Potosí', 35931],
['Nuevo León', 'Monterrey', 35673],
['CDMX', 'Coyoacán', 35106],
['CDMX', 'Xochimilco', 33328],
['Sonora', 'Hermosillo', 32525],
['CDMX', 'Tlahuac', 32161],
['CDMX', 'Azcapotzalco', 31086],
['CDMX', 'Cuauhtemoc', 30897],
['Edo. Mex', 'Ecatepec', 30818],
['Tabasco', 'Centro', 29772],
['Jalisco', 'Guadalajara', 29156],
['CDMX', 'Venustiano Carranza', 27904],
['Edo. Mex', 'Nezahualcoyotl', 25047],
['CDMX', 'Iztacalco', 23780],
['CDMX', 'Miguel Hidalgo', 21685]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
