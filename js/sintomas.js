Highcharts.chart('sintomas', {

    title: {
        text: ' '
    },
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
        }
    },
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
['CDMX', 'Iztapalapa', 1419],
['Baja California', 'Tijuana', 1110],
['CDMX', 'Gustavo A. Madero', 966],
['Baja California', 'Mexicali', 794],
['Sinaloa', 'Culiacan', 792],
['Tabasco', 'Centro', 785],
['Quintana Roo', 'Benito Juarez', 741],
['CDMX', 'Tlalpan', 628],
['Edo. Mex.', 'Nezahualcoyotl', 623],
['Edo. Mex.', 'Ecatepec', 599],
['CDMX', 'Alvaro Obregon', 499],
['CDMX', 'Cuauhtemoc', 473],
['Puebla', 'Puebla.', 472],
['CDMX', 'Iztacalco', 451],
['CDMX', 'Coyoacan', 442],
['Yucatán', 'Merida', 442],
['Chihuahua', 'Juarez', 387],
['CDMX', 'Miguel Hidalgo', 386],
['CDMX', 'Xochimilco', 380],
['CDMX', 'Venustiano Carranza', 369],
['Edo. Mex.', 'Naucalpan de Juarez', 346]

        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
