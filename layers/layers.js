var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SectArrdt12Zone_1 = new ol.format.GeoJSON();
var features_SectArrdt12Zone_1 = format_SectArrdt12Zone_1.readFeatures(json_SectArrdt12Zone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectArrdt12Zone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectArrdt12Zone_1.addFeatures(features_SectArrdt12Zone_1);
var lyr_SectArrdt12Zone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectArrdt12Zone_1, 
                style: style_SectArrdt12Zone_1,
                popuplayertitle: 'Sect-Arrdt12-Zone',
                interactive: true,
                title: '<img src="styles/legend/SectArrdt12Zone_1.png" /> Sect-Arrdt12-Zone'
            });
var format_ArrdtEnsmbleZone_2 = new ol.format.GeoJSON();
var features_ArrdtEnsmbleZone_2 = format_ArrdtEnsmbleZone_2.readFeatures(json_ArrdtEnsmbleZone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArrdtEnsmbleZone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArrdtEnsmbleZone_2.addFeatures(features_ArrdtEnsmbleZone_2);
var lyr_ArrdtEnsmbleZone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArrdtEnsmbleZone_2, 
                style: style_ArrdtEnsmbleZone_2,
                popuplayertitle: 'Arrdt-Ensmble-Zone',
                interactive: true,
                title: '<img src="styles/legend/ArrdtEnsmbleZone_2.png" /> Arrdt-Ensmble-Zone'
            });
var format_St_3 = new ol.format.GeoJSON();
var features_St_3 = format_St_3.readFeatures(json_St_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_St_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_St_3.addFeatures(features_St_3);
var lyr_St_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_St_3, 
                style: style_St_3,
                popuplayertitle: 'Sté',
                interactive: true,
    title: 'Sté<br />\
    <img src="styles/legend/St_3_0.png" /> Dispensaire<br />\
    <img src="styles/legend/St_3_1.png" /> Cabinet de soins infirmiers<br />\
    <img src="styles/legend/St_3_2.png" /> Clinique<br />\
    <img src="styles/legend/St_3_3.png" /> CSPS<br />\
    <img src="styles/legend/St_3_4.png" /> Centre Médical<br />' });
var format_Officine_4 = new ol.format.GeoJSON();
var features_Officine_4 = format_Officine_4.readFeatures(json_Officine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Officine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Officine_4.addFeatures(features_Officine_4);
var lyr_Officine_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Officine_4, 
                style: style_Officine_4,
                popuplayertitle: 'Officine',
                interactive: true,
                title: '<img src="styles/legend/Officine_4.png" /> Officine'
            });
var group_SUPERIEURETFORMATION = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SUPERIEUR ET FORMATION'});
var group_PRESCOLAIREETPRIMAIREPUBLIQUE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRESCOLAIRE ET PRIMAIRE PUBLIQUE'});
var group_CEG = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CEG'});
var group_SANTE = new ol.layer.Group({
                                layers: [lyr_St_3,lyr_Officine_4,],
                                fold: 'close',
                                title: 'SANTE'});
var group_LIMITES_ADMINISTRATIVES = new ol.layer.Group({
                                layers: [lyr_SectArrdt12Zone_1,lyr_ArrdtEnsmbleZone_2,],
                                fold: 'open',
                                title: 'LIMITES_ADMINISTRATIVES'});

lyr_OSMStandard_0.setVisible(true);lyr_SectArrdt12Zone_1.setVisible(true);lyr_ArrdtEnsmbleZone_2.setVisible(true);lyr_St_3.setVisible(true);lyr_Officine_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_LIMITES_ADMINISTRATIVES,group_SANTE];
lyr_SectArrdt12Zone_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Numéro_du': 'Numéro_du', 'SUP': 'SUP', 'DENSITÉ': 'DENSITÉ', });
lyr_ArrdtEnsmbleZone_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code_de_la': 'Code_de_la', 'Numéro_de': 'Numéro_de', 'Nom_de_la_': 'Nom_de_la_', 'Population': 'Population', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_St_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TOPONYME': 'TOPONYME', 'NATURE': 'NATURE', 'Secteur': 'Secteur', 'Arrondisse': 'Arrondisse', 'Statut': 'Statut', });
lyr_Officine_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TOPONYME': 'TOPONYME', 'NATURE': 'NATURE', 'Secteur': 'Secteur', 'Arrondisse': 'Arrondisse', 'Statut': 'Statut', });
lyr_SectArrdt12Zone_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Numéro_du': 'TextEdit', 'SUP': 'TextEdit', 'DENSITÉ': 'TextEdit', });
lyr_ArrdtEnsmbleZone_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Code_de_la': 'TextEdit', 'Numéro_de': 'TextEdit', 'Nom_de_la_': 'TextEdit', 'Population': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_St_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'TOPONYME': 'TextEdit', 'NATURE': 'TextEdit', 'Secteur': 'TextEdit', 'Arrondisse': 'TextEdit', 'Statut': 'TextEdit', });
lyr_Officine_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'TOPONYME': 'TextEdit', 'NATURE': 'TextEdit', 'Secteur': 'TextEdit', 'Arrondisse': 'TextEdit', 'Statut': 'TextEdit', });
lyr_SectArrdt12Zone_1.set('fieldLabels', {'OBJECTID': 'no label', 'Numéro_du': 'no label', 'SUP': 'no label', 'DENSITÉ': 'no label', });
lyr_ArrdtEnsmbleZone_2.set('fieldLabels', {'OBJECTID': 'no label', 'Code_de_la': 'no label', 'Numéro_de': 'no label', 'Nom_de_la_': 'no label', 'Population': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_St_3.set('fieldLabels', {'OBJECTID': 'no label', 'TOPONYME': 'no label', 'NATURE': 'no label', 'Secteur': 'no label', 'Arrondisse': 'no label', 'Statut': 'no label', });
lyr_Officine_4.set('fieldLabels', {'OBJECTID': 'no label', 'TOPONYME': 'no label', 'NATURE': 'no label', 'Secteur': 'no label', 'Arrondisse': 'no label', 'Statut': 'no label', });
lyr_Officine_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});