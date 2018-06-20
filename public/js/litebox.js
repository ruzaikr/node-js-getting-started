(function (global, factory) {

	global.litebox = factory();

}(window, function () {

	function LiteBox() {
		this.init();
	}

	Litebox.prototype.init = function () {
		var self = this;

		var init = function(){
			console.log('init');
			self.attachEventListener();
			self.buildHTML();
		};

		if (document.readyState === "complete" || (document.readyState !== "loading" &&
				!document.documentElement.doScroll)) {
			init();
		} else {
			document.addEventListener("DOMContentLoaded", init);
		}
		
	};
	
	LiteBox.prototype.attachEventListener = function () {
		
	};

	LiteBox.prototype.buildHTML = function () {

	};

	return new LiteBox();

}));