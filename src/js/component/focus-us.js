define(["jquery"], () => {
	class FocusUs{
		constructor(){
			this.init();
		}
		init(){
			//加载footer.html
			new Promise((resolve, reject) => {
				$("#footer-focus").load("/html/component/focus-us.html", () => {
					resolve();
				})
			}).then(() => {
				
			})
        }
    }
	return new FocusUs();
})