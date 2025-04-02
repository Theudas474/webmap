var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ArrondissementsdelacommunedAbomey_1 = new ol.format.GeoJSON();
var features_ArrondissementsdelacommunedAbomey_1 = format_ArrondissementsdelacommunedAbomey_1.readFeatures(json_ArrondissementsdelacommunedAbomey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArrondissementsdelacommunedAbomey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArrondissementsdelacommunedAbomey_1.addFeatures(features_ArrondissementsdelacommunedAbomey_1);
var lyr_ArrondissementsdelacommunedAbomey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArrondissementsdelacommunedAbomey_1, 
                style: style_ArrondissementsdelacommunedAbomey_1,
                popuplayertitle: 'Arrondissements de la commune d\'Abomey',
                interactive: true,
                title: '<img src="styles/legend/ArrondissementsdelacommunedAbomey_1.png" /> Arrondissements de la commune d\'Abomey'
            });
var format_Ecole_Abomey_2 = new ol.format.GeoJSON();
var features_Ecole_Abomey_2 = format_Ecole_Abomey_2.readFeatures(json_Ecole_Abomey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecole_Abomey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecole_Abomey_2.addFeatures(features_Ecole_Abomey_2);
cluster_Ecole_Abomey_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Ecole_Abomey_2
});
var lyr_Ecole_Abomey_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ecole_Abomey_2, 
                style: style_Ecole_Abomey_2,
                popuplayertitle: 'Ecole_Abomey',
                interactive: true,
    title: 'Ecole_Abomey<br />\
    <img src="styles/legend/Ecole_Abomey_2_0.png" /> Maternelle<br />\
    <img src="styles/legend/Ecole_Abomey_2_1.png" /> Maternelle et Primaire<br />\
    <img src="styles/legend/Ecole_Abomey_2_2.png" /> Primaire<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_ArrondissementsdelacommunedAbomey_1.setVisible(true);lyr_Ecole_Abomey_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ArrondissementsdelacommunedAbomey_1,lyr_Ecole_Abomey_2];
lyr_ArrondissementsdelacommunedAbomey_1.set('fieldAliases', {'fid': 'fid', 'ARRONDISSEMENT': 'ARRONDISSEMENT', 'Population': 'Population', 'Superficie(Km2)': 'Superficie(Km2)', });
lyr_Ecole_Abomey_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Statut': 'Statut', 'Heure de service': 'Heure de service', 'Langues apprises': 'Langues apprises', 'Nom_etu': 'Nom_etu', 'Latitude (Y)': 'Latitude (Y)', 'Longitude (X)': 'Longitude (X)', 'Photo': 'Photo', 'Cantine scolaire d\'Etat': 'Cantine scolaire d\'Etat', 'Type': 'Type', 'Suffisance de salles': 'Suffisance de salles', 'Nombre d\'enseignant suffisant': 'Nombre d\'enseignant suffisant', 'Présence d\'arbre dans la cour': 'Présence d\'arbre dans la cour', 'Remarques': 'Remarques', 'Dernière mise à jour': 'Dernière mise à jour', });
lyr_ArrondissementsdelacommunedAbomey_1.set('fieldImages', {'fid': 'TextEdit', 'ARRONDISSEMENT': 'TextEdit', 'Population': 'Range', 'Superficie(Km2)': 'TextEdit', });
lyr_Ecole_Abomey_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Statut': 'TextEdit', 'Heure de service': 'TextEdit', 'Langues apprises': 'TextEdit', 'Nom_etu': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Photo': 'ExternalResource', 'Cantine scolaire d\'Etat': 'TextEdit', 'Type': 'TextEdit', 'Suffisance de salles': 'TextEdit', 'Nombre d\'enseignant suffisant': 'TextEdit', 'Présence d\'arbre dans la cour': 'TextEdit', 'Remarques': 'TextEdit', 'Dernière mise à jour': 'DateTime', });
lyr_ArrondissementsdelacommunedAbomey_1.set('fieldLabels', {'fid': 'hidden field', 'ARRONDISSEMENT': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Superficie(Km2)': 'inline label - visible with data', });
lyr_Ecole_Abomey_2.set('fieldLabels', {'fid': 'hidden field', 'Nom': 'inline label - visible with data', 'Statut': 'inline label - visible with data', 'Heure de service': 'inline label - visible with data', 'Langues apprises': 'inline label - visible with data', 'Nom_etu': 'inline label - visible with data', 'Latitude (Y)': 'inline label - visible with data', 'Longitude (X)': 'inline label - visible with data', 'Photo': 'inline label - visible with data', 'Cantine scolaire d\'Etat': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Suffisance de salles': 'inline label - visible with data', 'Nombre d\'enseignant suffisant': 'inline label - visible with data', 'Présence d\'arbre dans la cour': 'inline label - visible with data', 'Remarques': 'inline label - visible with data', 'Dernière mise à jour': 'inline label - visible with data', });
lyr_Ecole_Abomey_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});