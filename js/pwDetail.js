mui.init({
  pullRefresh : {
    container:"#refreshContainer",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
    up : {
      height:50,//可选.默认50.触发上拉加载拖动距离
      auto:true,//可选,默认false.自动上拉加载一次
      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
      callback :pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    }
  }
});
var count = 0;
function pullupRefresh(){
		setTimeout(function() {
		mui('#refreshContainer').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		var table = document.body.querySelector('.mui-table-view');
		var cells = document.body.querySelectorAll('.mui-table-view-cell');
		for (var i = cells.length, len = i + 5; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media';
			li.innerHTML = '<a href="javascript:;"><img class="mui-media-object mui-pull-left" src="../img/sy1.png"><div class="mui-media-body"><p class="mui-ellipsis p-title">江诗丹顿  自动机械 玫瑰金 40mm </p><span class="pm-state"></span></div></a>';
			table.appendChild(li);
		}
	}, 1500);
}
