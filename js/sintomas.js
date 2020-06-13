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

['CDMX', 'Iztapalapa', 6416],
['CDMX', 'Gustavo A. Madero', 4624],
['Baja California', 'Mexicali', 3623],
['Puebla.', 'Puebla', 3241],
['Tabasco', 'Centro', 3168],
['Edo. Mex', 'Nezahualcoyotl', 2680],
['Edo. Mex', 'Ecatepec', 2589],
['CDMX', 'Tlalpan', 2512],
['Baja California', 'Tijuana', 2436],
['CDMX', 'Álvaro Obregón', 2364],
['CDMX', 'Xochimilco', 2325],
['Veracruz.', 'Veracruz', 2247],
['CDMX', 'Coyoacán', 2235],
['Sinaloa', 'Culiacán', 2119],
['CDMX', 'Cuauhtemoc', 2090],
['Guerrero', 'Acapulco', 2005],
['CDMX', 'Iztacalco', 1963],
['CDMX', 'Azcapotzalco', 1924],
['CDMX', 'Venustiano Carranza', 1809],
['CDMX', 'Tlahuac', 1678],
['Quintana Roo', 'Benito Juárez', 1623],
['Guanajuato', 'León', 1564]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
