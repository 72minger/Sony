//商品详情页的业务逻辑
require(["./require-config"], () => {
	//引入detail需要依赖的模块
	require(["jquery",'url','item','template','cookie', "header","footer","focus-us"], ($,url,item,template,cookie) => {
		// item.init(url.baseUrlRap + "/detail","#detailP","item3","Detail");
		
		//获取商品id
		 let  proId = location.href.slice(-1);
		//  console.log(proId);

		//请求数据
		$.ajax({
			url : url.baseUrlRap + "/detail",
			type : "get",
			success : function(res){
				if(res.res_code === 1){
					let html = template('Detail',{list: res.res_body.data});

					$("#detailP").html(html);

					//改变商品数量
					let numCount = $('.numCount');
					$('.reduce').on('click',function(){
						if(!(Number(numCount.val()) <= 1)){
							numCount.val(Number(numCount.val()) - 1);
						}
					})

					$('.add').on('click',function(){
						numCount.val(Number(numCount.val()) + 1);
					})

					//添加购物车
					console.log($('.buybtn'));
					$('.buybtn').on('click',function(){
						getCookie();
						//改变头部购物车图标的商品数量
						cartNum();
					})
				}
			} 
		})

		// //改变商品数量
		// let numCount = $('.numCount');
		// $('.reduce').on('click',function(){
		// 	if(!(Number(numCount.val()) <= 1)){
		// 		numCount.val(Number(numCount.val()) - 1);
		// 	}
		// })

		// $('.add').on('click',function(){
		// 	numCount.val(Number(numCount.val()) + 1);
		// })

		// //添加购物车
		// console.log($('.buybtn'));
		// $('.buybtn').on('click',function(){
		// 	getCookie();
		// 	//改变头部购物车图标的商品数量
		// 	cartNum();
		// })

		//获取cookie数据
		function getCookie(){
			//得到商品id、名称、价格、数量、图片地址
			let id = proId,
				name = $('.product-name').text(),
				price = $('.product-price').text(),
				num = Number($('.numCount').val()),
				imgAdd = $('.product-img').attr('src'),
				detail ={
					id,name,price,num,imgAdd
				};
				addCookie(detail);
		}

		function addCookie(obj){
			//判断cookie里面是否有值
			let cart = $.cookie('cart') ? JSON.parse($.cookie('cart')) : [];
            let index;
            let flag = cart.some(function (value, i) {  
                index = i;
                return value.id === obj.id;
			});
			//如果id一样数量+1，否则就插入对象
            flag ? cart[index].num += obj.num : cart.push(obj);
            // 重新插入cookie
            $.cookie('cart', JSON.stringify(cart), {path: '/', expires: 3});
            console.log(JSON.parse($.cookie('cart')));
		}

		//改变头部购物车图标的商品数量
		function cartNum(){
			let count = $('.commodityNum'),
				comNum = 0,
				arrCookie = JSON.parse($.cookie('cart'));
			
			$.each(arrCookie,function(index,value){
				console.log(arrCookie[index].num);
				comNum += parseInt(arrCookie[index].num);
				count.text(comNum);
			})
		}
		

	})
})