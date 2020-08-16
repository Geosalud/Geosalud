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
['Puebla.', 'Puebla', 15323],
['CDMX', 'Iztapalapa', 13266],
['Tabasco', 'Centro', 11881],
['Guanajuato', 'León', 10955],
['CDMX', 'Gustavo A. Madero', 10434],
['Sonora', 'Hermosillo', 8619],
['Baja California', 'Mexicali', 7871],
['Edo. Mex', 'Ecatepec', 7397],
['Nuevo León', 'Monterrey', 7331],
['CDMX', 'Tlalpan', 7074],
['Yucatán', 'Mérida', 6932],
['CDMX', 'Álvaro Obregón', 6650],
['Guerrero', 'Acapulco', 6369],
['Veracruz.', 'Veracruz', 5911],
['CDMX', 'Coyoacán', 5866],
['San Luis Potosí.', 'San Luis Potosí', 5776],
['Edo. Mex', 'Nezahualcoyotl', 5516],
['CDMX', 'Xochimilco', 5477],
['Jalisco', 'Guadalajara', 5305],
['Sinaloa', 'Culiacan', 5282],
['Edo. Mex', 'Toluca', 4946],
['CDMX', 'Azcapotzalco', 4871]




        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
