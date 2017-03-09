define([
	"dojo/_base/declare"
],
function ( declare ) {
        "use strict";

        return declare(null, {
			appSetup: function(t){
				//make accrodians
				$( function() {
					$( "#" + t.id + "mainAccord" ).accordion({heightStyle: "fill"});
					$( "#" + t.id + "infoAccord" ).accordion({heightStyle: "fill"});
					$( '#' + t.id + 'mainAccord > h3' ).addClass("accord-header"); 
					$( '#' + t.id + 'infoAccord > div' ).addClass("accord-body");
					$( '#' + t.id + 'infoAccord > h3' ).addClass("accord-header"); 
					$( '#' + t.id + 'mainAccord > div' ).addClass("accord-body");
				});
				// update accordians on window resize
				var doit;
				$(window).resize(function(){
					clearTimeout(doit);
					doit = setTimeout(function() {
						t.clicks.updateAccord(t);
					}, 100);
				});	
				// leave the get help section
				$('#' + t.id + 'getHelpBtn').on('click',function(c){		
					if ( $('#' + t.id + 'mainAccord').is(":visible") ){
						$('#' + t.id + 'infoAccord').show();
						$('#' + t.id + 'mainAccord').hide();
						$('#' + t.id + 'getHelpBtn').html('Back to Sample App');
						t.clicks.updateAccord(t);
						$('#' + t.id + 'infoAccord .infoDoc').trigger('click');
					}else{
						$('#' + t.id + 'infoAccord').hide();
						$('#' + t.id + 'mainAccord').show();
						$('#' + t.id + 'getHelpBtn').html('Back to Documentation');
						t.clicks.updateAccord(t);
					}			
				});						
				// Infographic section clicks
				$('#' + t.id + ' .infoIcon').on('click',function(c){
					$('#' + t.id + 'mainAccord').hide();
					$('#' + t.id + 'infoAccord').show();
					$('#' + t.id + 'getHelpBtnWrap').show();
					var ben = c.target.id.split("-").pop();
					$('#' + t.id + 'getHelpBtn').html('Back to Sample App');
					t.clicks.updateAccord(t);	
					$('#' + t.id + 'infoAccord .' + ben).trigger('click');
				});
				
			},
			eventListeners: function(t){
				//Natural lands not behind levess slider
				$('#' + t.id + '-NatNotProt').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural lands not behind levess slider
				$('#' + t.id + '-AGNotProt').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Structural loss slider
				$('#' + t.id + '-FRStruct_TotLoss').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural loss slider
				$('#' + t.id + '-AGLoss_7').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Agricultural land use behind levess slider
				$('#' + t.id + '-AGProt').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Developed lands behind levess slider
				$('#' + t.id + '-DevProt').slider({range:true, min:0, max:100, values:[0,100], 
						change:function(event,ui){/*ask server for data*/},
						slide:function(event,ui){t.clicks.sliderSlide(event,ui,t)}
					})
				//Select Management Action Radio Button Listener
				$('input[type=radio][name=mng-act]').change(function(c) {
					$('.mng-act-wrap').slideUp(500,function(){
						$('.mng-act-toggle').hide();
						$('.' + c.target.value).show()
						$('.mng-act-wrap').slideDown(500);		
					})	
				})
				//Select Management Action Toggle Button Listener
				$('#' + t.id + 'mact-btns input').on('click', function(c){
					$('.mng-act-wrap').slideUp(500,function(){
						$('.mng-act-toggle').hide();
						$('.' + c.target.value).show()
						$('.mng-act-wrap').slideDown(500);	
					});	
				})	
			},
			sliderSlide: function(e, ui, t){
				var sid = e.target.id.split("-").pop();
				$('#' + t.id + '-' + sid).parent().prev().find('.blueFont').each(function(i,v){
					$(v).html(ui.values[i])
				})	
			},
			updateAccord: function(t){
				var ma = $( "#" + t.id + "mainAccord" ).accordion( "option", "active" );
				var ia = $( "#" + t.id + "infoAccord" ).accordion( "option", "active" );
				$( "#" + t.id + "mainAccord" ).accordion('destroy');	
				$( "#" + t.id +  "infoAccord" ).accordion('destroy');	
				$( "#" + t.id + "mainAccord" ).accordion({heightStyle: "fill"}); 
				$( "#" + t.id + "infoAccord" ).accordion({heightStyle: "fill"});	
				$( "#" + t.id + "mainAccord" ).accordion( "option", "active", ma );		
				$( "#" + t.id + "infoAccord" ).accordion( "option", "active", ia );					
			}
        });
    }
);
