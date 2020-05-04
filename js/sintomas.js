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

'Iztapalapa','Tijuana','Gustavo A. Madero','Culiacan','Centro','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Alvaro Obregon','Puebla','Cuauhtemoc','Merida','Iztacalco','Coyoacan','Miguel Hidalgo','Xochimilco','Juarez','Venustiano Carranza','Naucalpan de Juarez','Azcapotzalco','Veracruz','Benito Juarez','Tlalnepantla de Baz','Tlahuac','Aguascalientes','Monclova','Chimalhuacan','Los Cabos','Milpa Alta','Chalco','Cuernavaca','Acapulco de Juarez','La Magdalena Contreras','Cuajimalpa de Morelos','Lazaro Cardenas','Solidaridad','Chihuahua','Ahome','Atizapan de Zaragoza','Ixtapaluca','Cuautitlan Izcalli','La Paz','Toluca','Tecamac','Tultitlan','Victoria','Monterrey','Guadalajara','Queretaro','Valle de Chalco Solidaridad','Nicolas Romero','Huixquilucan','Leon'

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

1183,930,817,722,711,688,597,552,521,483,441,427,389,388,383,380,339,326,324,320,290,279,278,277,249,229,217,217,208,201,176,176,174,172,169,157,148,148,140,140,138,136,129,124,124,121,119,117,116,115,114,111,110,103,102


        ]
    }]
});