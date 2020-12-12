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
['CDMX', 'Iztapalapa', 36150],
['CDMX', 'Gustavo A. Madero', 30372],
['Puebla.', 'Puebla', 26941],
['CDMX', 'Álvaro Obregón', 26111],
['CDMX', 'Tlalpan', 23440],
['Guanajuato', 'León', 23223],
['Nuevo León', 'Monterrey', 22769],
['Sonora', 'Hermosillo', 21623],
['San Luis Potosí.', 'San Luis Potosí', 21140],
['Querétaro.', 'Querétaro', 19644],
['Tabasco', 'Centro', 19475],
['Chihuahua', 'Juárez', 17713],
['CDMX', 'Coyoacán', 16557],
['Jalisco', 'Guadalajara', 15438],
['Edo. Mex', 'Ecatepec', 15152],
['Yucatán', 'Mérida', 15081],
['CDMX', 'Cuauhtemoc', 14587],
['CDMX', 'Xochimilco', 14307],
['CDMX', 'Azcapotzalco', 13898],
['CDMX', 'Venustiano Carranza', 13589],
['Baja California', 'Mexicali', 13322],
['CDMX', 'Tlahuac', 13232]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
