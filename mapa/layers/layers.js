var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_PercepcindelapoblacinantelapandemiaCovid19_0 = new ol.format.GeoJSON();
var features_PercepcindelapoblacinantelapandemiaCovid19_0 = format_PercepcindelapoblacinantelapandemiaCovid19_0.readFeatures(json_PercepcindelapoblacinantelapandemiaCovid19_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercepcindelapoblacinantelapandemiaCovid19_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PercepcindelapoblacinantelapandemiaCovid19_0.addFeatures(features_PercepcindelapoblacinantelapandemiaCovid19_0);var lyr_PercepcindelapoblacinantelapandemiaCovid19_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercepcindelapoblacinantelapandemiaCovid19_0, 
                style: style_PercepcindelapoblacinantelapandemiaCovid19_0,
                title: '<img src="styles/legend/PercepcindelapoblacinantelapandemiaCovid19_0.png" /> Percepción de la población ante la pandemia Covid-19'
            });var format_Medioambiente_1 = new ol.format.GeoJSON();
var features_Medioambiente_1 = format_Medioambiente_1.readFeatures(json_Medioambiente_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medioambiente_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Medioambiente_1.addFeatures(features_Medioambiente_1);var lyr_Medioambiente_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medioambiente_1, 
                style: style_Medioambiente_1,
                title: '<img src="styles/legend/Medioambiente_1.png" /> Medioambiente'
            });var format_Inseguridad_2 = new ol.format.GeoJSON();
var features_Inseguridad_2 = format_Inseguridad_2.readFeatures(json_Inseguridad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inseguridad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Inseguridad_2.addFeatures(features_Inseguridad_2);var lyr_Inseguridad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inseguridad_2, 
                style: style_Inseguridad_2,
                title: '<img src="styles/legend/Inseguridad_2.png" /> Inseguridad'
            });var format_Indiferencia_3 = new ol.format.GeoJSON();
var features_Indiferencia_3 = format_Indiferencia_3.readFeatures(json_Indiferencia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indiferencia_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Indiferencia_3.addFeatures(features_Indiferencia_3);var lyr_Indiferencia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indiferencia_3, 
                style: style_Indiferencia_3,
                title: '<img src="styles/legend/Indiferencia_3.png" /> Indiferencia'
            });var format_Politico_4 = new ol.format.GeoJSON();
var features_Politico_4 = format_Politico_4.readFeatures(json_Politico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Politico_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Politico_4.addFeatures(features_Politico_4);var lyr_Politico_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Politico_4, 
                style: style_Politico_4,
                title: '<img src="styles/legend/Politico_4.png" /> Politico'
            });var format_Seriedad_5 = new ol.format.GeoJSON();
var features_Seriedad_5 = format_Seriedad_5.readFeatures(json_Seriedad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seriedad_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seriedad_5.addFeatures(features_Seriedad_5);var lyr_Seriedad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seriedad_5, 
                style: style_Seriedad_5,
                title: '<img src="styles/legend/Seriedad_5.png" /> Seriedad'
            });var format_Desinformacion_6 = new ol.format.GeoJSON();
var features_Desinformacion_6 = format_Desinformacion_6.readFeatures(json_Desinformacion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desinformacion_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Desinformacion_6.addFeatures(features_Desinformacion_6);var lyr_Desinformacion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desinformacion_6, 
                style: style_Desinformacion_6,
                title: '<img src="styles/legend/Desinformacion_6.png" /> Desinformacion'
            });var format_Miedo_7 = new ol.format.GeoJSON();
var features_Miedo_7 = format_Miedo_7.readFeatures(json_Miedo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Miedo_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Miedo_7.addFeatures(features_Miedo_7);var lyr_Miedo_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Miedo_7, 
                style: style_Miedo_7,
                title: '<img src="styles/legend/Miedo_7.png" /> Miedo'
            });var format_Salud_8 = new ol.format.GeoJSON();
var features_Salud_8 = format_Salud_8.readFeatures(json_Salud_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salud_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Salud_8.addFeatures(features_Salud_8);var lyr_Salud_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salud_8, 
                style: style_Salud_8,
                title: '<img src="styles/legend/Salud_8.png" /> Salud'
            });var format_Economia_9 = new ol.format.GeoJSON();
var features_Economia_9 = format_Economia_9.readFeatures(json_Economia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Economia_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Economia_9.addFeatures(features_Economia_9);var lyr_Economia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Economia_9, 
                style: style_Economia_9,
                title: '<img src="styles/legend/Economia_9.png" /> Economia'
            });

