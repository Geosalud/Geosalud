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

'Iztapalapa','Tijuana','Gustavo A. Madero','Culiacan','Centro','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Puebla','Alvaro Obregon','Coyoacan','Cuauhtemoc','Merida','Iztacalco','Miguel Hidalgo','Xochimilco','Venustiano Carranza','Naucalpan de Juarez','Juarez','Benito Juarez','Azcapotzalco','Veracruz','Tlalnepantla de Baz','Monclova','Los Cabos','Chimalhuacan','Aguascalientes','Tlahuac','La Magdalena Contreras','Acapulco de Juarez','Cuernavaca','Chalco','Cuajimalpa de Morelos','Solidaridad','Lazaro Cardenas','Milpa Alta','Ahome','Atizapan de Zaragoza','Cuautitlan Izcalli','Ixtapaluca','La Paz','Toluca','Victoria','Tecamac','Monterrey','Queretaro','Guadalajara','Chihuahua','Nicolas Romero','Tultitlan'


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

984,887,719,668,643,620,564,489,465,407,389,375,346,342,342,321,298,290,281,260,257,255,240,236,227,200,199,184,183,169,161,154,150,147,144,139,138,134,132,127,116,115,110,110,110,108,106,106,104,102,101,101




        ]
    }]
});