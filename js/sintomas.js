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

'Tijuana','Iztapalapa','Gustavo A. Madero','Centro','Culiacan','Benito Juarez','Mexicali','Nezahualcoyotl','Tlalpan','Puebla','Ecatepec de Morelos','Alvaro Obregon','Coyoacan','Merida','Cuauhtemoc','Miguel Hidalgo','Iztacalco','Venustiano Carranza','Benito Juarez','Xochimilco','Azcapotzalco','Juarez','Naucalpan de Juarez','Tlalnepantla de Baz','Monclova','Los Cabos','Veracruz','Tlahuac','Chimalhuacan','Aguascalientes','Cuajimalpa de Morelos','Milpa Alta','Solidaridad','Acapulco de Juarez','Atizapan de Zaragoza','La Magdalena Contreras','Chalco','Ahome','La Paz'



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

782,778,572,548,544,523,506,370,353,331,316,315,291,280,277,264,247,226,217,216,205,204,199,194,179,177,176,154,152,143,130,118,117,116,112,110,110,104,103


        ]
    }]
});