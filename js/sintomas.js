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
['CDMX', 'Iztapalapa', 24076],
['Puebla.', 'Puebla', 23266],
['CDMX', 'Gustavo A. Madero', 20808],
['Sonora', 'Hermosillo', 18302],
['Nuevo León', 'Monterrey', 18120],
['Guanajuato', 'León', 17298],
['Tabasco', 'Centro', 16932],
['San Luis Potosí.', 'San Luis Potosí', 16592],
['CDMX', 'Tlalpan', 15581],
['CDMX', 'Álvaro Obregón', 14778],
['Yucatán', 'Mérida', 12996],
['Chihuahua', 'Juárez', 12481],
['Jalisco', 'Guadalajara', 12135],
['Edo. Mex', 'Ecatepec', 11823],
['Querétaro.', 'Querétaro', 11738],
['CDMX', 'Coyoacán', 11489],
['Baja California', 'Mexicali', 11276],
['Guerrero', 'Acapulco', 10037],
['CDMX', 'Cuauhtemoc', 9828],
['CDMX', 'Azcapotzalco', 9664],
['Edo. Mex', 'Nezahualcoyotl', 9660],
['CDMX', 'Venustiano Carranza', 9634]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
