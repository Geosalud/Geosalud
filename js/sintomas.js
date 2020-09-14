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
['Puebla.', 'Puebla', 18501],
['CDMX', 'Iztapalapa', 16385],
['Tabasco', 'Centro', 14212],
['CDMX', 'Gustavo A. Madero', 13497],
['Guanajuato', 'León', 13385],
['Nuevo León', 'Monterrey', 10471],
['Sonora', 'Hermosillo', 9917],
['San Luis Potosí.', 'San Luis Potosí', 9794],
['CDMX', 'Tlalpan', 9691],
['Yucatán', 'Mérida', 9388],
['Edo. Mex', 'Ecatepec', 9050],
['CDMX', 'Álvaro Obregón', 8965],
['Baja California', 'Mexicali', 8778],
['CDMX', 'Coyoacán', 7824],
['Jalisco', 'Guadalajara', 7646],
['Guerrero', 'Acapulco', 7360],
['Veracruz.', 'Veracruz', 6984],
['CDMX', 'Xochimilco', 6654],
['Edo. Mex', 'Nezahualcoyotl', 6637],
['Sinaloa', 'Culiacán', 6477],
['CDMX', 'Azcapotzalco', 6333],
['CDMX', 'Cuauhtemoc', 6003]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
