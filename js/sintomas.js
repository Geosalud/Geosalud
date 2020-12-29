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


['CDMX', 'Iztapalapa', 44991],
['CDMX', 'Gustavo A. Madero', 37698],
['CDMX', 'Álvaro Obregón', 34329],
['Puebla.', 'Puebla', 29482],
['CDMX', 'Tlalpan', 28867],
['Guanajuato', 'León', 27183],
['Nuevo León', 'Monterrey', 25229],
['Sonora', 'Hermosillo', 23772],
['Querétaro.', 'Querétaro', 23194],
['San Luis Potosí.', 'San Luis Potosí', 22823],
['Tabasco', 'Centro', 22016],
['CDMX', 'Coyoacán', 20102],
['Chihuahua', 'Juárez', 19005],
['Edo. Mex', 'Ecatepec', 18302],
['CDMX', 'Xochimilco', 18005],
['CDMX', 'Cuauhtemoc', 17841],
['Jalisco', 'Guadalajara', 17611],
['CDMX', 'Tlahuac', 17134],
['CDMX', 'Venustiano Carranza', 16707],
['CDMX', 'Azcapotzalco', 16574],
['Yucatán', 'Mérida', 16076],
['Edo. Mex', 'Nezahualcoyotl', 15119]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
