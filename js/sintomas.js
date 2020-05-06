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
'Iztapalapa','Tijuana','Gustavo A. Madero','Culiacan','Centro','Mexicali','Benito Juarez','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Alvaro Obregon','Puebla','Cuauhtemoc','Coyoacan','Iztacalco','Merida','Juarez','Miguel Hidalgo','Xochimilco','Venustiano Carranza','Veracruz','Naucalpan de Juarez','Benito Juarez','Azcapotzalco','Tlalnepantla de Baz','Tlahuac','Chimalhuacan','Aguascalientes','Monclova','Cuernavaca','Los Cabos','Acapulco de Juarez','Chalco','Milpa Alta','La Magdalena Contreras','Cuajimalpa de Morelos','Lazaro Cardenas','Chihuahua','Solidaridad','Ixtapaluca','Atizapan de Zaragoza','Ahome','Cuautitlan Izcalli','Toluca','Tultitlan','Nicolas Romero','Tecamac','La Paz','Guadalajara','Monterrey','Valle de Chalco Solidaridad','Queretaro','Victoria','San Luis Rio Colorado','Leon','Mazatlan','Huixquilucan','Coatzacoalcos','San Luis Potosi','Matamoros'

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

1309,1073,871,770,757,731,722,604,577,545,474,459,430,419,417,416,371,369,357,339,331,320,306,302,271,265,245,234,228,219,205,196,192,187,184,166,166,157,155,149,147,146,144,139,138,133,133,132,130,126,122,121,119,110,109,109,108,108,101,100


        ]
    }]
});