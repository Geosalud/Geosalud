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
['CDMX', 'Iztapalapa', 25696],
['Puebla.', 'Puebla', 23864],
['CDMX', 'Gustavo A. Madero', 21659],
['Nuevo León', 'Monterrey', 19011],
['Sonora', 'Hermosillo', 18650],
['Guanajuato', 'León', 17870],
['San Luis Potosí.', 'San Luis Potosí', 17553],
['Tabasco', 'Centro', 17260],
['CDMX', 'Tlalpan', 16524],
['CDMX', 'Álvaro Obregón', 15838],
['Chihuahua', 'Juárez', 13927],
['Yucatán', 'Mérida', 13368],
['Querétaro.', 'Querétaro', 12896],
['Jalisco', 'Guadalajara', 12480],
['Edo. Mex', 'Ecatepec', 12119],
['CDMX', 'Coyoacán', 12058],
['Baja California', 'Mexicali', 11472],
['CDMX', 'Cuauhtemoc', 10653],
['Guerrero', 'Acapulco', 10161],
['CDMX', 'Azcapotzalco', 10093],
['Edo. Mex', 'Nezahualcoyotl', 9966],
['CDMX', 'Venustiano Carranza', 9956]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
