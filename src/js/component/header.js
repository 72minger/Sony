define(["jquery","url","cookie"], ($,url) => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				
				this.login();
				this.register();
				this.close();
				this.goCart();
				this.cartNum();
			})
		}
		login(){
			let _this = this;
			
			$(".login-btn").on("click",function(){
				if($("#login").length > 0){
					$("#login").attr("style","display:block");
					$(".login-zone").attr("style","display:block");
					$(".register-zone").attr("style","display:none");
					$("body").append("<div class='b-modal __b-popup1__' style='background-color: rgb(0, 0, 0); position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; opacity: 0.7; cursor: pointer;'></div>")
				}else{
					console.log($(".login-btn"));
					$("body").append("<div class='b-modal __b-popup1__' style='background-color: rgb(0, 0, 0); position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; opacity: 0.7; cursor: pointer;'></div>")
					$("body").append(`<div id='login' class='login-success' style='display:block'>
						<div class='login-zone'>
							<div class='login-succ-tit clear-both'>
								<div class='t-bt'>
									<img src='/images/login_btn_01.jpg' alt=''>
									<a href='javascript:;' class='zhuce'>
										<img src='/images/login_btn_02.jpg' alt=''>
									</a>
								</div>
								<a href='javascript:;' class='close b-close'>
									<img src='/images/close228.jpg'>
								</a>
							</div>
							<div class='login-succ-con'>
								<div class='pads'>
									<div class='login-succ-conx'>
										<div class='zhanghao'>
											<span class='i1'></span>
											<input type='text' placeholder='请用手机号登陆' id='username'>
										</div>
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' placeholder='密码' id='log-pwd'>
										</div>
										<div class='clear-both'>
											<div class='login-info'>
												<label class='remme'>
													<input type='checkbox'>${"记住用户名"}
												</label>
												<a href='javascript:;'>${"忘记密码"}</a>
											</div>
										</div>
					
										<p class='error-tip login-error' style='display:none'>${"请输入用户名和密码"}</p>
					
										<div class='login-success-btn'>
											<a href='javascript:;' class='login-close'>${"登录"}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					
						<div class='register-zone' style='display:none'>
							<div class='login-succ-tit clear-both'>
								<div class='t-bt'>
									<a href='javascript:;' class='denglu'>
										<img src='/images/register_btn_01.jpg' alt=''>
									</a>
									<img src='/images/register_btn_02.jpg' alt=''>
									
								</div>
								<a href='javascript:;' class='close b-close'>
									<img src='/images/close228.jpg'>
								</a>
							</div>
							<div class='login-succ-con'>
								<div class='pads1'>
									<div class='login-succ-conx'>
										<div class='zhanghao'>
											<span class='i1 i4'></span>
											<input type='text' name='mobile' id='mobile' placeholder='输入手机号'>    
											<span class='del'>x</span>
											<div class='error-tip error-tip1' style='display:none'>
												${"请输入正确的手机号码"}
											</div>
										</div>
					
										<div class='zhanghao'>
											<span class='i1 i3'></span>
											<input type='text' name='email' id='email' placeholder='输入邮箱地址'>
											<span class='del'>x</span>
											<div class='error-tip error-tip2' style='display:none'>
												${"请输入正确的邮箱号"}
											</div>
										</div>
					
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' name='pwd' id='pwd' placeholder='密码由8-40个字符组成，须含字母和数字'>
											<div class='error-tip error-tip3' style='display:none'>
												${"请输入不少于8位又字母和数字组成的密码"}
											</div>
										</div>
					
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' name='cpwd' id='cpwd' placeholder='再次输入密码'>
											<div class='error-tip error-tip4' style='display:none'>
												${"两次输入密码不一致"}
											</div>
										</div>
										
										<div class='login-success-btn'>
											<a href='javascript:;' class='login-close'>${"注册"}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`)
				}
				
				_this.close();
				// _this.mid();
				_this.close1();
				_this.logLink();
				_this.log();
			})
			
		}
		register(){
			let _this = this;
			console.log($(".register-btn")[0]);
			$(".register-btn").on("click",function(){
				if($("#login").length > 0){
					$("#login").attr("style","display:block");
					$(".login-zone").attr("style","display:none");
					$(".register-zone").attr("style","display:block");
					$("body").append("<div class='b-modal __b-popup1__' style='background-color: rgb(0, 0, 0); position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; opacity: 0.7; cursor: pointer;'></div>")
				}else{
					$("body").append("<div class='b-modal __b-popup1__' style='background-color: rgb(0, 0, 0); position: fixed; top: 0px; right: 0px; bottom: 0px; left: 0px; opacity: 0.7; cursor: pointer;'></div>")
					$("body").append(`<div id='login' class='login-success'>
						<div class='login-zone' style='display:none'>
							<div class='login-succ-tit clear-both'>
								<div class='t-bt'>
									<img src='/images/login_btn_01.jpg' alt=''>
									<a href='javascript:;' class='zhuce'>
										<img src='/images/login_btn_02.jpg' alt=''>
									</a>
								</div>
								<a href='javascript:;' class='close b-close'>
									<img src='/images/close228.jpg'>
								</a>
							</div>
							<div class='login-succ-con'>
								<div class='pads'>
									<div class='login-succ-conx'>
										<div class='zhanghao'>
											<span class='i1'></span>
											<input type='text' placeholder='请用手机号登陆' id='username'>
										</div>
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' placeholder='密码' id='log-pwd'>
										</div>
										<div class='clear-both'>
											<div class='login-info'>
												<label class='remme'>
													<input type='checkbox'>${"记住用户名"}
												</label>
												<a href='javascript:;'>${"忘记密码"}</a>
											</div>
										</div>
					
										<p class='error-tip login-error' style='display:none'>${"请输入用户名和密码"}</p>
					
										<div class='login-success-btn'>
											<a href='javascript:;' class='login-close'>${"登录"}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					
						<div class='register-zone'>
							<div class='login-succ-tit clear-both'>
								<div class='t-bt'>
									<a href='javascript:;' class='denglu'>
										<img src='/images/register_btn_01.jpg' alt=''>
									</a>
									<img src='/images/register_btn_02.jpg' alt=''>
									
								</div>
								<a href='javascript:;' class='close b-close'>
									<img src='/images/close228.jpg'>
								</a>
							</div>
							<div class='login-succ-con'>
								<div class='pads1'>
									<div class='login-succ-conx'>
										<div class='zhanghao'>
											<span class='i1 i4'></span>
											<input type='text' name='mobile' id='mobile' placeholder='输入手机号'>    
											<span class='del'>x</span>
											<div class='error-tip error-tip1' style='display:none'>
												${"请输入正确的手机号码"}
											</div>
										</div>
					
										<div class='zhanghao'>
											<span class='i1 i3'></span>
											<input type='text' name='email' id='email' placeholder='输入邮箱地址'>
											<span class='del'>x</span>
											<div class='error-tip error-tip2' style='display:none'>
												${"请输入正确的邮箱号"}
											</div>
										</div>
					
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' name='pwd' id='pwd' placeholder='密码由8-40个字符组成，须含字母和数字'>
											<div class='error-tip error-tip3' style='display:none'>
												${"请输入不少于8位又字母和数字组成的密码"}
											</div>
										</div>
					
										<div class='mima'>
											<span class='i1 i2'></span>
											<input type='password' name='cpwd' id='cpwd' placeholder='再次输入密码'>
											<div class='error-tip error-tip4' style='display:none'>
												${"两次输入密码不一致"}
											</div>
										</div>
										
										<div class='login-success-btn'>
											<a href='javascript:;' class='login-close'>${"注册"}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`)
				}
				_this.close();
				// _this.mid();
				_this.close1();
				_this.logLink();
				_this.reg();
			})
		}
		//登录注册框关闭
		close(){
			console.log($(".close")[0]);
			$(".close").on("click",function(){
				$("#login").attr("style","display:none");
				$(".b-modal").remove();
			})
		}
		//关闭模态层
		close1(){
			$(".b-modal").on("click",function(){
				$(".b-modal").remove();
				$("#login").attr("style","display:none");
			})
		}
		//登陆注册切换
		logLink(){
			$(".denglu").on("click",function(){
				$(".login-zone").attr("style","display:block");
				$(".register-zone").attr("style","display:none");
			})
			$(".zhuce").on("click",function(){
				$(".login-zone").attr("style","display:none");
				$(".register-zone").attr("style","display:block");
			})
		}
		reg(){
			let mobile = $('#mobile'),
				email = $('#email'),
				pwd = $('#pwd'),
				cpwd = $('#cpwd'),
				aInput = $('input'),
				btn = $('.login-success-btn');
				console.log(mobile,email,pwd);

			let mobileReg = /^1\d{10}$/,
				emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
				pwdReg = /^[0-9a-zA-Z]{8}$/;
			let flag = false;
			aInput.on('blur',function(){
				if(mobile.val() !== '' 
					&&email.val() !== ''
					&&pwd.val() !== ''
					&&cpwd.val() !== ''
					){
						btn.addClass('flag');
						flag = true;
					}

				if(mobileReg.test(mobile.val())){
					$('.error-tip1').css({display : "none"});
				}
				if(emailReg.test(email.val())){
					$('.error-tip1').css({display : "none"});
				}
				if(pwdReg.test(pwd.val())){
					$('.error-tip1').css({display : "none"});
				}
			})
			//正则验证
			function reg() {
				// let mobileReg = /^1\d{10}$/,
				// 	emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
				// 	pwdReg = /^[0-9a-zA-Z]{8}$/;

				if(!mobileReg.test(mobile.val())){
					$('.error-tip1').css({display : "block"});
				} 
				if(!emailReg.test(email.val())){
					$('.error-tip2').css({display : "block"});
				} 
				if(!pwdReg.test(pwd.val())){
					$('.error-tip3').css({display : "block"});
				}
				if(pwd.val() !== cpwd.val()){
					$('.error-tip4').css({display : "block"});
				}
				return true;
			}	
			//注册
			btn.on('click',function(){
				reg();
				if(flag){
						if(reg()){
							console.log(123);
							// $.ajax({
							// 	url : url.baseUrlPhp + "/api/v1/register.php",
							// 	type : "post",
							// 	dataType: "json",
							// 	data : {
							// 		mobile : mobile.val(),
							// 		email : email.val(),
							// 		password : pwd.val(),
							// 	},
							// 	success : function(res){
							// 		console.log(res);
							// 		// if(res.res_code){
							// 		// 	console.log("注册成功");
							// 		// 	setTimeout(() => {
												
							// 		// 	},1500);
							// 		// }
							// 	},
							// });
							$.post(url.baseUrlPhp + "/api/v1/register.php",{
										mobile : mobile.val(),
										email : email.val(),
										password : pwd.val(),
									},(res) => {
										// console.log(res);
										if(res.res_code){
											console.log(11);
											
										}
									})
						}
					}
			})
		}

		log(){
			let mobile = $('#username'),
			    pwd = $('#log-pwd'),
				aInput = $('input'),
				remme = $('.remme'),
				btn = $('.login-success-btn');

			let flag = false,
				check = false;

			aInput.on("blur",function(){
				if(mobile.val() !== "" && pwd.val() !== 0){
					btn.addClass("flag");
					flag = true;
				}
			});
			//点击记住我
			remme.on("click",() =>{
				check = true;
			})

			btn.on("click",function(){
				if(flag){
					$.post(url.baseUrlPhp + "/api/v1/login.php",{
						mobile : mobile.val(),
						password : pwd.val(),
					},(res) => {
						console.log(res);
						if(res.res_code){
							console.log(11);
							if(check){
								$.cookie("user", JSON.stringify(res.res_body), {path: "/", expires: 3});   
							}else{
								$.cookie("user", JSON.stringify(res.res_body), {path: "/"});
							}
							//登陆成功隐藏登陆框
							$(".b-modal").remove();
							$("#login").attr("style","display:none");
						}else{
							alert("用户名或密码错误,请重新登陆");

						}
					})
				}
			})
		}
		
		//点击去购物车
		goCart(){
			$('.gotoshoppingCar').on('click',function(){
				location.href = '/html/shopping.html'
			})
		}
		cartNum(){
			let count = $('.commodityNum'),
				comNum = 0,
				arrCookie = JSON.parse($.cookie('cart'));
			
			$.each(arrCookie,function(index,value){
				comNum += parseInt(arrCookie[index].num);
				count.text(comNum);
			})
		}
	}
	return new Header();
})