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
['Puebla.', 'Puebla', 24937],
['CDMX', 'Gustavo A. Madero', 23411],
['Nuevo León', 'Monterrey', 20534],
['Guanajuato', 'León', 19660],
['Sonora', 'Hermosillo', 19183],
['San Luis Potosí.', 'San Luis Potosí', 18884],
['CDMX', 'Álvaro Obregón', 18077],
['CDMX', 'Tlalpan', 17841],
['Tabasco', 'Centro', 17820],
['Chihuahua', 'Juárez', 15613],
['Querétaro.', 'Querétaro', 15291],
['Yucatán', 'Mérida', 13933],
['Jalisco', 'Guadalajara', 13324],
['Edo. Mex', 'Ecatepec', 12899],
['CDMX', 'Coyoacán', 12741],
['Baja California', 'Mexicali', 12057],
['CDMX', 'Cuauhtemoc', 11864],
['CDMX', 'Xochimilco', 11119],
['CDMX', 'Azcapotzalco', 10871],
['Durango.', 'Durango', 10849],
['CDMX', 'Venustiano Carranza', 10746]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
