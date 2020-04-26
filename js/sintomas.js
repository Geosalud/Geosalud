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

'Tijuana','Iztapalapa','Culiacan','Gustavo A. Madero','Centro','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Puebla','Alvaro Obregon','Coyoacan','Cuauhtemoc','Ecatepec de Morelos','Miguel Hidalgo','Merida','Iztacalco','Xochimilco','Venustiano Carranza','Benito Juarez','Tlalnepantla de Baz','Monclova','Azcapotzalco','Los Cabos','Juarez','Naucalpan de Juarez','Chimalhuacan','Aguascalientes','Cuajimalpa de Morelos','Tlahuac','Veracruz','Milpa Alta','Solidaridad','La Paz','Atizapan de Zaragoza','La Magdalena Contreras','Monterrey','Guadalajara','Chalco','Queretaro','Ahome','Acapulco de Juarez','Cuautitlan Izcalli','Huixquilucan','Ixtapaluca','Nicolas Romero','Lazaro Cardenas','Tecamac','Tultitlan','Cuernavaca','Leon','Zapopan','Toluca','Valle de Chalco Solidaridad','San Luis Potosi','San Luis Rio Colorado','Chihuahua','Matamoros','Nacajuca','Victoria'

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


706,646,487,467,425,406,403,306,293,287,275,243,242,241,237,235,200,190,190,171,171,169,169,164,160,153,133,127,124,115,114,100,96,94,92,89,86,84,84,84,84,80,80,77,77,76,74,71,67,67,63,62,59,58,58,56,55,53,50,50



        ]
    }]
});