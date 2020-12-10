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
['CDMX', 'Iztapalapa', 34582],
['CDMX', 'Gustavo A. Madero', 29159],
['Puebla.', 'Puebla', 26621],
['CDMX', 'Álvaro Obregón', 24589],
['Guanajuato', 'León', 22631],
['Nuevo León', 'Monterrey', 22413],
['CDMX', 'Tlalpan', 22403],
['Sonora', 'Hermosillo', 21300],
['San Luis Potosí.', 'San Luis Potosí', 20806],
['Tabasco', 'Centro', 19032],
['Querétaro.', 'Querétaro', 18942],
['Chihuahua', 'Juárez', 17567],
['CDMX', 'Coyoacán', 15950],
['Jalisco', 'Guadalajara', 15214],
['Yucatán', 'Mérida', 14956],
['Edo. Mex', 'Ecatepec', 14722],
['CDMX', 'Cuauhtemoc', 14151],
['CDMX', 'Xochimilco', 13758],
['CDMX', 'Azcapotzalco', 13355],
['Baja California', 'Mexicali', 13147],
['CDMX', 'Venustiano Carranza', 13005],
['CDMX', 'Tlahuac', 12545]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
