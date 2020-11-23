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
['CDMX', 'Iztapalapa', 27164],
['Puebla.', 'Puebla', 24421],
['CDMX', 'Gustavo A. Madero', 22272],
['Nuevo León', 'Monterrey', 19677],
['Sonora', 'Hermosillo', 19019],
['Guanajuato', 'León', 18780],
['San Luis Potosí.', 'San Luis Potosí', 18195],
['Tabasco', 'Centro', 17556],
['CDMX', 'Tlalpan', 17227],
['CDMX', 'Álvaro Obregón', 16677],
['Chihuahua', 'Juárez', 15210],
['Querétaro.', 'Querétaro', 13869],
['Yucatán', 'Mérida', 13677],
['Jalisco', 'Guadalajara', 13000],
['Edo. Mex', 'Ecatepec', 12388],
['CDMX', 'Coyoacán', 12307],
['Baja California', 'Mexicali', 11696],
['CDMX', 'Cuauhtemoc', 11261],
['CDMX', 'Xochimilco', 10527],
['CDMX', 'Azcapotzalco', 10463],
['CDMX', 'Venustiano Carranza', 10289],
['Guerrero', 'Acapulco', 10264]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
