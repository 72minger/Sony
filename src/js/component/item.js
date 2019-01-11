define(["jquery", "template"], ($, template) => {
    class Item{
        constructor(){

        }

        // url         string  接口地址，
        // className   string  引入html的位置
        // item        sting   模板文件的的名字
        // itemId      string  模板template 的id名
        // 调用方法，在需要使用的地方引入 itemjs 接收参数调用init（）

        init(url,className,item,itemId){
            var _this = this;
            new Promise((resolve, reject) => {
                console.log(url)
                $(className).load("/html/component/"+item+".html",() =>{
                    resolve();
                })
            }).then(() => {
                $.ajax({
                    url : url,
                    type : "get",
                    success : function(res){
                        if(res.res_code === 1){
                            let html = template(itemId,{list: res.res_body.data});

                            $(className).html(html);
                            if(className === ".listP"){
                                _this.addCrat();
                                _this.cartNum();
                            }
                        }
                    } 
                })
            })
        }

        //列表页添加购物车
        addCrat(){
            var _this = this;
            // console.log($('.img').attr('data-id'))
            let len = $('.mart').length,
                mart = $('.mart');
            console.log(len);
            // for(let p = 0; p < len; p++){
            //     $(mart).eq[p].on('click',function(){
            //         //得到商品id、名称、价格、数量、图片地址
            //         let id = $(this).parents('li').find('.img').attr('data-id'),
            //         name = $('.series').text(),
            //         price = $('.price').text(),
            //         num = 1,
            //         imgAdd = $('.img').attr('src'),
            //         detail ={
            //             id,name,price,num,imgAdd
            //         };
            //         _this.addCookie(detail);
            //         _this.cartNum();
            //         console.log(id);
            //     })
            // }
            $('.mart').on('click',function(){
                //得到商品id、名称、价格、数量、图片地址
                let id = $(this).parents('li').find('.img').attr('data-id'),
				name = $('.series').text(),
				price = $('.price').text(),
				num = 1,
				imgAdd = $('.img').attr('src'),
				detail ={
					id,name,price,num,imgAdd
				};
                _this.addCookie(detail);
                _this.cartNum();
                console.log(id);
            })
        }

        addCookie(obj){
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
		cartNum(){
			let count = $('.commodityNum'),
				comNum = 0,
				arrCookie = JSON.parse($.cookie('cart'));
			
			$.each(arrCookie,function(index,value){
				console.log(arrCookie[index].num);
				comNum += parseInt(arrCookie[index].num);
				count.text(comNum);
			})
		}
    }
    return new Item();
})
// define(["jquery","template"],($,template) => {
//     function Item(){

//     }

//     Item.prototype.init = function(url){
//         console.log(url);
//         new Promise((resolve, reject) => {
//             $("#newP").load("/html/component/item.html",() => {
//                 resolve();
//             })
//         }).then(() => {
//             $.ajax({
//                 url : url,
//                 type : "get",
//                 success : function(res){
//                     console.log(res);
//                     if(res.res_code === 1){
//                         let html = template("newList",{list : res.res_body.data});
//                         console.log(html);
//                         $("#newP").html(html);
//                     }
//                 }
//             })

//         })
//     }

//     return new Item();
// })