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

['CDMX', 'Iztapalapa', 118325],
['Puebla.', 'Puebla', 106172],
['Edo. Mex', 'Ecatepec', 86405],
['CDMX', 'Gustavo A. Madero', 75082],
['Jalisco', 'Guadalajara', 56927],
['Guanajuato', 'León', 51520],
['Baja California', 'Tijuana', 45985],
['Chihuahua', 'Juárez', 43079],
['Edo. Mex', 'Nezahualcoyotl', 41429],
['Nuevo León', 'Monterrey', 41364],
['Baja California', 'Mexicali', 40814],
['San Luis Potosí.', 'San Luis Potosí', 40677],
['CDMX', 'Querétaro', 39346],
['CDMX', 'Álvaro Obregón', 39036],
['Yucatán', 'Mérida', 38806],
['Sinaloa', 'Culiacán', 38366],
['Edo. Mex', 'Toluca', 37854],
['Edo. Mex', 'Tlalnepantla', 35481],
['CDMX', 'Coyoacàn', 33599],
['Edo. Mex', 'Naucalpan', 33577],
['CDMX', 'Azcapotzalco', 31259],
['CDMX', 'Cuauhtemoc', 30436]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
