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
['CDMX', 'Iztapalapa', 22241],
['Puebla.', 'Puebla', 22068],
['CDMX', 'Gustavo A. Madero', 19125],
['Sonora', 'Hermosillo', 17349],
['Tabasco', 'Centro', 16414],
['Guanajuato', 'León', 16171],
['Nuevo León', 'Monterrey', 16128],
['San Luis Potosí.', 'San Luis Potosí', 14697],
['CDMX', 'Tlalpan', 14115],
['CDMX', 'Álvaro Obregón', 13126],
['Yucatán', 'Mérida', 12304],
['Edo. Mex', 'Ecatepec', 11169],
['Jalisco', 'Guadalajara', 11008],
['Baja California', 'Mexicali', 10560],
['CDMX', 'Coyoacán', 10560],
['Guerrero', 'Acapulco', 9736],
['Querétaro.', 'Queretaro', 9328],
['Edo. Mex', 'Nezahualcoyotl', 9074],
['Chihuahua', 'Juárez', 8929],
['CDMX', 'Azcapotzalco', 8809],
['CDMX', 'Xochimilco', 8772],
['CDMX', 'Venustiano Carranza', 8732]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
