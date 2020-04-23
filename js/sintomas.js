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
'Tijuana','Iztapalapa','Culiacan','Mexicali','Gustavo A. Madero','Benito Juarez','Centro','Puebla','Tlalpan','Alvaro Obregon','Cuauhtemoc','Miguel Hidalgo','Nezahualcoyotl','Ecatepec de Morelos','Coyoacan','Merida','Los Cabos','Monclova','Iztacalco','Xochimilco','Azcapotzalco','Benito Juarez','Tlalnepantla de Baz','Venustiano Carranza','Juarez','Naucalpan de Juarez','Cuajimalpa de Morelos','Aguascalientes','La Magdalena Contreras','Chimalhuacan','La Paz','Tlahuac','Guadalajara','Solidaridad','Queretaro','Veracruz','Huixquilucan','Monterrey','Milpa Alta','Acapulco de Juarez','Atizapan de Zaragoza','Nicolas Romero','Zapopan','Cuautitlan Izcalli','Leon','Tecamac','San Luis Potosi','San Luis Rio Colorado','Ixtapaluca','Toluca'
        ]
    },
    yAxis: {
        title: {
            text: 'Number of units'
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
        data: [569,441,417,360,338,320,312,239,237,218,199,199,195,185,176,170,159,147,143,138,136,136,125,122,120,119,110,86,80,78,76,76,74,72,71,69,68,67,66,65,65,61,60,59,54,54,53,51,50,50]
    }]
});