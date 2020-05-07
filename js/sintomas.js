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
'Iztapalapa','Tijuana','Gustavo A. Madero','Mexicali','Culiacan','Centro','Benito Juarez','Tlalpan','Nezahualcoyotl','Ecatepec de Morelos','Alvaro Obregon','Cuauhtemoc','Puebla','Iztacalco','Coyoacan','Merida','Juarez','Miguel Hidalgo','Xochimilco','Venustiano Carranza','Naucalpan de Juarez','Veracruz','Benito Juarez','Azcapotzalco','Tlahuac','Tlalnepantla de Baz','Chimalhuacan','Cuernavaca','Aguascalientes','Monclova','Acapulco de Juarez','Los Cabos','Chalco','La Magdalena Contreras','Milpa Alta','Lazaro Cardenas','Cuajimalpa de Morelos','Ahome','Solidaridad','Chihuahua','Atizapan de Zaragoza','Ixtapaluca','Toluca','Nicolas Romero','Tultitlan','Cuautitlan Izcalli','Guadalajara','Tecamac','La Paz','Queretaro','Monterrey','Valle de Chalco Solidaridad','Victoria','Mazatlan','Leon','San Luis Rio Colorado','Huixquilucan','Coatzacoalcos','San Luis Potosi','Matamoros'

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
1419,1110,966,794,792,785,741,628,623,599,499,473,472,451,442,442,387,386,380,369,346,345,330,325,287,286,264,238,237,226,209,208,199,194,194,181,178,164,161,159,158,158,152,150,149,145,141,140,134,130,128,123,123,117,113,113,110,110,106,102


        ]
    }]
});