define([
	"esri/tasks/query", "dojo/_base/declare", "esri/layers/FeatureLayer", "dojo/_base/lang", "dojo/on", "jquery", './jquery-ui-1.11.2/jquery-ui', './esriapi'
],
function ( Query, declare, FeatureLayer, lang, on, $, ui, esriapi ) {
        "use strict";

        return declare(null, {
			chosenListeners: function(t){
				// Enable jquery plugin 'chosen'
				require(["jquery", "plugins/coastline-change/js/chosen.jquery"],lang.hitch(this,function($) {
					var configCrs =  { '.chosen-islands' : {allow_single_deselect:true, width:"186px", disable_search:true}}
					for (var selector in configCrs)  { $(selector).chosen(configCrs[selector]); }
				}));
				// User selections on chosen menus 
				require(["jquery", "plugins/coastline-change/js/chosen.jquery"],lang.hitch(t,function($) {	
				t.esriapi = new esriapi();
					//Select CRS 
					$('#' + t.id + 'ch-ISL').chosen().change(lang.hitch(t,function(c, p){
						
						if(p){
							if(p.selected != 'EasternShore'){
								t.obj.islandText = c.target.value + " Island";
								if(t.obj.termSelected == 'long'){
									$('#' + t.id + 'chartTitle').text(t.obj.islandText + ' – Long Term Change')
								}
								if(t.obj.termSelected == 'short'){
									$('#' + t.id + 'chartTitle').text(t.obj.islandText + ' – Short Term Change')
								}
								t.obj.islSelected = c.currentTarget.value
								// create new query and and select features
								var q = new Query();
								q.where = "IslandName = '" + t.obj.islSelected + "'";
								t.islFeat.selectFeatures(q,FeatureLayer.SELECTION_NEW);
								if(t.obj.termSelected == "long" && t.obj.dataTypeButton == 'changeRate'){
									t.obj.visibleLayers = [0,4,6]
									t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
								}
								// check to see if in historical instead of change rate
								if(t.obj.dataTypeButton == 'historical'){
									t.obj.visibleLayers = [0];
									$('#' + t.id + 'ch-yearCheck .multiYears').each(lang.hitch(t,function(i, v){
										if(v.checked == true){
											var val = v.value;
											$.each(t.layersArray, lang.hitch(t,function(i,v){
												var layerName = v.name;
												if(layerName.split("_")[1] == val){
													t.yearLayerID = v.id;
													t.obj.visibleLayers.push(t.yearLayerID);
													t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
													t.obj.shorelineID = t.yearLayerID;
												}
											}));
											t.obj.visibleLayers = []
										}
									}));
									
								}
								t.obj.zoomedIn = "yes";
							}else{
								if(t.obj.termSelected == 'long'){
									$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Long Term Change')
								}
								if(t.obj.termSelected == 'short'){
									$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Short Term Change')
								}
								t.map.setExtent(t.obj.initialExtent, true);
								t.obj.zoomedIn = "no";
								t.esriapi.esriStartUp(t);
							}
							
							
							if(t.obj.trigger != 'mapClick'){
								var query = new esri.tasks.Query();
								query.where = "IslandName = '" + t.obj.islSelected + "'"
								t.islandPolygons_click.selectFeatures(query,esri.layers.FeatureLayer.SELECTION_NEW);
								t.obj.trigger = 'dropDown'
							}else{
								
							}
							
							
						}else{
							if(t.obj.dataTypeButton == 'changeRate'){
								if(t.obj.termSelected == "long"){
									//$('#' + t.id + 'longBtn').trigger('click')
									$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Long Term Change')
									t.obj.visibleLayers = [0,6]
									t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
								}
								if(t.obj.termSelected == "short"){
									//$('#' + t.id + 'shortBtn').trigger('click')
									$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Short Term Change')
								}
								t.esriapi.esriStartUp(t);
							}
							t.map.setExtent(t.obj.initialExtent, true);
							t.obj.zoomedIn = "no"
							
						}
					}));
				}));
			},
        });
    }
);