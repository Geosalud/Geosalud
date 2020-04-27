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

'Tijuana','Iztapalapa','Culiacan','Gustavo A. Madero','Mexicali','Benito Juarez','Centro','Tlalpan','Nezahualcoyotl','Puebla','Alvaro Obregon','Coyoacan','Ecatepec de Morelos','Cuauhtemoc','Merida','Miguel Hidalgo','Iztacalco','Venustiano Carranza','Xochimilco','Benito Juarez','Azcapotzalco','Tlalnepantla de Baz','Los Cabos','Naucalpan de Juarez','Monclova','Juarez','Chimalhuacan','Aguascalientes','Veracruz','Cuajimalpa de Morelos','Tlahuac','Solidaridad','La Magdalena Contreras','Milpa Alta','La Paz','Atizapan de Zaragoza','Acapulco de Juarez','Chalco','Ahome','Monterrey','Guadalajara','Queretaro','Cuautitlan Izcalli','Huixquilucan','Lazaro Cardenas','Victoria','Ixtapaluca','Cuernavaca','Nicolas Romero','Tecamac','Toluca','Tultitlan','San Luis Rio Colorado','Leon','Chihuahua','Zapopan','San Luis Potosi','Valle de Chalco Solidaridad','Pachuca de Soto','Matamoros','Nacajuca'

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

709,676,511,494,473,447,442,313,307,302,293,260,258,255,245,242,213,200,196,183,179,178,173,171,170,169,137,128,127,126,126,107,106,104,100,95,92,89,89,87,86,86,81,79,79,79,78,78,77,75,70,70,68,65,63,63,61,60,54,54,50


        ]
    }]
});