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
['CDMX', 'Iztapalapa', 38562],
['CDMX', 'Gustavo A. Madero', 32684],
['CDMX', 'Álvaro Obregón', 28852],
['Puebla.', 'Puebla', 27589],
['CDMX', 'Tlalpan', 25406],
['Guanajuato', 'León', 24530],
['Nuevo León', 'Monterrey', 23555],
['Sonora', 'Hermosillo', 21968],
['San Luis Potosí.', 'San Luis Potosí', 21694],
['Querétaro.', 'Querétaro', 20744],
['Tabasco', 'Centro', 20296],
['Chihuahua', 'Juárez', 18353],
['CDMX', 'Coyoacán', 17568],
['Edo. Mex', 'Ecatepec', 16136],
['Jalisco', 'Guadalajara', 16025],
['CDMX', 'Xochimilco', 15613],
['CDMX', 'Cuauhtemoc', 15578],
['Yucatán', 'Mérida', 15351],
['CDMX', 'Azcapotzalco', 14643],
['CDMX', 'Venustiano Carranza', 14546],
['CDMX', 'Tlahuac', 14379],
['Baja California', 'Mexicali', 13805]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
