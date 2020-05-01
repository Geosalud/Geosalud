Highcharts.chart('sintomas', {
    chart: {
        type: 'area',
        inverted: true
    },
    title: {
        text: ' '
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },

    xAxis: {
        categories: [

'Iztapalapa','Tijuana','Gustavo A. Madero','Benito Juarez','Centro','Culiacan','Mexicali','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Puebla','Alvaro Obregon','Coyoacan','Cuauhtemoc','Merida','Iztacalco','Miguel Hidalgo','Xochimilco','Venustiano Carranza','Benito Juarez','Azcapotzalco','Naucalpan de Juarez','Juarez','Tlalnepantla de Baz','Veracruz','Monclova','Los Cabos','Chimalhuacan','Aguascalientes','Tlahuac','La Magdalena Contreras','Acapulco de Juarez','Cuajimalpa de Morelos','Cuernavaca','Chalco','Milpa Alta','Solidaridad','Atizapan de Zaragoza','Ahome','Lazaro Cardenas','Ixtapaluca','La Paz','Cuautitlan Izcalli','Tecamac','Queretaro','Guadalajara','Victoria'


        ]
    },
    yAxis: {
        title: {
            text: ''
        },
        allowDecimals: false,
        min: 0
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Positivos Covid-19',
     
        data: [

911,883,660,597,597,586,557,454,427,374,355,348,328,328,317,294,286,272,267,244,231,231,217,208,208,196,189,175,167,167,153,142,139,134,130,127,127,119,116,110,107,106,105,104,103,102,102



        ]
    }]
});