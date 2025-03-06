ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1375380.930053, 7478383.744193, 1397763.719624, 7495788.046385]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_lokalplan_vedtaget_1 = new ol.format.GeoJSON();
var features_lokalplan_vedtaget_1 = format_lokalplan_vedtaget_1.readFeatures(json_lokalplan_vedtaget_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplan_vedtaget_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplan_vedtaget_1.addFeatures(features_lokalplan_vedtaget_1);
var lyr_lokalplan_vedtaget_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplan_vedtaget_1, 
                style: style_lokalplan_vedtaget_1,
                popuplayertitle: 'lokalplan_vedtaget',
                interactive: false,
    title: 'lokalplan_vedtaget<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_0.png" /> 1024399<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_1.png" /> 1053515<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_2.png" /> 1061002<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_3.png" /> 1061022<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_4.png" /> 1061038<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_5.png" /> 1061103<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_6.png" /> 1061140<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_7.png" /> 1061206<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_8.png" /> 1061209<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_9.png" /> 1061210<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_10.png" /> 1061715<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_11.png" /> 1061734<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_12.png" /> 1061739<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_13.png" /> 1061746<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_14.png" /> 1061756<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_15.png" /> 1061757<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_16.png" /> 1061824<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_17.png" /> 1061829<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_18.png" /> 1062026<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_19.png" /> 1062121<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_20.png" /> 1070479<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_21.png" /> 1071381<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_22.png" /> 1074662<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_23.png" /> 1074664<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_24.png" /> 1074675<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_25.png" /> 1075214<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_26.png" /> 1075219<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_27.png" /> 1075387<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_28.png" /> 1075393<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_29.png" /> 1075552<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_30.png" /> 1075553<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_31.png" /> 1075577<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_32.png" /> 1075593<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_33.png" /> 1075598<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_34.png" /> 1075609<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_35.png" /> 1075669<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_36.png" /> 1075682<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_37.png" /> 1075695<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_38.png" /> 1075708<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_39.png" /> 1075710<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_40.png" /> 1075718<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_41.png" /> 1075751<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_42.png" /> 1075752<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_43.png" /> 1075779<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_44.png" /> 1075795<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_45.png" /> 1075800<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_46.png" /> 1075801<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_47.png" /> 1075815<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_48.png" /> 1075877<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_49.png" /> 1075893<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_50.png" /> 1075897<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_51.png" /> 1075900<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_52.png" /> 1075902<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_53.png" /> 1075905<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_54.png" /> 1075907<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_55.png" /> 1075908<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_56.png" /> 1076004<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_57.png" /> 1076010<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_58.png" /> 1076019<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_59.png" /> 1076041<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_60.png" /> 1076064<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_61.png" /> 1076086<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_62.png" /> 1076094<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_63.png" /> 1076107<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_64.png" /> 1076114<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_65.png" /> 1076115<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_66.png" /> 1076126<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_67.png" /> 1076129<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_68.png" /> 1076287<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_69.png" /> 1076379<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_70.png" /> 1076865<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_71.png" /> 1076868<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_72.png" /> 1076874<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_73.png" /> 1076892<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_74.png" /> 1076902<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_75.png" /> 1076939<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_76.png" /> 1076961<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_77.png" /> 1076968<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_78.png" /> 1077070<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_79.png" /> 1077082<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_80.png" /> 1077085<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_81.png" /> 1077086<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_82.png" /> 1077558<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_83.png" /> 1077565<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_84.png" /> 1078074<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_85.png" /> 1078075<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_86.png" /> 1078077<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_87.png" /> 1078184<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_88.png" /> 1078227<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_89.png" /> 1078229<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_90.png" /> 1078231<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_91.png" /> 1078248<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_92.png" /> 1078275<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_93.png" /> 1078279<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_94.png" /> 1078289<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_95.png" /> 1078346<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_96.png" /> 1078464<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_97.png" /> 1078465<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_98.png" /> 1078468<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_99.png" /> 1079122<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_100.png" /> 1079123<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_101.png" /> 1079666<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_102.png" /> 1079671<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_103.png" /> 1081381<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_104.png" /> 1084485<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_105.png" /> 1084491<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_106.png" /> 1084492<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_107.png" /> 1103890<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_108.png" /> 1109560<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_109.png" /> 1328884<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_110.png" /> 1359145<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_111.png" /> 1369547<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_112.png" /> 1374739<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_113.png" /> 1792902<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_114.png" /> 1869505<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_115.png" /> 2136388<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_116.png" /> 2186492<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_117.png" /> 2269185<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_118.png" /> 2641209<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_119.png" /> 2702963<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_120.png" /> 2702964<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_121.png" /> 2702965<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_122.png" /> 2702968<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_123.png" /> 2702969<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_124.png" /> 2702993<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_125.png" /> 2978253<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_126.png" /> 3016098<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_127.png" /> 3016099<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_128.png" /> 3016105<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_129.png" /> 3186913<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_130.png" /> 3188617<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_131.png" /> 3188619<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_132.png" /> 3812280<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_133.png" /> 3964626<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_134.png" /> 3964627<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_135.png" /> 3964812<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_136.png" /> 9419556<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_137.png" /> 9431987<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_138.png" /> 9431989<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_139.png" /> 9431990<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_140.png" /> 9431991<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_141.png" /> 9431992<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_142.png" /> 9431993<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_143.png" /> 9431994<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_144.png" /> 9690454<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_145.png" /> 9717080<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_146.png" /> 9731022<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_147.png" /> 9732835<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_148.png" /> 9732862<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_149.png" /> 9753254<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_150.png" /> 10353005<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_151.png" /> 10456675<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_152.png" /> 10478656<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_153.png" /> 10840028<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_154.png" /> 10900534<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_155.png" /> 10906517<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_156.png" /> 10985743<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_157.png" /> 11021467<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_158.png" /> 11126774<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_159.png" /> 11159816<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_160.png" /> 11176926<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_161.png" /> 11185105<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_162.png" /> 11198619<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_163.png" /> 11228193<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_164.png" /> 11240317<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_165.png" /> 11252419<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_166.png" /> 11307736<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_167.png" /> 11307768<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_168.png" /> 11317442<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_169.png" /> 11347122<br />\
    <img src="styles/legend/lokalplan_vedtaget_1_170.png" /> <br />' });
