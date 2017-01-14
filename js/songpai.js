mui.init();
(function($) {
	//阻尼系数
	var deceleration = mui.os.ios?0.003:0.0009;
	$('.mui-scroll-wrapper').scroll({
		bounce: false,
		indicators: true, //是否显示滚动条
		deceleration:deceleration
	});
	$.ready(function() {
		$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, item) {
			$(item).pullToRefresh({
				up: {
					callback: function() {
						var self = this;
						setTimeout(function() {
							var ul = self.element.querySelector('.mui-table-view');
							ul.appendChild(createFragment(ul, index, 5));
							self.endPullUpToRefresh();
						}, 1000);
					}
				}
			});
		});
		var createFragment = function(ul, index, count, reverse) {
			if(index == 0){
				var length = ul.querySelectorAll('li').length;
				var fragment = document.createDocumentFragment();
				var li;
				for (var i = 0; i < count; i++) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
					fragment.appendChild(li);
				}
			}else if(index == 1){
				var length = ul.querySelectorAll('li').length;
				var fragment = document.createDocumentFragment();
				var li;
				for (var i = 0; i < count; i++) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					li.innerHTML = '第' + (index + 1) + '个选项卡子项-' + (length + (reverse ? (count - i) : (i + 1)));
					fragment.appendChild(li);
				}
			}
			return fragment;
		};
	});
})(mui);