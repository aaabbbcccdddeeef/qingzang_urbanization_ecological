function population (id, current_screen, current_year){
	var myChart = echarts.init(document.getElementById(id));
	var population_data = current_year < 2000? []: populationData[current_screen][current_year];
	console.log(city_name[current_screen])
	var option = {
	    title : {
	        text: '人口(万人)',
	        left:5,
	        top:5,
	        textStyle:{
	        	fontSize:14,
	        	color:"#fff",
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter:function (params){
	        	return params.name+ ': ' +params.value + '万人';
	        }
	    },
	    grid: {
	        left: '3%',
	        top:'25%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        data: city_name[current_screen],
	        axisLabel: coordinate_axis_style.axisLabel,
	        axisLine: coordinate_axis_style.axisLine,
	    }],
	    yAxis: [{
	        type: 'value',
	        axisLabel: coordinate_axis_style.axisLabel,
	        axisLine: coordinate_axis_style.axisLine,
	        splitLine: {
	            lineStyle: {
	                color: "#063374",
	            }
	        }
	    }],
	    // dataZoom: [
	    //     {
	    //         type: "slider",
	    //         show: true,
	    //         height: 10,
	    //         xAxisIndex: [
	    //             0
	    //         ],
	    //         start: 1,
	    //         end: 35
	    //     }
	    // ],
	    series: [{
	        type: 'bar',
	        data: population_data,
	        barWidth: 10, //柱子宽度
	        //barGap: 1, //柱子之间间距
	        itemStyle: {
	        	color: '#EA9F04'
	        }
	        // itemStyle: {
	        //     normal: {
	        //         color: new echarts.graphic.LinearGradient(
	        //             0, 0, 0, 1, [{
	        //                 offset: 0,
	        //                 color: '#EA9F04'
	        //             }, {
	        //                 offset: 1,
	        //                 color: '#FFC113'
	        //             }]
	        //         ),
	        //         barBorderRadius: 5,
	        //     },
	        //     emphasis: {
	        //         color: new echarts.graphic.LinearGradient(
	        //             0, 0, 0, 1, [{
	        //                 offset: 0,
	        //                 color: '#2378f7'
	        //             }, {
	        //                 offset: 0.7,
	        //                 color: '#2378f7'
	        //             }, {
	        //                 offset: 1,
	        //                 color: '#83bff6'
	        //             }]
	        //         )
	        //     },
	        //  }
	    }]
	};
    myChart.setOption(option, true)
}