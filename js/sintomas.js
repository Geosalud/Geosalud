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
['CDMX', 'Iztapalapa', 10105],
['Puebla.', 'Puebla', 9829],
['CDMX', 'Gustavo A. Madero', 7565],
['Tabasco', 'Centro', 7276],
['Baja California', 'Mexicali', 6271],
['Guanajuato', 'León', 6251],
['Edo. Mex', 'Ecatepec', 5320],
['Sonora', 'Hermosillo', 5061],
['CDMX', 'Tlalpan', 4751],
['Guerrero', 'Acapulco', 4739],
['CDMX', 'Álvaro Obregón', 4333],
['Edo. Mex', 'Nezahualcoyotl', 4282],
['Veracruz.', 'Veracruz', 4090],
['Yucatán', 'Mérida', 3941],
['CDMX', 'Xochimilco', 3910],
['CDMX', 'Coyoacán', 3878],
['Sinaloa', 'Culiacán', 3732],
['CDMX', 'Azcapotzalco', 3575],
['CDMX', 'Cuauhtemoc', 3476],
['Edo. Mex', 'Toluca', 3474],
['Nuevo León', 'Monterrey', 3418],
['Jalisco', 'Guadalajara', 3382]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
