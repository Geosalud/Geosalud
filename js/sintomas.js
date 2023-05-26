Highcharts.chart('sintomas', {

    title: {
        text: ' ',
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


['CDMX', 'Iztapalapa', 275307],
['CDMX', 'Álvaro Obregón', 242226],
['CDMX', 'Gustavo A. Madero', 232926],
['CDMX', 'Tlalpan', 187833],
['San Luis Potosí.', 'San Luis Potosí', 157499],
['Puebla.', 'Puebla', 145969],
['Guanajuato', 'León', 138825],
['Querétaro.', 'Querétaro', 125898],
['Nuevo León', 'Monterrey', 121081],
['CDMX', 'Coyoacán', 116394],
['Tabasco', 'Centro', 110253],
['CDMX', 'Azcapotzalco', 106549],
['CDMX', 'Cuauhtemoc', 105603],
['CDMX', 'Xochimilco', 99122],
['Jalisco', 'Guadalajara', 98548],
['Yucatán', 'Mérida', 97066],
['Edo. Méx.', 'Ecatepec', 95147],
['CDMX', 'Tlahuac', 91446],
['Sinaloa', 'Culiacán', 86819],
['CDMX', 'Venustiano Carranza', 86211],
['Sonora', 'Hermosillo', 82573],
['Aguascalientes.', 'Aguascalientes', 81502]






        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
