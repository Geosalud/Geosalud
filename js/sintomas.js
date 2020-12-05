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
['CDMX', 'Iztapalapa', 28182],
['CDMX', 'Gustavo A. Madero', 24937],
['Puebla.', 'Puebla', 23411],
['Nuevo León', 'Monterrey', 20534],
['CDMX', 'Álvaro Obregón', 19660],
['Guanajuato', 'León', 19183],
['Sonora', 'Hermosillo', 18884],
['San Luis Potosí.', 'San Luis Potosí', 18077],
['CDMX', 'Tlalpan', 17841],
['Tabasco', 'Centro', 17820],
['Querétaro.', 'Querétaro', 15613],
['Chihuahua', 'Juarez', 15291],
['Yucatán', 'Mérida', 13933],
['Jalisco', 'Guadalajara', 13324],
['CDMX', 'Coyoacán', 12899],
['Edo. Mex', 'Ecatepec de Morelos', 12741],
['CDMX', 'Cuauhtemoc', 12057],
['Baja California', 'Mexicali', 11864],
['CDMX', 'Xochimilco', 11119],
['CDMX', 'Venustiano Carranza', 10871],
['CDMX', 'Azcapotzalco', 10849],
['Durango.', 'Durango', 10746]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
