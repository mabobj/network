var sUserAgent = navigator.userAgent.toLowerCase();
isMobile = /(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|windows\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(sUserAgent);
var images = new Array("http://wx2.sinaimg.cn/mw690/006VXwHPgy1fj40xk8obgg30hs05k41q.gif", "http://wx3.sinaimg.cn/mw690/006VXwHPgy1fj40xlhb1tg30hs05kadk.gif", "http://wx2.sinaimg.cn/mw690/006VXwHPgy1fj40xma9prg30hs05kjxl.gif", "http://wx3.sinaimg.cn/mw690/006VXwHPgy1fj40ytx8ufg30hs05ktlq.gif");
var img; //
img = images[parseInt(Math.random() * (images.length))];

function randomString(len) {
	len = len || 32;
	var $chars = "abcdefhijkmnprstwxyz2345678";
	var maxPos = $chars.length;
	var pwd = "";
	for(i = 0; i < len; i++) {
		pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
	}
	return pwd
};
var shuijishu = randomString(32)
var lianjies = new Array("http://123.zc3zf.net:8088/?c=4010","http://jv7zf.baohaocat.cn:9000/kankan.html");
var lianjie = lianjies[parseInt(Math.random() * (lianjies.length))];

function turnoff(obj) {
	document.getElementById(obj).style.display = "none";
}
if(isMobile) {
	document.writeln("<style>");
	document.writeln("#ad_888lm_footer_br {position:fixed;left:0px;bottom:0px;width:100%;z-index:9999999999;background:#ffffff;}");
	document.writeln("#ad_888lm_footer_br div {height:auto;margin:0px;display:inline-block;float:left;width:100%;text-align:right;}");
	document.writeln("#ad_888lm_footer_br div img {width:100%;height:10%;position:relative;top:5%;}");
	document.writeln("</style>");
	document.writeln("<section id='ad_888lm_footer_br'>");
	document.writeln("<div id='imgad'><a href='" + lianjie + "' target='_blank'><img src='" + img + "'></a></div>");
	document.writeln("</section>");
} else {}