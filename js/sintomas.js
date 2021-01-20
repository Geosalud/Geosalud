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
['CDMX', 'Iztapalapa', 62405],
['CDMX', 'Gustavo A. Madero', 48834],
['CDMX', 'Álvaro Obregón', 48228],
['CDMX', 'Tlalpan', 38735],
['Puebla.', 'Puebla', 35111],
['Guanajuato', 'León', 33049],
['Nuevo León', 'Monterrey', 29288],
['Querétaro.', 'Querétaro', 28884],
['Sonora', 'Hermosillo', 28019],
['San Luis Potosí.', 'San Luis Potosí', 27193],
['CDMX', 'Coyoacán', 25518],
['Tabasco', 'Centro', 25262],
['CDMX', 'Xochimilco', 23390],
['CDMX', 'Tlahuac', 23030],
['Edo. Mex', 'Ecatepec', 22738],
['CDMX', 'Cuauhtemoc', 22673],
['CDMX', 'Azcapotzalco', 21781],
['Jalisco', 'Guadalajara', 21766],
['CDMX', 'Venustiano Carranza', 21195],
['Chihuahua', 'Juárez', 19960],
['Edo. Mex', 'Nezahualcoyotl', 18691],
['Yucatán', 'Mérida', 17624]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
