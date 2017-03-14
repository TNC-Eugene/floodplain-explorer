define([
	"dojo/_base/declare", "esri/tasks/query", "esri/tasks/QueryTask"
],
function ( declare, Query, QueryTask ) {
        "use strict";

        return declare(null, {
			eventListeners: function(t){
				var clickCnt = 0;
				// Flood frequency, HUC, and Management Action clicks
				$('#' + t.id + 'top-controls input').on('click',function(c){
					// Update json object
					var rname = $('#' + c.target.id).attr("name")
					var val = c.target.value;
					t.obj[rname] = val;
					// Flood Frequency
					if (rname == "floodFreq"){
						t.ffDef = "( FloodFrequency = '" + val + "' )";
					}
					// HUCs
					if (rname == "huc"){
						var h = val.split(" ").pop();
						$('.h10, .h12').hide();
						$('.h' + h).show();
						$.each(t.layersArray, function(i,v){
							if (v.name == val){
								t.obj.hucLayer = v.id;
								t.obj.hucLayerSel = (v.id - 1)
								t.obj.visibleLayers = [t.obj.hucLayerSel, t.obj.hucLayer];
								t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
							}
						})
					}
					// Management Action
					if (rname == "mngmtAction"){
						$('.mng-act-wrap').slideUp(500,function(){
							$('.mng-act-toggle').hide();
							$('.' + c.target.value).show()
							$('.mng-act-wrap').slideDown(500);	
						});
					}
					if (clickCnt < 2){
						clickCnt = clickCnt + 1
					}else{
						// get visible slider values regardless of button clicked
						$.each($('#' + t.id + 'mng-act-wrap .slider'),function(i,v){
							var idArray = v.id.split("-")
							var h = t.obj.huc.split(" ").pop();
							var ben  = v.id.split("-").pop();
							if (idArray[1] == h){
								if ( $('#' + v.id).parents('.' + t.obj.mngmtAction).length ){
									var values = $('#' + v.id).slider("option", "values");
									t[ben] = "(" + ben + " >= " + values[0] + " AND " + ben + " <= " + values[1] + ")";								
								}else{
									t[ben] = "";
								}	
							}else{
								//t[ben] = "";
							}
						})
						t.clicks.layerDefs(t);
					}	
				})

				//Natural lands not behind levess slider
				$('#' + t.id + '-10-NatNotProt').slider({range:true, min:0, max:16800, values:[0,16800], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-NatNotProt').slider({range:true, min:0, max:6700, values:[0,6700], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural lands not behind levess slider
				$('#' + t.id + '-10-RowAgNotProt').slider({range:true, min:0, max:33600, values:[0,33600], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-RowAgNotProt').slider({range:true, min:0, max:21200, values:[0,21200], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Structural loss slider
				$('#' + t.id + '-10-FRStruct_TotLoss').slider({range:true, min:0, max:1262656000, values:[0,1262656000], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-FRStruct_TotLoss').slider({range:true, min:0, max:1196649000, values:[0,1196649000], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural loss slider
				$('#' + t.id + '-10-AGLoss_7').slider({range:true, min:0, max:129913000, values:[0,129913000], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-AGLoss_7').slider({range:true, min:0, max:21535000, values:[0,21535000], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural land use behind levees slider
				$('#' + t.id + '-10-RowAgProt').slider({range:true, min:0, max:47300, values:[0,47300], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-RowAgProt').slider({range:true, min:0, max:22600, values:[0,22600], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Developed lands behind levess slider
				$('#' + t.id + '-10-DevProt').slider({range:true, min:0, max:29000, values:[0,29000], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				$('#' + t.id + '-12-DevProt').slider({range:true, min:0, max:12300, values:[0,12300], 
						change:function(event,ui){t.clicks.sliderChange(event,ui,t)},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
			},
			sliderChange: function(e, ui, t){
				var ben  = e.target.id.split("-").pop()
				t[ben] = "(" + ben + " >= " + ui.values[0] + " AND " + ben + " <= " + ui.values[1] + ")";	
				t.clicks.layerDefs(t);
			},
			sliderSlide: function(e, ui, t){
				var sid = e.target.id.split("-");
				$('#' + t.id + '-' + sid[1] + '-' + sid[2]).parent().prev().find('.blueFont').each(function(i,v){
					if (ui.values[i] > 100000){
						var val = t.clicks.abbreviateNumber(ui.values[i])
					}else{
						var val = t.clicks.commaSeparateNumber(ui.values[i])
					}
					$(v).html(val)
				})	
			},
			layerDefs: function(t){
				if (t.obj.stateSet == "no"){
					t.obj.exp = [t.ffDef, t.NatNotProt, t.RowAgNotProt, t.RowAgProt, t.DevProt, t.FRStruct_TotLoss, t.AGLoss_7]
				}
				console.log(t.obj.exp)	
				var exp = "";
				var cnt = 0;
				$.each(t.obj.exp, function(i, v){
					if (v.length > 0){
						if (exp.length == 0){
							exp = v;
							cnt = 1;
						}else{
							exp = exp + " AND " + v;
							cnt = cnt + 1;
						}	
					}	
				});
				t.layerDefinitions = [];		
				t.layerDefinitions[t.obj.hucLayerSel] = exp;			
				t.dynamicLayer.setLayerDefinitions(t.layerDefinitions);
				t.dynamicLayer.setVisibleLayers(t.obj.visibleLayers);
				var query = new Query();
				var queryTask = new QueryTask(t.url + '/' + t.obj.hucLayerSel);
				query.where = exp;
				queryTask.executeForCount(query,function(count){
					var cnt = t.clicks.commaSeparateNumber(count)
					//$('#' + t.id + 'basinCnt').html(cnt); 
					console.log(cnt);
				});
			},
			makeVariables: function(t){
				t.ffDef = "";
				t.NatNotProt = "";
				t.RowAgNotProt = "";
				t.RowAgProt = "";
				t.DevProt = "";
				t.FRStruct_TotLoss = "";
				t.AGLoss_7 = "";
			},
			commaSeparateNumber: function(val){
				while (/(\d+)(\d{3})/.test(val.toString())){
					val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
				}
				return val;
			},
			abbreviateNumber: function(num) {
			    if (num >= 1000000000) {
			        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
			     }
			     if (num >= 1000000) {
			        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
			     }
			     if (num >= 1000) {
			        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
			     }
			     return num;
			}
        });
    }
);
