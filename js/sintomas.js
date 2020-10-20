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
['Puebla.', 'Puebla', 21455],
['CDMX', 'Iztapalapa', 21177],
['CDMX', 'Gustavo A. Madero', 18169],
['Sonora', 'Hermosillo', 16720],
['Tabasco', 'Centro', 16136],
['Guanajuato', 'León', 15639],
['Nuevo León', 'Monterrey', 15039],
['San Luis Potosí.', 'San Luis Potosí', 13664],
['CDMX', 'Tlalpan', 13348],
['CDMX', 'Álvaro Obregón', 12354],
['Yucatán', 'Mérida', 11739],
['Edo. Mex', 'Ecatepec', 10784],
['Jalisco', 'Guadalajara', 10309],
['Baja California', 'Mexicali', 10216],
['CDMX', 'Coyoacán', 9922],
['Guerrero', 'Acapulco', 9462],
['Edo. Mex', 'Nezahualcoyotl', 8641],
['CDMX', 'Xochimilco', 8449],
['Querétaro.', 'Querétaro', 8316],
['CDMX', 'Azcapotzalco', 8285],
['Sinaloa', 'Culiacán', 8233],
['CDMX', 'Cuauhtemoc', 8183]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
