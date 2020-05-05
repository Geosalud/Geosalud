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
'Iztapalapa','Tijuana','Gustavo A. Madero','Culiacan','Centro','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Alvaro Obregon','Puebla','Coyoacan','Cuauhtemoc','Iztacalco','Merida','Miguel Hidalgo','Xochimilco','Juarez','Venustiano Carranza','Veracruz','Naucalpan de Juarez','Azcapotzalco','Benito Juarez','Tlalnepantla de Baz','Tlahuac','Chimalhuacan','Aguascalientes','Monclova','Los Cabos','Cuernavaca','Chalco','Milpa Alta','Acapulco de Juarez','La Magdalena Contreras','Cuajimalpa de Morelos','Lazaro Cardenas','Solidaridad','Atizapan de Zaragoza','Ixtapaluca','Ahome','Chihuahua','Cuautitlan Izcalli','Toluca','Tultitlan','Tecamac','La Paz','Nicolas Romero','Guadalajara','Valle de Chalco Solidaridad','Monterrey','Queretaro','Victoria','Huixquilucan','Leon','Mazatlan','Coatzacoalcos','San Luis Rio Colorado'

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

1262,980,847,750,734,695,673,579,561,535,456,447,411,411,409,397,355,346,340,334,320,309,297,295,265,253,234,233,222,203,200,188,187,183,179,164,154,150,145,144,143,142,137,133,131,129,127,124,122,120,119,119,119,104,103,103,103,101


        ]
    }]
});