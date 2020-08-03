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
['Puebla.', 'Puebla', 13034],
['CDMX', 'Iztapalapa', 11931],
['Tabasco', 'Centro', 10107],
['Guanajuato', 'León', 9464],
['CDMX', 'Gustavo A. Madero', 9076],
['Sonora', 'Hermosillo', 7675],
['Baja California', 'Mexicali', 7246],
['Edo. Mex', 'Ecatepec', 6446],
['CDMX', 'Tlalpan', 6082],
['Nuevo León', 'Monterrey', 5867],
['Guerrero', 'Acapulco de Juarez', 5772],
['Yucatán', 'Mérida', 5769],
['CDMX', 'Álvaro Obregón', 5666],
['Veracruz.', 'Veracruz', 5194],
['CDMX', 'Coyoacán', 5050],
['Edo. Mex', 'Nezahualcoyotl', 4964],
['CDMX', 'Xochimilco', 4885],
['Jalisco', 'Guadalajara', 4568],
['Sinaloa', 'Culiacán', 4560],
['CDMX', 'Azcapotzalco', 4369],
['CDMX', 'Cuauhtemoc', 4224],
['Edo. Mex', 'Toluca', 4224]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
