
//首页的业务逻辑
require(["./require-config"], () => {
	//引入index需要依赖的模块
	require(["jquery","url","item","header","footer","focus-us"], ($,url,item) => {
		$(function(){
			//轮播图
			let box = $(".slide-container"),
				ul = box.find('ul'),
				aLis = ul.children(),
				aAs = $('.tabs').children();
				

			let timer = null,
				len = aLis.length-1,
				liWidth = aLis.eq(0).width(),
				index = 0,
				flag = true;
				console.log(len);

			
			//计算ul宽度
			ul.width((len+1)*liWidth);

			for(let w = 0; w < aLis.length; w++){
				let winW = $(window).width();
				$(aLis).eq(w).width(winW).resize();
			}

			for(let i = 0; i < len; i++){
				console.log(aAs[1]);
				$(aAs).eq(i).on('click',function(){
					aAs.eq(index).removeClass('active');
					index = $(this).addClass('active').index();

					ul.stop().animate({left : -liWidth*index},'slow');
				})
			}

			//下一张
			$('.arrow-right').on('click',function(){
				if(flag){
					flag = false;
					aAs.eq(index).removeClass('active');
					// alert(11);
					if(++index >= len){
						ul.stop().animate({left : -liWidth*len},'slow',function(){
							ul.css({left : 0});
							flag = true;
						})
						index = 0;
					}else{
						ul.stop().animate({left : -liWidth*index},'slow',function(){
							flag = true;
						});
					}

					aAs.eq(index).addClass('active');
				}
				
			})

			//上一张
			$('.arrow-left').on('click',function(){
				if(flag){
					flag = false;
					aAs.eq(index).removeClass('active');
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

					aAs.eq(index).addClass('active');

				}
			})

			//自动播放
			box.hover(function () {  
                clearInterval(timer);
            }, (function autoPlay() {
                timer = setInterval(() => {
                    $('.arrow-right').trigger('click');
                }, 2000);
                return autoPlay;
			})());
		})

		item.init(url.baseUrlRap + "/newlist","#newP","item","newList");
	})
})