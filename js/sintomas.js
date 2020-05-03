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

'Iztapalapa','Tijuana','Gustavo A. Madero','Culiacan','Benito Juarez','Centro','Mexicali','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Alvaro Obregon','Puebla','Merida','Cuauhtemoc','Iztacalco','Coyoacan','Miguel Hidalgo','Xochimilco','Venustiano Carranza','Juarez','Naucalpan de Juarez','Azcapotzalco','Veracruz','Benito Juarez','Tlalnepantla de Baz','Monclova','Aguascalientes','Los Cabos','Tlahuac','Chimalhuacan','Cuernavaca','La Magdalena Contreras','Chalco','Acapulco de Juarez','Cuajimalpa de Morelos','Lazaro Cardenas','Solidaridad','Milpa Alta','Ahome','Atizapan de Zaragoza','Ixtapaluca','Cuautitlan Izcalli','La Paz','Toluca','Chihuahua','Victoria','Tecamac','Monterrey','Queretaro','Guadalajara','Tultitlan','Nicolas Romero','Valle de Chalco Solidaridad','Huixquilucan'


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

1097,889,775,698,667,649,575,535,496,431,416,405,373,367,362,361,318,303,295,293,273,266,265,263,243,216,211,199,193,192,168,165,157,155,150,149,148,147,137,132,122,121,117,116,115,114,113,113,111,107,105,103,101,100



        ]
    }]
});