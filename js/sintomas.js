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
['CDMX', 'Iztapalapa', 8182],
['Puebla.', 'Puebla', 6700],
['CDMX', 'Gustavo A. Madero', 6066],
['Tabasaco', 'Centro', 4885],
['Baja California', 'Mexicali', 4844],
['Edo. Mex', 'Ecatepec', 3970],
['CDMX', 'Tlalpan', 3625],
['Edo. Mex', 'Nezahualcoyotl', 3472],
['Guanajuato', 'León', 3419],
['CDMX', 'Álvaro Obregón', 3277],
['Veracruz.', 'Veracruz', 3160],
['CDMX', 'Xochimilco', 3114],
['Guerrero', 'Acapulco', 3059],
['CDMX', 'Coyoacán', 3018],
['Sinaloa', 'Culiacán', 2835],
['CDMX', 'Cuauhtemoc', 2825],
['Baja California', 'Tijuana', 2760],
['CDMX', 'Azcapotzalco', 2716],
['CDMX', 'Iztacalco', 2521],
['Edo. Mex', 'Toluca', 2417],
['CDMX', 'Venustiano Carranza', 2402],
['Yucatán', 'Mérida', 2386]


        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
