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
['Puebla.', 'Puebla', 20189],
['CDMX', 'Iztapalapa', 18772],
['CDMX', 'Gustavo A. Madero', 16330],
['Tabasco', 'Centro', 15472],
['Guanajuato', 'León', 14819],
['Nuevo León', 'Monterrey', 13077],
['San Luis Potosí.', 'San Luis Potosí', 11834],
['CDMX', 'Tlalpan', 11833],
['CDMX', 'Álvaro Obregón', 10892],
['Yucatán', 'Mérida', 10764],
['Sonora', 'Hermosillo', 10721],
['Edo. Mex', 'Ecatepec', 10039],
['Jalisco', 'Guadalajara', 9278],
['Baja California', 'Mexicali', 9272],
['CDMX', 'Coyoacán', 9048],
['Guerrero', 'Acapulco', 8799],
['CDMX', 'Xochimilco', 7703],
['Veracruz.', 'Veracruz', 7700],
['CDMX', 'Azcapotzalco', 7541],
['Edo. Mex', 'Nezahualcoyotl', 7434],
['Sinaloa', 'Culiacán', 7353],
['CDMX', 'Cuauhtemoc', 7242]



        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
