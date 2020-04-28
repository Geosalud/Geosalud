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

'Tijuana','Iztapalapa','Culiacan','Gustavo A. Madero','Centro','Benito Juarez','Mexicali','Tlalpan','Nezahualcoyotl','Puebla','Alvaro Obregon','Coyoacan','Ecatepec de Morelos','Cuauhtemoc','Merida','Miguel Hidalgo','Iztacalco','Venustiano Carranza','Xochimilco','Benito Juarez','Azcapotzalco','Tlalnepantla de Baz','Los Cabos','Monclova','Juarez','Naucalpan de Juarez','Veracruz','Aguascalientes','Chimalhuacan','Tlahuac','Cuajimalpa de Morelos','Solidaridad','Milpa Alta','La Magdalena Contreras','Ahome','Acapulco de Juarez','La Paz'




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

733,724,539,513,509,488,477,335,326,316,295,278,265,263,263,250,222,205,204,191,185,183,174,174,174,174,157,139,139,137,130,115,112,108,102,101,100


        ]
    }]
});