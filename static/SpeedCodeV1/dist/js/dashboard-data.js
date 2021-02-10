/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	$('#statement').DataTable({
		"bFilter": false,
		"bLengthChange": false,
		"bPaginate": false,
		"bInfo": false,
	});
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).on("load",function(){
	window.setTimeout(function(){
		$.toast({
			heading: '\u6b22\u8fce\u4f7f\u7528\u0053\u0070\u0065\u0065\u0064\u0043\u006f\u0064\u0065\u7f51\u7edc\u9a8c\u8bc1\u7cfb\u7edf',
			text: '\u0053\u0070\u0065\u0065\u0064\u0043\u006f\u0064\u0065\u7f51\u7edc\u9a8c\u8bc1\u7cfb\u7edf\u4e3a\u6781\u901f\u6388\u6743\u7ba1\u7406\u7cfb\u7edf\u5546\u4e1a\u5347\u7ea7\u7248\u002e\u60a8\u5f53\u524d\u4f7f\u7528\u7cfb\u7edf\u66f4\u65b0\u4e8e\uff1a2021-01-05',
			position: 'bottom-left',
			loaderBg:'#FFFFFF',
			icon: '',
			hideAfter: 3500, 
			stack: 6
		});
	}, 3000);
});
/*****Load function* end*****/

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#app_state').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('app_state'));
		var data = [];
		var labelData = [];
		for (var i = 0; i < 24; ++i) {
			data.push({
				value: Math.random() * 10 + 10 - Math.abs(i - 12),
				name: i + ':00'
			});
			labelData.push({
				value: 1,
				name: i + ':00'
			});
		}

		var option3 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				show:false
			},
			series: [
				{
					name:'\u6570\u636e\u7edf\u8ba1',
					type:'pie',
					selectedMode: 'single',
					radius: [0, '35%'],
					color: ['#0070F6', '#FF3600'],
					label: {
						normal: {
							show:false,
						}
					},
					data:[
						{value:16161, name:'\u6b63\u5e38'},
						{value:6161, name:'\u5f02\u5e38'},
					]
				},
				{
					name:'\u6570\u636e\u7edf\u8ba1',
					type:'pie',
					radius: ['55%', '70%'],
					label: {
						normal: {
							show:false,
						}
					},
					color: ['#0070F6', '#FF3600'],
					data:[
						{value:16161, name:'\u6b63\u5e38'},
						{value:6161, name:'\u5f02\u5e38'},
					]
				}
			]
		};
		
		eChart_3.setOption(option3);
		eChart_3.resize();
	}
}
/*****E-Charts function end*****/

/*****Sparkline function start*****/
var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,9 ], {
			type: 'bar',
			width: '100%',
			height: '35',
			barWidth: '5',
			barSpacing: '5',
			barColor: '#0FC5BB',
			highlightSpotColor: '#0FC5BB'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([0,2,8,6,8,6,8,5,6], {
			type: 'bar',
			width: '100%',
			height: '35',
			barWidth: '5',
			barSpacing: '5',
			barColor: '#0FC5BB',
			highlightSpotColor: '#0FC5BB'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
			type: 'bar',
			width: '100%',
			height: '35',
			barWidth: '5',
			barSpacing: '5',
			barColor: '#0FC5BB',
			highlightSpotColor: '#0FC5BB'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			lineColor: '#0FC5BB',
			fillColor: 'transparent',
			minSpotColor: '#0FC5BB',
			maxSpotColor: '#0FC5BB',
			spotColor: '#0FC5BB',
			highlightLineColor: '#0FC5BB',
			highlightSpotColor: '#0FC5BB'
		});
	}	
}
/*****Sparkline function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
sparklineLogin();
echartsConfig();
/*****Function Call end*****/