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
            });

lyr_PercepcindelapoblacinantelapandemiaCovid19_0.setVisible(true);
var layersList = [baseLayer,lyr_PercepcindelapoblacinantelapandemiaCovid19_0];
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldAliases', {'ObjectID': 'ObjectID', 'Fecha': 'Fecha', 'Percepcion': 'Percepcion', 'Otro': 'Otro', 'Ocupacion': 'Ocupacion', 'Opinion': 'Opinion', 'Trabajo': 'Trabajo', 'x': 'x', 'y': 'y', });
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldImages', {'ObjectID': 'TextEdit', 'Fecha': 'TextEdit', 'Percepcion': 'TextEdit', 'Otro': 'TextEdit', 'Ocupacion': 'TextEdit', 'Opinion': 'TextEdit', 'Trabajo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.set('fieldLabels', {'ObjectID': 'no label', 'Fecha': 'no label', 'Percepcion': 'no label', 'Otro': 'no label', 'Ocupacion': 'no label', 'Opinion': 'no label', 'Trabajo': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_PercepcindelapoblacinantelapandemiaCovid19_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});