//购物车页的业务逻辑
require(["./require-config"], () => {
	//引入shopping需要依赖的模块
	require(["jquery", "header","footer","focus-us",'cookie'], () => {
		if($.cookie('cart') !== undefined){
			$('.shop-no').css({'display':'none'});
			$('.shop-intro').css({'display':'block'});
			$('.Blurb').css({'display':'block'});
			$('.shop-con').css({'display':'block'});
			$('.shop-total').css({'display':'block'});
		}
		//获取cookie渲染页面
		let arr = JSON.parse($.cookie("cart"));
		// console.log(arr);

		let shopItem = $('.shop-item'),
			str = '';
		for(var value of arr){
			str +=`<div class="shop-item clearfix" id="${value.id}">
			<div class="shop-ti-intro clearfix"></div>
			<div class="shop-cart clearfix">
				<div class="cart-name">
					<div class="cart-pic">
						<img src="${value.imgAdd}" alt="">
					</div>
					<div class="cart-com">
					${value.name}
					</div>
				</div>

				<div class="cart-price">
					RMB&nbsp;<div class="c-price"> ${value.price}</div>
				</div>

				<div class="cart-num">
					<div class="num-m">
						<a href="javascript:;" class="reduce"></a>
						<span class="num-p">
							<input type="text" disabled="disabled" value="${value.num}" class="cargoN">
						</span>
						<a href="javascript:;" class="add"></a>
					</div>
				</div>

				<div class="cart-total">
					RMB&nbsp;<div class="c-total">${value.num * value.price}</div>
				</div>

				<div class="cart-opera">
					<a href="javascript:;" class="topool">移入心愿单</a>
					<a href="javascript:;" class="cp_del">删除</a>
				</div>
			</div>
		</div>`
		}
		$('.shop-con').html(str);
		console.log($.cookie('cart'))
		
		//修改商品操作
		$('.shop-con').on('click','.add',function(){
			let aNum = $(this).prev('.num-p').children().val(),
				aPrice = $(this).parents('.shop-cart').find('.c-price').text();
			// console.log($(this).parents('.shop-cart').find('.c-price').text(),aNum);
			$(this).prev('.num-p').children().val(++aNum);
			$(this).parents('.shop-cart').find('.c-total').text(aNum*aPrice);
			//修改cookie
			let cargo = JSON.parse($.cookie("cart"));
			$('.cargoN').each(function(i,item){
				cargo[i].num = $(item).val();
			})
			$.cookie("cart",JSON.stringify(cargo),{path:"/",expires: 3});
			totalPrice();
		})

		$('.shop-con').on('click','.reduce',function(){
			let aNum = $(this).next('.num-p').children().val(),
				aPrice = $(this).parents('.shop-cart').find('.c-price').text();
			
			if(aNum > 1){
				$(this).next('.num-p').children().val(--aNum);
				$(this).parents('.shop-cart').find('.c-total').text(aNum*aPrice);
			}
			
			let cargo = JSON.parse($.cookie("cart"));
			$('.cargoN').each(function(i,item){
				cargo[i].num = $(item).val();
			})
			$.cookie("cart",JSON.stringify(cargo),{path:"/",expires: 3});
			console.log($.cookie('cart'))
			totalPrice();
		})

		$('.shop-con').on('click','.cp_del',function(){
			$(this).parents('.shop-item').remove();
			let id = $(this).parents('.shop-item').attr('id'),
				cargo = JSON.parse($.cookie("cart"));
			console.log(id);
			for(let i = 0; i< cargo.length; i++){
				if(cargo[i].id === id){
					cargo.splice(i,1);
					break;
				}
			}
			$.cookie("cart",JSON.stringify(cargo),{path:"/",expires: 3});
			totalPrice();
		})

		//计算商品总价
		totalPrice();
		function totalPrice(){
			let allNum = 0,
				allPrice = 0;
			$('.shop-item').each(function(i,item){
				let id = $(item).attr('id'),
					cargo = JSON.parse($.cookie("cart"));
				for(let i = 0; i< cargo.length; i++){
					console.log(cargo[i].id,id);
					if(cargo[i].id === id){
						allNum += parseInt(cargo[i].num);
						allPrice += cargo[i].price * cargo[i].num;
						console.log(cargo[i].price);
					}
				}
			})

			$('.tobug').html('去结算' + '(' + allNum + ')');
			$('.spt-p-con').html('总价：RMB' + allPrice);
		}
	})
})