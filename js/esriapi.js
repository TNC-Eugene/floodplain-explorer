define([
	"esri/layers/ArcGISDynamicMapServiceLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/tasks/query","esri/tasks/QueryTask", "dojo/_base/declare", "esri/layers/FeatureLayer", 
	"esri/symbols/SimpleLineSymbol", "esri/symbols/SimpleFillSymbol", "esri/graphic", "dojo/_base/Color", "dojo/_base/lang", "dojo/on", "jquery", './jquery-ui-1.11.2/jquery-ui'
],
function ( 	ArcGISDynamicMapServiceLayer, Extent, SpatialReference, Query, QueryTask, declare, FeatureLayer, 
			SimpleLineSymbol, SimpleFillSymbol, Graphic, Color, lang, on, $, ui) {
        "use strict";

        return declare(null, {
			esriApiFunctions: function(t){
								
				// Add dynamic map service
				t.dynamicLayer = new ArcGISDynamicMapServiceLayer(t.url);
				t.map.addLayer(t.dynamicLayer);
				t.dynamicLayer.on("load", lang.hitch(t, function () { 			
					if (t.obj.visibleLayers.length > 0){	
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
					t.layersArray = t.dynamicLayer.layerInfos;
					t.map.setExtent(t.dynamicLayer.initialExtent, true); 
				}));
			},
			updateFeatureLayer: function(t){
				t.map.on("mouse-over", lang.hitch(t, function(event) {
					t.map.setMapCursor("pointer");
				}));
				var selSymbol = new SimpleFillSymbol( SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(
					SimpleLineSymbol.STYLE_SOLID, new Color([0,0,255]), 1.5 ), new Color([0,0,0,0])
				);
				t.fpFL = new FeatureLayer(t.url + "/" + t.obj.flid, { mode: FeatureLayer.MODE_SELECTION, outFields: ["*"] });
				t.fpFL.setSelectionSymbol(selSymbol);
				t.fpFL.on('selection-complete', lang.hitch(t,function(f){
					if (f.features.length > 0){
						var att = f.features[0].attributes;
						$('#' + t.appDiv.id + 'attWrap .attValues').each(lang.hitch(t,function(i,v){
							var field = v.id.split("-").pop()
							var val = att[field];
							if ( isNaN(att[field]) == false ){
								val = Math.round(val);
								val = t.esriapi.commaSeparateNumber(val);	
							}	
							$('#' + v.id).html(val);
							$('#' + t.appDiv.id + 'attWrap').slideDown();
						}));
					}	
				}));
				t.map.addLayer(t.fpFL);
				t.map.on("click", lang.hitch(t, function(event) {
					var pnt = event.mapPoint;
					var q = new Query();
					q.geometry = pnt;
					t.fpFL.selectFeatures(q,esri.layers.FeatureLayer.SELECTION_NEW);
				}));	
			},
			commaSeparateNumber: function(val){
				while (/(\d+)(\d{3})/.test(val.toString())){
					val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
				}
				return val;
			}
		});
    }
);