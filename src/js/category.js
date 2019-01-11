//商品列表页的业务逻辑
require(["./require-config"], () => {
	//引入index需要依赖的模块
	require(["jquery","url","item", "header","footer","focus-us"], ($,url,item) => {
		item.init(url.baseUrlRap + "/hotlist",".hotP","item1","hotList");
		item.init(url.baseUrlRap + "/list",".listP","item2","List");

		$(function(){
			let ul = $('.slides'),
				aLis = ul.children(),
				ol = $('.slider-control-nav'),
				oLis = ol.children();
				console.log(oLis);
			let timer = null,
				len = aLis.length-1,
				liWidth = aLis.eq(0).width(),
				index = 0,
				flag = true;

			//计算ul宽度
			ul.width((len+1)*liWidth);

			for(let w = 0; w < aLis.length; w++){
				let winW = $(window).width();
				$(aLis).eq(w).width(winW).resize();
			}

			for(let i = 0; i < len; i++){
				
				$(oLis).eq(i).on('click',function(){
					oLis.eq(index).removeClass('active');
					console.log(index);
					index = $(this).addClass('active').index();

					ul.stop().animate({left : -liWidth*index},'slow');
				})
			}

			//下一张
			$('#next').on('click',function(){
				if(flag){
					flag = false;
					oLis.eq(index).removeClass('active');
					// alert(11);
					if(++index >= len){
						ul.animate({left : -liWidth*len},'slow',function(){
							ul.css({left : 0});
							flag = true;
						})
						index = 0;
					}else{
						ul.animate({left : -liWidth*index},'slow',function(){
							flag = true;
						});
					}

					oLis.eq(index).addClass('active');
				}
				
			})

			//上一张
			$('#prev').on('click',function(){
				if(flag){
					flag = false;
					oLis.eq(index).removeClass('active');
					// alert(11);
					if(--index < 0){
						ul.css({left : -liWidth*len},'slow',function(){
							flag = true;
						})
						index = len-1;
					}

					ul.stop().animate({left : -liWidth*index},'slow',function(){
						flag = true;
					});

					oLis.eq(index).addClass('active');

				}
			})

			//自动播放
			ul.hover(function () {  
                clearInterval(timer);
            }, (function autoPlay() {
                timer = setInterval(() => {
                    $('#next').trigger('click');
                }, 2000);
                return autoPlay;
			})());

		})

		
	})
})