lyr_PercepcindelapoblacinantelapandemiaCovid19_0.setVisible(true);lyr_Medioambiente_1.setVisible(true);lyr_Inseguridad_2.setVisible(true);lyr_Indiferencia_3.setVisible(true);lyr_Politico_4.setVisible(true);lyr_Seriedad_5.setVisible(true);lyr_Desinformacion_6.setVisible(true);lyr_Miedo_7.setVisible(true);lyr_Salud_8.setVisible(true);lyr_Economia_9.setVisible(true);
var layersList = [baseLayer,lyr_PercepcindelapoblacinantelapandemiaCovid19_0,lyr_Medioambiente_1,lyr_Inseguridad_2,lyr_Indiferencia_3,lyr_Politico_4,lyr_Seriedad_5,lyr_Desinformacion_6,lyr_Miedo_7,lyr_Salud_8,lyr_Economia_9];
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldAliases', {'ObjectID': 'ObjectID', 'Salud': 'Salud', 'Economia': 'Economia', 'Miedo': 'Miedo', 'Desinfo': 'Desinfo', 'Seriedad': 'Seriedad', 'Politico': 'Politico', 'Indiferenc': 'Indiferenc', 'Insegurida': 'Insegurida', 'Medioambie': 'Medioambie', 'Otro': 'Otro', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Medioambiente_1.set('fieldAliases', {'ObjectID': 'ObjectID', 'Medioambie': 'Medioambie', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Inseguridad_2.set('fieldAliases', {'ObjectID': 'ObjectID', 'Insegurida': 'Insegurida', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Indiferencia_3.set('fieldAliases', {'ObjectID': 'ObjectID', 'Indiferenc': 'Indiferenc', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Politico_4.set('fieldAliases', {'ObjectID': 'ObjectID', 'Politico': 'Politico', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Seriedad_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'Seriedad': 'Seriedad', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Desinformacion_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'Desinfo': 'Desinfo', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Miedo_7.set('fieldAliases', {'ObjectID': 'ObjectID', 'Miedo': 'Miedo', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Salud_8.set('fieldAliases', {'ObjectID': 'ObjectID', 'Salud': 'Salud', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_Economia_9.set('fieldAliases', {'ObjectID': 'ObjectID', 'Economia': 'Economia', 'Percepcon': 'Percepcon', 'Ocupacion': 'Ocupacion', 'Sugerencia': 'Sugerencia', 'x': 'x', 'y': 'y', });
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldImages', {'ObjectID': 'TextEdit', 'Salud': 'TextEdit', 'Economia': 'TextEdit', 'Miedo': 'TextEdit', 'Desinfo': 'TextEdit', 'Seriedad': 'TextEdit', 'Politico': 'TextEdit', 'Indiferenc': 'TextEdit', 'Insegurida': 'TextEdit', 'Medioambie': 'TextEdit', 'Otro': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Medioambiente_1.set('fieldImages', {'ObjectID': 'TextEdit', 'Medioambie': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Inseguridad_2.set('fieldImages', {'ObjectID': 'TextEdit', 'Insegurida': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Indiferencia_3.set('fieldImages', {'ObjectID': 'TextEdit', 'Indiferenc': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Politico_4.set('fieldImages', {'ObjectID': 'TextEdit', 'Politico': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Seriedad_5.set('fieldImages', {'ObjectID': 'TextEdit', 'Seriedad': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Desinformacion_6.set('fieldImages', {'ObjectID': 'TextEdit', 'Desinfo': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Miedo_7.set('fieldImages', {'ObjectID': 'TextEdit', 'Miedo': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Salud_8.set('fieldImages', {'ObjectID': 'TextEdit', 'Salud': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Economia_9.set('fieldImages', {'ObjectID': 'TextEdit', 'Economia': 'TextEdit', 'Percepcon': 'TextEdit', 'Ocupacion': 'TextEdit', 'Sugerencia': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldLabels', {'ObjectID': 'no label', 'Salud': 'no label', 'Economia': 'no label', 'Miedo': 'no label', 'Desinfo': 'no label', 'Seriedad': 'no label', 'Politico': 'no label', 'Indiferenc': 'no label', 'Insegurida': 'no label', 'Medioambie': 'no label', 'Otro': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Medioambiente_1.set('fieldLabels', {'ObjectID': 'no label', 'Medioambie': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Inseguridad_2.set('fieldLabels', {'ObjectID': 'no label', 'Insegurida': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Indiferencia_3.set('fieldLabels', {'ObjectID': 'no label', 'Indiferenc': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Politico_4.set('fieldLabels', {'ObjectID': 'no label', 'Politico': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Seriedad_5.set('fieldLabels', {'ObjectID': 'no label', 'Seriedad': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Desinformacion_6.set('fieldLabels', {'ObjectID': 'no label', 'Desinfo': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Miedo_7.set('fieldLabels', {'ObjectID': 'no label', 'Miedo': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Salud_8.set('fieldLabels', {'ObjectID': 'no label', 'Salud': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Economia_9.set('fieldLabels', {'ObjectID': 'no label', 'Economia': 'no label', 'Percepcon': 'no label', 'Ocupacion': 'no label', 'Sugerencia': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Economia_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});