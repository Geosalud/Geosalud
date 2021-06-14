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

['CDMX', 'Iztapalapa', 106593],
['CDMX', 'Alvaro Obregón', 87858],
['CDMX', 'Gustavo A. Madero', 75960],
['CDMX', 'Tlalpan', 66722],
['Puebla.', 'Puebla', 54632],
['Querétaro.', 'Querétaro', 49187],
['Guanajuato', 'León', 44258],
['San Luis Potosí.', 'San Luis Potosí', 39614],
['CDMX', 'Coyoacán', 38804],
['Nuevo León', 'Monterrey', 37910],
['CDMX', 'Xochimilco', 36559],
['Sonora', 'Hermosillo', 35420],
['Tabasco', 'Centro', 35139],
['CDMX', 'Tlahuac', 34892],
['CDMX', 'Cuauhtemoc', 34393],
['CDMX', 'Azcapotzalco', 34268],
['Edo. Mex', 'Ecatepec', 33955],
['CDMX', 'Venustiano Carranza', 31000],
['Jalisco', 'Guadalajara', 30999],
['Edo. Mex', 'Nezahualcoyotl', 27953],
['Yucatàn', 'Mérida', 27684],
['CDMX', 'Iztacalco', 26344]








        ],
        type: 'sankey',
        name: 'Casos:'
    }]

});
