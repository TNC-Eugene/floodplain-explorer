define([
	"dojo/_base/declare", "dojo/dom-style", "dojo/_base/lang", "dojo/on", "jquery", './jquery-ui-1.11.2/jquery-ui', "esri/tasks/query","esri/tasks/QueryTask",'./esriapi'
],
function ( declare, domStyle, lang, on, $, ui, Query, QueryTask, esriapi) {
        "use strict";

        return declare(null, {

			navListeners: function(t){
				t.esriapi = new esriapi();
				$('#' + t.id + 'futureBtn').on('click', lang.hitch(t,function(){
					$('#' + t.id + 'futureBtn').addClass('navBtnSel');
					$('#' + t.id + 'historicalBtn').removeClass('navBtnSel');
					$('#' + t.id + 'historicalWrapper').slideUp();
					$('#' + t.id + 'futureWrapper').slideDown();
				}));
				$('#' + t.id + 'historicalBtn').on('click', lang.hitch(t,function(){
					$('#' + t.id + 'historicalBtn').addClass('navBtnSel');
					$('#' + t.id + 'futureBtn').removeClass('navBtnSel');
					$('#' + t.id + 'futureWrapper').slideUp();
					$('#' + t.id + 'historicalWrapper').slideDown();
					
				}));
				$('#' + t.id + 'longBtn').on('click', lang.hitch(t,function(){
					t.obj.termSelected = 'long';
					$('#' + t.id + 'longBtn').addClass('navBtnSel');
					$('#' + t.id + 'shortBtn').removeClass('navBtnSel');
					$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Long Term Change')
					if(t.obj.zoomedIn == 'yes'){
						var p = 'x';
						$('#' + t.id + 'ch-ISL').val(t.obj.IslandName).trigger('chosen:updated').trigger('change',p)
						t.obj.visibleLayers = [0,4,6]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}else{
						t.esriapi.esriStartUp(t);
						t.obj.visibleLayers = [0,6]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
				}));
				// short button click
				$('#' + t.id + 'shortBtn').on('click', lang.hitch(t,function(){
					t.obj.termSelected = 'short';
					$('#' + t.id + 'shortBtn').addClass('navBtnSel');
					$('#' + t.id + 'longBtn').removeClass('navBtnSel');
					$('#' + t.id + 'chartTitle').text('Virginia Eastern Shore – Short Term Change')

					if(t.obj.zoomedIn == 'yes'){
						var p = 'x';
						$('#' + t.id + 'ch-ISL').val(t.obj.IslandName).trigger('chosen:updated').trigger('change', p)
						t.obj.visibleLayers = [0,3,5]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);

					}else{
						t.esriapi.esriStartUp(t);
						t.obj.visibleLayers = [0,5]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
				}));
// SHORELINE CHECKBOXES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				$('#' + t.id + 'chRateBtn').on('click', lang.hitch(t,function(){
					clearInterval(t.setInt);
					t.obj.dataTypeButton = 'changeRate';
					$('#' + t.id + 'chRateBtn').addClass('navBtnSel');
					$('#' + t.id + 'hisShoreBtn').removeClass('navBtnSel');
					$('#' + t.id + 'multiShoreLine, #' + t.id + 'historicalShoreWrapper').slideUp();
					$('#' + t.id + 'chartWrapper, #' + t.id + 'termWrapper').slideDown();
					if(t.obj.termSelected == 'long'){
						t.obj.visibleLayers = [0,4,6];
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}else{
						t.obj.visibleLayers = [0,3,5];
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
				}));
				// Historical shorelines button click
				$('#' + t.id + 'hisShoreBtn').on('click', lang.hitch(t,function(){
					t.obj.dataTypeButton = 'historical';
					$('#' + t.id + 'hisShoreBtn').addClass('navBtnSel');
					$('#' + t.id + 'chRateBtn').removeClass('navBtnSel');
					$('#' + t.id + 'multiShoreLine, #' + t.id + 'historicalShoreWrapper').slideDown();
					$('#' + t.id + 'chartWrapper, #' + t.id + 'termWrapper').slideUp();

					// Get the number of possible values.
					 var vals = 13;
					 var labels = ['1850s','1910s','1940s', '1962', '1970s', '1985-6', '1994', '2002', '2004', '2006', '2009', '2011', '2013', '2014'];
					 for (var i = 0; i <= vals; i++) {
						var el = $('<label>'+(labels[i])+'</label>').css('left',(i/vals*100)+'%');
						$('#' + t.id + 'multiShoreSlider').append(el);
					  }
					$('#' + t.id + 'multiShoreSlider').on('slide', lang.hitch(this,function(v,evt){
						
						var val;
						if(t.sliderPlayBtn  != 'play' ){
							val  = labels[evt.value];
							t.obj.sliderCounter = evt.value
						}else{
							val =  labels[evt];
						}
						$.each(t.layersArray, lang.hitch(t,function(i,v){
							var layerName = v.name;
							if(layerName.split("_")[1] == val){
								t.yearLayerID = v.id;
								t.obj.visibleLayers = [t.yearLayerID];
								t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
								t.obj.shorelineID = t.yearLayerID;
							}
						}));
						t.obj.sliderYear = t.yearLayerID;
					}));
					if(t.obj.yearSliderMulti == 'slider'){
						t.obj.visibleLayers = [0,t.obj.sliderYear];
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
					if(t.obj.yearSliderMulti == 'multi'){
						t.obj.visibleLayers = [0, t.obj.checkYearArray]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
				}));
				
				
				// slider play button click
				$('#' + t.id + 'sliderPlay').on('click', lang.hitch(t,function(){
					t.sliderPlayBtn  = 'play' 
					t.setInt = setInterval(function(){
						$('#' + t.id + 'multiShoreSlider').slider('value',t.obj.sliderCounter);
						var x  = t.obj.sliderCounter;
						$('#' + t.id + 'multiShoreSlider').trigger('slide',x);
						t.obj.sliderCounter++
						if(t.obj.sliderCounter>14){
							t.obj.sliderCounter = 0
						}
						
					}, 500);
					// slider stop button click
					$('#' + t.id + 'sliderPause').on('click', lang.hitch(t,function(){
						t.sliderPlayBtn  = '';
						clearInterval(t.setInt);
						console.log('pause')
					}));
					// slider stop button click
					$('#' + t.id + 'sliderStop').on('click', lang.hitch(t,function(){
						clearInterval(t.setInt);
						$('#' + t.id + 'multiShoreSlider').slider('value',t.obj.sliderCounter);
						t.sliderPlayBtn  = '';
						t.obj.sliderCounter = 0;
					}));
					// slider back button click
					$('#' + t.id + 'sliderBack').on('click', lang.hitch(t,function(){
						clearInterval(t.setInt);
						if(t.obj.sliderCounter > 0 && t.obj.sliderCounter < 14){
							t.obj.sliderCounter = t.obj.sliderCounter -1
						}
						
						var x  = t.obj.sliderCounter;
						$('#' + t.id + 'multiShoreSlider').slider('value',t.obj.sliderCounter);
						$('#' + t.id + 'multiShoreSlider').trigger('slide',x);
					}));
					// slider fwd button click
					$('#' + t.id + 'sliderFwd').on('click', lang.hitch(t,function(){
						clearInterval(t.setInt);
						console.log(t.obj.sliderCounter);
						t.obj.sliderCounter = t.obj.sliderCounter + 1
						// if(t.obj.sliderCounter > 0 && t.obj.sliderCounter < 14){
							// t.obj.sliderCounter = t.obj.sliderCounter + 1
						// }
						
						var x  = t.obj.sliderCounter;
						$('#' + t.id + 'multiShoreSlider').slider('value',t.obj.sliderCounter);
						$('#' + t.id + 'multiShoreSlider').trigger('slide',x);
					}));
				}));
				
				// slider button click
				$('#' + t.id + 'sliderBtn').on('click', lang.hitch(t,function(){
					t.obj.yearSliderMulti = 'slider';
					$('#' + t.id + 'sliderBtn').addClass('navBtnSel');
					$('#' + t.id + 'multiBtn').removeClass('navBtnSel');
					$('#' + t.id + 'multiShoreCheck').slideUp();
					$('#' + t.id + 'singleShore').slideDown();
					
					t.obj.visibleLayers = [0,t.obj.sliderYear];
					t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					
				}));
				
				// multi button click
				$('#' + t.id + 'multiBtn').on('click', lang.hitch(t,function(){
					clearInterval(t.setInt);
					$('#' + t.id + 'multiShoreSlider').slider('value',t.obj.sliderCounter);
					t.sliderPlayBtn  = '';
					t.obj.sliderCounter = 0;
					t.obj.yearSliderMulti = 'multi';
					var checkedArray = [];
					$('#' + t.id + 'ch-yearCheck .multiYears').each(lang.hitch(t,function(i, v){
						if(v.checked == true){
							checkedArray.push(v.value);
						}else{
							$.each(checkedArray, lang.hitch(t,function(i,v){
								var index = checkedArray.indexOf(v.value);
								if(index > -1){
									checkedArray.splice(index, 1);
								}
							}));
						}
						$(t.layersArray).each(lang.hitch(t,function(i,v){
							var name = v.name.split('_');
						}));
					}));
					if(checkedArray.length == 1){
						$.each(t.layersArray, lang.hitch(t,function(i,v){
							var name = v.name.split('_')[1]
							if(v.id == t.obj.sliderYear){
								$('#' + t.id + 'ch-'+name).prop('checked', true);
							}else{
								$('#' + t.id + 'ch-'+name).prop('checked', false);
							}
						}));
						t.obj.visibleLayers = [0,t.obj.sliderYear]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}else{
						// Set layers for multi click
						t.obj.visibleLayers = [0, t.obj.checkYearArray]
						t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
					}
					$('#' + t.id + 'sliderBtn').removeClass('navBtnSel');
					$('#' + t.id + 'multiBtn').addClass('navBtnSel');
					$('#' + t.id + 'multiShoreCheck').slideDown();
					$('#' + t.id + 'singleShore').slideUp();
				}));

// HANDLE INDIVIDUAL SHORELINE CHECKBOX CLICKS AND CHECK ALL YEAR SHORELINES///////////////////////////////////////////////////////////////////////////////////
				$('#' + t.id + 'ch-yearCheck .yearShoreLine').on('click',lang.hitch(this,function(v){
					var f = $( '#' + t.id+ 'ch-yearCheck input[type="checkbox"]' );

					var val = v.target.value;
					$.each(t.layersArray, lang.hitch(t,function(i,v){
						var layerName = v.name;
						if(layerName.split("_")[1] == val){
							t.yearLayerID = v.id;
						}
					}));
					$('#' + t.id + 'ch-yearCheck .multiYears').each(lang.hitch(t,function(i, v){
						var val = v.value;
						$.each(t.layersArray, lang.hitch(t,function(i,v){
							var layerName = v.name;
							if(layerName.split("_")[1] == val){
								t.yearLayerID = v.id;
							}
						}));
						if(v.checked == true){
							t.obj.checkYearArray.push(t.yearLayerID)
						}
						if(v.checked == false){
							$.each(t.obj.checkYearArray, lang.hitch(t,function(i,v){
								var index = t.obj.checkYearArray.indexOf(t.yearLayerID);
								if(index > -1){
									t.obj.checkYearArray.splice(index, 1);
								}
							}));
						}
					}));
					t.obj.visibleLayers = [0];
					t.obj.visibleLayers.push(t.obj.checkYearArray);
					t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
				}));
// FUTURE NAV SECTION //////////////////////////////////////////////////////////////////////////////////////////////
				// sea level slider
				 var vals = 2;
				 var labels = ['Low','High','Highest'];
				 for (var i = 0; i <= vals; i++) {
					var el = $('<label>'+(labels[i])+'</label>').css('left',(i/vals*100)+'%');
					$('#' + t.id + 'seaLevelSlider').append(el);
				  }
				$('#' + t.id + 'seaLevelSlider').on('slide', lang.hitch(this,function(v,evt){
					console.log(v,evt)
					
				}));
				
				// Wave Slider
				 var vals = 2;
				 var labels = ['None','Greater NE','Lesser NE'];
				 for (var i = 0; i <= vals; i++) {
					var el = $('<label>'+(labels[i])+'</label>').css('left',(i/vals*100)+'%');
					$('#' + t.id + 'waveSlider').append(el);
				  }
				$('#' + t.id + 'waveSlider').on('slide', lang.hitch(this,function(v,evt){
					console.log(v,evt)
					
				}));
				// Nourishment Slider
				 var vals = 3;
				 var labels = ['None','Wallops','Assateague', 'Both Sites'];
				 for (var i = 0; i <= vals; i++) {
					var el = $('<label>'+(labels[i])+'</label>').css('left',(i/vals*100)+'%');
					$('#' + t.id + 'nourSlider').append(el);
				  }
				$('#' + t.id + 'nourSlider').on('slide', lang.hitch(this,function(v,evt){
					console.log(v,evt)
					
				}));
				
			
			},
			
			
			clearFuture: function(t){
				t.fPinFL.clear();
				t.fManyPinFL.clear();
				$('#' + t.id + 'ch-FUT').val('').trigger('chosen:updated');
				$('#' + t.id + 'ch-FUT').trigger('change');
				$('#' + t.id + 'futureGraph').css('display', 'none');
				$('#' + t.id + 'pinSearch').val('');
				t.obj.searchedPin = '';
				$('#' + t.id + 'parcelInfo, #' + t.id + 'fParSelWrapper, #' + t.id + 'searchPinNone').slideUp();
				$('#' + t.id + 'futureWrapper').slideUp();
			}
        });
    }
);