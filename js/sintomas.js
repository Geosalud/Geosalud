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
['Puebla.', 'Puebla', 18571],
['CDMX', 'Iztapalapa', 16409],
['Tabasco', 'Centro', 14265],
['CDMX', 'Gustavo A. Madero', 13588],
['Guanajuato', 'León', 13426],
['Nuevo León', 'Monterrey', 10547],
['Sonora', 'Hermosillo', 9970],
['San Luis Potosí.', 'San Luis Potosí', 9862],
['CDMX', 'Tlalpan', 9703],
['Yucatán', 'Mérida', 9417],
['Edo. Mex', 'Ecatepec', 9071],
['CDMX', 'Álvaro Obregón', 9044],
['Baja California', 'Mexicali', 8781],
['CDMX', 'Coyoacán', 7850],
['Jalisco', 'Guadalajara', 7677],
['Guerrero', 'Acapulco', 7452],
['Veracruz.', 'Veracruz', 7023],
['CDMX', 'Xochimilco', 6693],
['Edo. Mex', 'Nezahualcoyotl', 6647],
['Sinaloa', 'Culiacán', 6491],
['CDMX', 'Azcapotzalco', 6341],
['CDMX', 'Cuauhtemoc', 6039]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
