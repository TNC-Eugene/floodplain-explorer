define([
	"esri/tasks/query", "dojo/_base/declare", "esri/layers/FeatureLayer", "dojo/_base/lang", "dojo/on", "jquery", './jquery-ui-1.11.2/jquery-ui', './esriapi'
],
function ( Query, declare, FeatureLayer, lang, on, $, ui, esriapi ) {
        "use strict";

        return declare(null, {
			chosenListeners: function(t){
				require(["jquery", "plugins/umr-floodplain/js/chosen.jquery"],lang.hitch(t,function($) {
					var configCrs =  { '.chosen-sym' : {allow_single_deselect:false, width:"224px", disable_search:true}}
					for (var selector in configCrs)  { $(selector).chosen(configCrs[selector]); }
					//Change listener for Symbolize By select
					$('#' + t.id + 'ch-symbolize').chosen().change(lang.hitch(t,function(c, p){
						t.obj.vsym = c.currentTarget.value;
						// The layer name from the map service
						var lyrName = t.obj.vyear + ' - ' + t.obj.vhuc + ' - ' + t.obj.vsym;						
						// Loop through map service layer infos. If lyrName matches map service layer name, turn it on. 
						$.each(t.layersArray, lang.hitch(t,function(i,v){
							if (v.name == lyrName){
								t.obj.visibleLayers = [v.id];
								t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
							}	
						}));
					}));
				}));
				// Event listener for every navBtn class in main wrapper
				$('#' + t.id + 'mainWrap .navBtn').on('click', lang.hitch(t,function(c){
					// Does the selected button already have the navBtnSel class?
					var navSel = 'no';
					$.each(c.currentTarget.classList, lang.hitch(t,function(i, v){
						if (v == 'navBtnSel'){
							navSel = 'yes';
						}	
					}));	
					// If it does, do nothing. Otherwise remove the class from it and it's siblings
					if (navSel == 'no'){
						// Go to parent of selected button, find all elements with class navBtn, and remove navBtnSel from each one
						$.each($('#' + c.currentTarget.id).parent().find('.navBtn'), lang.hitch(t,function(i, x){
							$('#' + x.id).removeClass('navBtnSel');
						}))
						// Add navBtnSel class to selected button
						$('#' + c.currentTarget.id).addClass('navBtnSel');
						// Remove everything to the left of the first "-" in the selected buttons id  
						var lngid = c.currentTarget.id.split("-").pop()
						var nm = lngid.split('_').join(' ');
						// Add conditional logic based on id of parent div
						if ($('#' + c.currentTarget.id).parent().prop('id') == t.id + "hucWrap"){
							t.obj.vhuc = nm;
						}
						if ($('#' + c.currentTarget.id).parent().prop('id') == t.id + "yearWrap"){
							t.obj.vyear = nm;
						}
						// The layer name from the map service
						var lyrName = t.obj.vyear + ' - ' + t.obj.vhuc + ' - ' + t.obj.vsym						
						// Loop through map service layer infos. If lyrName matches map service layer name, turn it on. 
						$.each(t.layersArray, lang.hitch(t,function(i,v){
							if (v.name == lyrName){
								t.obj.visibleLayers = [v.id];
								t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
							}	
						}));
					}
				}));
								
			},
        });
    }
);