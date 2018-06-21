(function (global, factory) {

	global.litebox = factory();

}(window, function () {

	function LiteBox() {
		this.init();
	}

	LiteBox.prototype.init = function () {
		var self = this;

		var init = function(){
			self.attachEventListener();
			self.buildHTML();
		};

		if (document.readyState === "complete" ||
			(document.readyState !== "loading" && !document.documentElement.doScroll)) {
			init();
		} else {
			document.addEventListener("DOMContentLoaded", init);
		}
		
	};
	
	LiteBox.prototype.attachEventListener = function () {
		var self = this;

		document.addEventListener('click', function(e) {
			e.preventDefault();

			if (e.target.dataset.hasOwnProperty('liteBox')) {
				self.start(e.target);
			}
		}, false);
	};

	LiteBox.prototype.buildHTML = function () {

	};

	LiteBox.prototype.start = function (imgLink) {
		console.log(imgLink);
	};

	return new LiteBox();

}));