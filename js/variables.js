define([
	"dojo/_base/declare"
],
function ( 	declare ) {
        "use strict";
        return declare(null, {
			makeVariables: function(t){	
				// definition expression root field names
				t.KM2 = "";
				t.ACCp = "";
				t.DINp = "";
				t.GDDs = ""; 
				t.CPI = "";
				t.inIBA = "";
				t.TNC = "";
				t.WT_TOT = "";
				t.FWScrit = "";
				t.ABCcorr = "";
				t.cumu_hci = "";
				t.popnow = "";
				t.pop2050 = "";
				t.P2_2050 = "";
				t.P5_2050 = "";
				// object for range slider
				t.sliderObj = {
					// huc 8 + protection + 1 in 5 year flood
					h8p1:{
						KM2:{
							values:[], vis:true, min:0, max:150, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[], vis:true, min:0, max:100, endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:100, nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:4000, nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[], vis:true, min:0, max:150000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[], vis:true, min:0, max:150000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + protection + 1 in 100 year flood
					h8p2:{
						KM2:{
							values:[], vis:true, min:0, max:150, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						},
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:150, nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:8500, nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + protection + 1 in 500 year flood
					h8p3:{
						KM2:{
							values:[], vis:true, min:0,	max:150, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[], vis:true, min:0, max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[], vis:true, min:0, max:75, shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[], vis:true, min:0, max:5, shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[], vis:true, min:0, max:200, nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[], vis:true, min:0, max:10000, nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[], vis:true, min:0, max:500000000, nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration + 1 in 5 year flood
					h8r1:{
						KM2:{values:[],vis:true,min:0,max:200, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:150,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:5000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:150000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:150000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration + 1 in 100 year flood
					h8r2:{
						KM2:{
							values:[],vis:true,min:0,max:500, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:300,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:15000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:300000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:500000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration + 1 in 500 year flood
					h8r3:{
						KM2:{
							values:[],vis:true,min:0,max:500, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:500,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:20000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:500000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:750000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration and reconnection + 1 in 5 year flood
					h8rr1:{
						KM2:{
							values:[],vis:true,min:0,max:50, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration and reconnection + 1 in 100 year flood
					h8rr2:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:20,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 8 + restoration and reconnection + 1 in 500 year flood
					h8rr3:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:75,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:20,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:500,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:5000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + protection + 1 in 5 year flood
					h12p1:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + protection + 1 in 100 year flood
					h12p2:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:300,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + protection + 1 in 500 year flood
					h12p3:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:300,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:20000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + restoration + 1 in 5 year flood
					h12r1:{
						KM2:{
							values:[],vis:true,min:0,max:10, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						},
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act"
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:200,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:10000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + restoration + 1 in 100 year flood
					h12r2:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
					},
					// huc 12 + restoration + 1 in 500 year flood
					h12r3:{
						KM2:{
							values:[],vis:true,min:0,max:50, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:25,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:1000,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:25000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + restoration and reconnection + 1 in 5 year flood
					h12rr1:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						},  
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain"
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + restoration and reconnection + 1 in 100 year flood
					h12rr2:{
						KM2:{
							values:[],vis:true,min:0,max:25, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// huc 12 + restoration and reconnection + 1 in 500 year flood
					h12rr3:{
						KM2:{
							values:[],vis:true,min:0,max:10,div:10, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:5,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + protection + 1 in 5 year flood
					catchp1:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + protection + 1 in 100 year flood
					catchp2:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + protection + 1 in 500 year flood
					catchp3:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in forest, wetland, or shrub-scrub that is not currently in protected status."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							vis:false
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in forest/wetland/shrub-scrub floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected to be living in forest/wetland/shrub-scrub floodplain of the selected return interval in 2050."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in forest/wetland/shrub-scrub floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration + 1 in 5 year flood
					catchr1:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration + 1 in 100 year flood
					catchr2:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration + 1 in 500 year flood
					catchr3:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land that is in a floodplain of the selected return interval."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land that is in a floodplain of the selected return interval."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration and reconnection + 1 in 5 year flood
					catchrr1:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							values:[],vis:true,min:0,max:100,endwp:true,
							info:"Accumulated growing degree days for Dec. 31, 2016 and Dec. 31, 2017 (averaged), and normalized to a 1-100 scale. A higher value selects for relatively warmer climates, where conditions in the floodplain are broadly more amenable to performing denitrification."
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration and reconnection + 1 in 100 year flood
					catchrr2:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					},
					// catchment + restoration and reconnection + 1 in 500 year flood
					catchrr3:{
						KM2:{
							values:[],vis:true,min:0,max:100,div:100, gtmax:true,
							info:"Area of floodplain in ag or pasture land that could potentially be restored, though a levee removal would be required to restore flooding."
						}, 
						ACCp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P accumulated from upstream at catchment outflow, divided by km<sup>2</sup> of upstream area, normalized to 1-100 scale."
						}, 
						DINp:{
							values:[],vis:true,min:0,max:100,
							info:"Kg/yr of N & P from the catchment that ultimately make it to the Gulf, divided by km<sup>2</sup> of catchment area, normalized to 1-100 scale."
						}, 
						GDDs:{
							vis:false
						}, 
						CPI:{
							values:[],vis:true,min:0,max:10,div:10,
							info:"An index characterizing soil's inherent capacity to produce non-irrigated commodity crops (0 - 1). Lower value suggests less productive soil, and therefore more viable opportunity to restore ag lands back to floodplain."
						}, 
						WT_TOT:{
							values:[],vis:true,min:0,max:8,shfld:true,
							info:"Total number of wetland species in catchment considered Imperiled (G1/G2) by NatureServe or threatened or endangered under the Endangered Species Act."
						}, 
						cumu_hci:{
							values:[],vis:true,min:0,max:5,shfld:true,
							info:"Degree to which anthropogenic stressors in the watershed may be affecting fish habitat. Higher value = less extreme stressors. For protection priorities, identify catchments higher in this metric."
						}, 
						popnow:{
							values:[],vis:true,min:0,max:10,nounsc:true, gtmax:true,
							info:"People currently living in ag or pasture land behind levees that could potentially be restored to floodplain."
						}, 
						pop2050:{
							values:[],vis:true,min:0,max:100,nounsc:true, gtmax:true,
							info:"People expected in 2050 to be living in ag or pasture land behind levees that could potentially be restored to floodplain."
						},
						P2_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP2 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						},
						P5_2050:{
							values:[],vis:true,min:0,max:1000000,nounsc:true, gtmax:true,
							info:"Projected 2050 potential property damage from flooding in ag/pasture floodplain of the selected return interval, behind levees. Uses SSP5 growth scenario, described <a href='https://www.carbonbrief.org/explainer-how-shared-socioeconomic-pathways-explore-future-climate-change' target='_blank'>here</a>."
						}
					}
				}
				//console.log(t.sliderObj)				
				// object for radio groups
				t.radioObj = {
					h8p1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						} 
					},
					h8p2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8p3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8r1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8r2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8r3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8rr1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8rr2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h8rr3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12p1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12p2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12p3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}	
					},
					h12r1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12r2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12r3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12rr1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12rr2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					h12rr3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchp1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchp2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchp3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchr1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchr2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchr3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchrr1:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchrr2:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					},
					catchrr3:{
						inIBA:{
							vis:true,cbid:"rb_cb1",
							info: "Important places for birds at the international, continental, and state scale, as identified by the National Audubon Society."
						}, 
						TNC:{
							vis:true,cbid:"rb_cb2",
							info: "Priority conservation areas identified in ecoregional assessments by The Nature Conservancy."
						}, 
						FWScrit:{
							vis:true,cbid:"rb_cb3",shfld:true,
							info:"Areas containing the physical or biological features essential to the conservation of species listed as threatened or endangered under the Endangered Species Act."
						}, 
						ABCcorr:{
							vis:true,cbid:"rb_cb4",shfld:true,
							info:"Corridors represent where bird risk differs season to season & key habitat areas are for birds on the Red WatchList."
						}
					}
				}
				//console.log(t.radioObj)
			}
		});
    }
);