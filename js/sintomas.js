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
['Puebla.', 'Puebla', 17337],
['CDMX', 'Iztapalapa', 15086],
['Tabasco', 'Centro', 13404],
['Guanajuato', 'León', 12401],
['CDMX', 'Gustavo A. Madero', 12180],
['Sonora', 'Hermosillo', 9408],
['Nuevo León', 'Monterrey', 9274],
['Baja California', 'Tlalpan', 8474],
['Edo. Mex', 'San Luis Potosí', 8470],
['CDMX', 'Mérida', 8463],
['Yucatán', 'Mexicali', 8450],
['San Luis Potosí.', 'Ecatepec', 8338],
['CDMX', 'Álvaro Obregón', 7911],
['Guerrero', 'Coyoacán', 7000],
['CDMX', 'Acapulco', 6895],
['Veracruz.', 'Guadalajara', 6790],
['Jalisco', 'Veracruz', 6535],
['Edo. Mex', 'Xochimilco', 6213],
['CDMX', 'Nezahualcoyotl', 6155],
['Sinaloa', 'Culiacán', 6129],
['CDMX', 'Azcapotzalco', 5745],
['Edo. Mex', 'Toluca', 5592]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
