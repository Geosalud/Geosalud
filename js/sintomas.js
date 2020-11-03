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
['CDMX', 'Iztapalapa', 23040],
['Puebla.', 'Puebla', 22675],
['CDMX', 'Gustavo A. Madero', 20277],
['Sonora', 'Hermosillo', 17833],
['Nuevo León', 'Monterrey', 17197],
['Guanajuato', 'León', 16694],
['Tabasco', 'Centro', 16639],
['San Luis Potosí.', 'San Luis Potosí', 15564],
['CDMX', 'Tlalpan', 14894],
['CDMX', 'Álvaro Obregón', 13887],
['Yucatán', 'Mérida', 12646],
['Edo. Mex', 'Ecatepec', 11528],
['Jalisco', 'Guadalajara', 11522],
['CDMX', 'Coyoacán', 11165],
['Baja California', 'Mexicali', 10899],
['Chihuahua', 'Juárez', 10847],
['Querétaro.', 'Querétaro', 10300],
['Guerrero', 'Acapulco', 9854],
['Edo. Mex', 'Nezahualcoyotl', 9341],
['CDMX', 'Azcapotzalco', 9276],
['CDMX', 'Venustiano Carranza', 9265],
['CDMX', 'Xochimilco', 8929]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
