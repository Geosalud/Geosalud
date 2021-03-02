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
['CDMX', 'Iztapalapa', 85918],
['CDMX', 'Alvaro Obregón', 67788],
['CDMX', 'Gustavo A. Madero', 64824],
['CDMX', 'Tlalpan', 55712],
['Puebla.', 'Puebla', 45534],
['Querétaro.', 'Querétaro', 41436],
['Guanajuato', 'León', 39526],
['Nuevo León', 'Monterrey', 34807],
['San Luis Potosí.', 'San Luis Potosí', 34316],
['CDMX', 'Coyoacán', 33177],
['Sonora', 'Hermosillo', 32123],
['CDMX', 'Xochimilco', 31167],
['CDMX', 'Tlahuac', 30324],
['Edo. Mex', 'Ecatepec', 29405],
['CDMX', 'Azcapotzalco', 29222],
['CDMX', 'Cuauhtemoc', 29111],
['Tabasco', 'Centro', 28745],
['Jalisco', 'Guadalajara', 28002],
['CDMX', 'Venustiano Carranza', 26489],
['Edo. Mex', 'Nezahualcoyotl', 23721],
['CDMX', 'Iztacalco', 22258],
['Chihuahua', 'Juárez', 21302]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
