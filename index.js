(function(){
	function ifMobile(ua){
		ua = ua || navigator.userAgent || navigator.vendor || window.opera;
		ua = ua.toLowerCase();
		isIPhone = /iPhone/i.test(ua),
    	isIPad = /iPad/i.test(ua),
    	isAndroid = /android/i.test(ua);

		if(isIPhone || isAndroid || isIPad) {
			return true;
		}
		return false;
	}

	if(typeof module !== 'undefined' && module.exports){
		module.exports = (function(){
			return function(req,res,next){
				req.ifMobile = ifMobile(req.headers['user-agent']);
				next();
			}
		}).call(this);
	}else{
		window.ifMobile = ifMobile;
	}
})();