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
['CDMX', 'Iztapalapa', 22937],
['Puebla.', 'Puebla', 22604],
['CDMX', 'Gustavo A. Madero', 20132],
['Sonora', 'Hermosillo', 17764],
['Nuevo León', 'Monterrey', 16889],
['Tabasco', 'Centro', 16608],
['Guanajuato', 'León', 16547],
['San Luis Potosí.', 'San Luis Potosí', 15344],
['CDMX', 'Tlalpan', 14701],
['CDMX', 'Álvaro Obregón', 13649],
['Yucatán', 'Mérida', 12564],
['Edo. Mex', 'Ecatepec', 11434],
['Jalisco', 'Guadalajara', 11415],
['CDMX', 'Coyoacán', 11059],
['Baja California', 'Mexicali', 10818],
['Chihuahua', 'Juárez', 10297],
['Querétaro.', 'Querétaro', 10080],
['Guerrero', 'Acapulco', 9831],
['Edo. Mex', 'Nezahualcoyotl', 9299],
['CDMX', 'Venustiano Carranza', 9169],
['CDMX', 'Azcapotzalco', 9163],
['CDMX', 'Xochimilco', 8912]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
