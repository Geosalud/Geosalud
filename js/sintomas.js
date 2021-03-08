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

['CDMX', 'Iztapalapa', 88344],
['CDMX', 'Alvaro Obregón', 69616],
['CDMX', 'Gustavo A. Madero', 66449],
['CDMX', 'Tlalpan', 57047],
['Puebla.', 'Puebla', 46628],
['Querétaro.', 'Querétaro', 42778],
['Guanajuato', 'León', 40464],
['Nuevo León', 'Monterrey', 35190],
['San Luis Potosí.', 'San Luis Potosí', 34843],
['CDMX', 'Coyoacán', 33852],
['Sonora', 'Hermosillo', 32340],
['CDMX', 'Xochimilco', 32064],
['CDMX', 'Tlahuac', 31095],
['CDMX', 'Azcapotzalco', 30018],
['Edo. Mex', 'Ecatepec', 29948],
['CDMX', 'Cuauhtemoc', 29782],
['Tabasco', 'Centro', 29105],
['Jalisco', 'Guadalajara', 28458],
['CDMX', 'Venustiano Carranza', 26992],
['Edo. Mex', 'Nezahualcoyotl', 24211],
['CDMX', 'Iztacalco', 22863],
['Chihuahua', 'Juárez', 21410]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
