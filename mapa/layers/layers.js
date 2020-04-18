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
var format_Percepcin_0 = new ol.format.GeoJSON();
var features_Percepcin_0 = format_Percepcin_0.readFeatures(json_Percepcin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percepcin_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percepcin_0.addFeatures(features_Percepcin_0);var lyr_Percepcin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Percepcin_0, 
                style: style_Percepcin_0,
                title: '<img src="styles/legend/Percepcin_0.png" /> Percepción'
            });

lyr_Percepcin_0.setVisible(true);
var layersList = [baseLayer,lyr_Percepcin_0];
lyr_Percepcin_0.set('fieldAliases', {'ObjectID': 'ObjectID', 'Fecha': 'Fecha', 'Percepcion': 'Percepcion', 'Otro': 'Otro', 'Ocupacion': 'Ocupacion', 'Opinion': 'Opinion', 'Trabajo': 'Trabajo', 'x': 'x', 'y': 'y', });
lyr_Percepcin_0.set('fieldImages', {'ObjectID': 'TextEdit', 'Fecha': 'TextEdit', 'Percepcion': 'TextEdit', 'Otro': 'TextEdit', 'Ocupacion': 'TextEdit', 'Opinion': 'TextEdit', 'Trabajo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Percepcin_0.set('fieldLabels', {'ObjectID': 'no label', 'Fecha': 'no label', 'Percepcion': 'no label', 'Otro': 'no label', 'Ocupacion': 'no label', 'Opinion': 'no label', 'Trabajo': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Percepcin_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});