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
['CDMX', 'Iztapalapa', 33142],
['CDMX', 'Gustavo A. Madero', 27658],
['Puebla.', 'Puebla', 26068],
['CDMX', 'Álvaro Obregón', 23000],
['Nuevo León', 'Monterrey', 22117],
['Guanajuato', 'León', 21958],
['CDMX', 'Tlalpan', 21168],
['Sonora', 'Hermosillo', 20712],
['San Luis Potosí.', 'San Luis Potosí', 20536],
['Tabasco', 'Centro', 18740],
['Querétaro.', 'Querétaro', 18075],
['Chihuahua', 'Juárez', 17253],
['CDMX', 'Coyoacán', 15203],
['Jalisco', 'Guadalajara', 14880],
['Yucatán', 'Mérida', 14798],
['Edo. Mex', 'Ecatepec', 14167],
['CDMX', 'Cuauhtemoc', 13591],
['CDMX', 'Xochimilco', 12992],
['Baja California', 'Mexicali', 12828],
['CDMX', 'Azcapotzalco', 12651],
['CDMX', 'Venustiano Carranza', 12523],
['Aguascalientes.', 'Aguascalientes', 11964]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
