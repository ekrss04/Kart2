var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_lab1building_3 = new ol.format.GeoJSON();
var features_lab1building_3 = format_lab1building_3.readFeatures(json_lab1building_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1building_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1building_3.addFeatures(features_lab1building_3);
var lyr_lab1building_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1building_3, 
                style: style_lab1building_3,
                popuplayertitle: 'lab 1 — building',
                interactive: true,
                title: '<img src="styles/legend/lab1building_3.png" /> lab 1 — building'
            });
var format_lab1_4 = new ol.format.GeoJSON();
var features_lab1_4 = format_lab1_4.readFeatures(json_lab1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_4.addFeatures(features_lab1_4);
var lyr_lab1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_4, 
                style: style_lab1_4,
                popuplayertitle: 'lab 1 — Дороги',
                interactive: true,
                title: '<img src="styles/legend/lab1_4.png" /> lab 1 — Дороги'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_lab1building_3.setVisible(true);lyr_lab1_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_lab1building_3,lyr_lab1_4];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab1building_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'power': 'power', 'amenity': 'amenity', 'name': 'name', 'addr:province': 'addr:province', 'addr:postcode': 'addr:postcode', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'Address': 'Address', });
lyr_lab1_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ref': 'ref', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'maxspeed': 'maxspeed', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_lab1building_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'power': '', 'amenity': '', 'name': '', 'addr:province': '', 'addr:postcode': '', 'addr:district': '', 'addr:country': '', 'addr:city': '', 'building:levels': '', 'addr:street': '', 'addr:housenumber': '', 'Address': '', });
lyr_lab1_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1building_3.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'power': 'no label', 'amenity': 'no label', 'name': 'no label', 'addr:province': 'no label', 'addr:postcode': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'Address': 'inline label - always visible', });
lyr_lab1_4.set('fieldLabels', {'fid': 'inline label - always visible', 'full_id': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'osm_type': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'surface': 'inline label - always visible', 'oneway': 'inline label - always visible', 'name': 'no label', 'maxspeed': 'inline label - always visible', });
lyr_lab1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});