var format_strandbeskyttelsehvidore_2 = new ol.format.GeoJSON();
var features_strandbeskyttelsehvidore_2 = format_strandbeskyttelsehvidore_2.readFeatures(json_strandbeskyttelsehvidore_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttelsehvidore_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttelsehvidore_2.addFeatures(features_strandbeskyttelsehvidore_2);
var lyr_strandbeskyttelsehvidore_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttelsehvidore_2, 
                style: style_strandbeskyttelsehvidore_2,
                popuplayertitle: 'strandbeskyttelse hvidore',
                interactive: true,
                title: '<img src="styles/legend/strandbeskyttelsehvidore_2.png" /> strandbeskyttelse hvidore'
            });
var format_kommuneplan_3 = new ol.format.GeoJSON();
var features_kommuneplan_3 = format_kommuneplan_3.readFeatures(json_kommuneplan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_3.addFeatures(features_kommuneplan_3);
var lyr_kommuneplan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_3, 
                style: style_kommuneplan_3,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_3.png" /> kommuneplan'
            });
var format_frededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrder_4 = format_frededeomrder_4.readFeatures(json_frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_4.addFeatures(features_frededeomrder_4);
var lyr_frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_4, 
                style: style_frededeomrder_4,
                popuplayertitle: 'frededeområder',
                interactive: false,
                title: '<img src="styles/legend/frededeomrder_4.png" /> frededeområder'
            });
var format_togstationer_5 = new ol.format.GeoJSON();
var features_togstationer_5 = format_togstationer_5.readFeatures(json_togstationer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togstationer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togstationer_5.addFeatures(features_togstationer_5);
var lyr_togstationer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togstationer_5, 
                style: style_togstationer_5,
                popuplayertitle: 'togstationer',
                interactive: true,
                title: '<img src="styles/legend/togstationer_5.png" /> togstationer'
            });
var format_folkeskoler_6 = new ol.format.GeoJSON();
var features_folkeskoler_6 = format_folkeskoler_6.readFeatures(json_folkeskoler_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_6.addFeatures(features_folkeskoler_6);
var lyr_folkeskoler_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_6, 
                style: style_folkeskoler_6,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_6.png" /> folkeskoler'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_lokalplan_vedtaget_1.setVisible(true);lyr_strandbeskyttelsehvidore_2.setVisible(true);lyr_kommuneplan_3.setVisible(true);lyr_frededeomrder_4.setVisible(true);lyr_togstationer_5.setVisible(true);lyr_folkeskoler_6.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_lokalplan_vedtaget_1,lyr_strandbeskyttelsehvidore_2,lyr_kommuneplan_3,lyr_frededeomrder_4,lyr_togstationer_5,lyr_folkeskoler_6];
lyr_lokalplan_vedtaget_1.set('fieldAliases', {'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_strandbeskyttelsehvidore_2.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_kommuneplan_3.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_togstationer_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_folkeskoler_6.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_lokalplan_vedtaget_1.set('fieldImages', {'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_strandbeskyttelsehvidore_2.set('fieldImages', {'fid': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senesteSagLokalId': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalId': 'TextEdit', 'paataenktHandling': 'TextEdit', 'registreringFra': 'DateTime', 'virkningFra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temaFladeID': 'Range', 'tematype': 'TextEdit', 'jordstykkeLokalId': 'TextEdit', });
lyr_kommuneplan_3.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_togstationer_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_folkeskoler_6.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_lokalplan_vedtaget_1.set('fieldLabels', {'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_strandbeskyttelsehvidore_2.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_kommuneplan_3.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_togstationer_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_folkeskoler_6.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_folkeskoler_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});