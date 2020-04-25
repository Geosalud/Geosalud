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

'Tijuana','Iztapalapa','Culiacan','Gustavo A. Madero','Mexicali','Centro','Benito Juarez','Tlalpan','Puebla','Nezahualcoyotl','Alvaro Obregon','Coyoacan','Cuauhtemoc','Miguel Hidalgo','Ecatepec de Morelos','Merida','Iztacalco','Xochimilco','Venustiano Carranza','Monclova','Los Cabos','Benito Juarez','Azcapotzalco','Tlalnepantla de Baz','Juarez','Naucalpan de Juarez','Aguascalientes','Cuajimalpa de Morelos','Tlahuac','Chimalhuacan','Veracruz','La Magdalena Contreras','Solidaridad','Guadalajara','Monterrey','Ahome','Milpa Alta','Queretaro','La Paz','Acapulco de Juarez','Atizapan de Zaragoza','Chalco','Huixquilucan','Ixtapaluca','Nicolas Romero','Cuautitlan Izcalli','Lazaro Cardenas','Tecamac','Leon','Tultitlan','Zapopan','San Luis Rio Colorado','Toluca','Cuernavaca','San Luis Potosi','Matamoros','Valle de Chalco Solidaridad'

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


        675,609,480,432,399,398,385,295,272,259,257,227,225,225,223,197,190,181,177,165,163,163,156,154,142,139,126,116,111,108,101,87,86,83,83,83,81,80,78,77,75,74,73,71,69,69,67,64,62,62,61,59,58,58,56,52,51



        ]
    }]
});