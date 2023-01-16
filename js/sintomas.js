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


['CDMX', 'Iztapalapa', 263848],
['CDMX', 'Álvaro Obregón', 233540],
['CDMX', 'Gustavo A. Madero', 222570],
['CDMX', 'Tlalpan', 177074],
['San Luis Potosí.', 'San Luis Potosí', 152237],
['Puebla.', 'Puebla', 137693],
['Guanajuato', 'León', 133169],
['Querétaro.', 'Querétaro', 120870],
['Nuevo León', 'Monterrey', 114957],
['CDMX', 'Coyoacán', 110436],
['Tabasco', 'Centro', 109852],
['CDMX', 'Azcapotzalco', 101084],
['Jalisco', 'Cuauhtemoc', 100688],
['Jalisco', 'Guadalajara', 95613],
['CDMX', 'Xochimilco', 95320],
['Yucatán', 'Mérida', 95128],
['Edo. Méx.', 'Ecatepec', 91254],
['CDMX', 'Tlahuac', 88526],
['Sinaloa', 'Culiacán', 83736],
['CDMX', 'Venustiano Carranza', 82412],
['Sonora', 'Hermosillo', 80837],
['Aguascalientes.', 'Aguascalientes', 77835]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
