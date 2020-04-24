Highcharts.chart('sintomas', {
    chart: {
        type: 'area',
        inverted: true
    },
    title: {
        text: ''
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

'Tijuana','Iztapalapa','Culiacan','Gustavo A. Madero','Centro','Mexicali','Benito Juarez','Tlalpan','Puebla','Alvaro Obregon','Cuauhtemoc','Nezahualcoyotl','Miguel Hidalgo','Ecatepec de Morelos','Coyoacan','Merida','Iztacalco','Los Cabos','Xochimilco','Monclova','Benito Juarez','Venustiano Carranza','Azcapotzalco','Tlalnepantla de Baz','Juarez','Naucalpan de Juarez','Cuajimalpa de Morelos','Aguascalientes','Chimalhuacan','Tlahuac','Veracruz','La Magdalena Contreras','Monterrey','Guadalajara','La Paz','Solidaridad','Milpa Alta','Acapulco de Juarez','Queretaro','Atizapan de Zaragoza','Huixquilucan','Cuautitlan Izcalli','Nicolas Romero','Ahome','Lazaro Cardenas','Zapopan','Tecamac','Tultitlan','Leon','Ixtapaluca','San Luis Potosi','San Luis Rio Colorado','Chalco','Toluca'


        ]
    },
    yAxis: {
        title: {
            text: 'Casos de Covid-19'
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
        name: 'Casos Covid-19',
        data: [640,529,438,386,372,364,350,256,254,238,215,215,210,200,195,187,172,159,159,154,150,149,140,138,132,126,112,91,88,86,85,84,82,81,77,77,76,74,74,71,69,63,62,62,61,59,58,57,56,56,56,56,54,53


        ]
    }]
});