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


['CDMX', 'Iztapalapa', 264885],
['CDMX', 'Álvaro Obregón', 234300],
['CDMX', 'Gustavo A. Madero', 223377],
['CDMX', 'Tlalpan', 177861],
['San Luis Potosí.', 'San Luis Potosí', 152961],
['Puebla.', 'Puebla', 138505],
['Guanajuato', 'León', 133629],
['Querétaro.', 'Querétaro', 121388],
['Nuevo León', 'Monterrey', 115419],
['CDMX', 'Coyoacán', 110939],
['Tabasco', 'Centro', 109952],
['CDMX', 'Azcapotzalco', 101541],
['Jalisco', 'Cuauhtemoc', 101071],
['Jalisco', 'Guadalajara', 95955],
['CDMX', 'Xochimilco', 95667],
['Yucatán', 'Mérida', 95210],
['Edo. Méx.', 'Ecatepec', 91555],
['CDMX', 'Tlahuac', 88799],
['Sinaloa', 'Culiacán', 83902],
['CDMX', 'Venustiano Carranza', 82719],
['Sonora', 'Hermosillo', 80913],
['Aguascalientes.', 'Aguascalientes', 78562]







        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
