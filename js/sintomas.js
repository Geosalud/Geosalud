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

'Tijuana','Iztapalapa','Gustavo A. Madero','Centro','Culiacan','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Puebla','Ecatepec de Morelos','Alvaro Obregon','Coyoacan','Cuauhtemoc','Merida','Miguel Hidalgo','Iztacalco','Venustiano Carranza','Xochimilco','Benito Juarez','Naucalpan de Juarez','Azcapotzalco','Juarez','Tlalnepantla de Baz','Veracruz','Los Cabos','Monclova','Tlahuac','Chimalhuacan','Aguascalientes','Cuajimalpa de Morelos','Acapulco de Juarez','Milpa Alta','Solidaridad','Chalco','La Magdalena Contreras','Atizapan de Zaragoza','Cuernavaca','Ahome','La Paz','Victoria','Cuautitlan Izcalli'


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

856,850,603,575,558,531,530,394,388,348,337,331,313,298,295,276,262,245,237,228,218,207,206,199,186,185,180,162,162,155,136,131,123,121,118,117,114,112,107,104,102,100



        ]
    }]
});