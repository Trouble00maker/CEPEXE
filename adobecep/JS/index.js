window.alert = function(msg){
 var iframe = document.createElement("IFRAME");
iframe.style.display="none";
iframe.setAttribute("rsc", '5465465465');
document.documentElement.appendChild(iframe);
window.frames[0].window.alert(msg);
iframe.parentNode.removeChild(iframe);
}
window.onload = function(){
	if (!localStorage.PSCEPCOLORCHECK) {			
			var ipt = document.createElement("input");
			ipt.type="text";ipt.placeholder="请输入您的激活码";ipt.id="ipt";
			document.getElementsByTagName("body")[0].appendChild(ipt);
			var div	= document.createElement("div");
			div.id="binding";div.innerHTML="提交";div.setAttribute("onclick","binding()");
			document.getElementsByTagName("body")[0].appendChild(div);
		}
		else{
			funInterface_2();
	}
}
function binding(){
	var versionType = "color";
	var version =1;
	var code = document.getElementById("ipt").value;
	if (code.length===6) {
		if(navigator.onLine)
			{
				$.ajax({
					url:'http://188.131.151.49:8001/api/active',
					type:'POST',
					data:{
						code:code,
						versionType:versionType,
						version:version
					},
					header:{
						Origin:'http://188.131.151.49/'
					},
					success:function(ret)
					{
						if(ret.data==0){
		                	alert("您尚未注册本插件\n或者输入的激活码有误,请核对\n如有疑问请联系客服,感谢您的使用");
						}else if(ret.data==1){
							localStorage.setItem("PSCEPCOLORCHECK",code);
							funInterface_1();
						}else if(ret.data==2){
		                	alert("每个激活码仅限三台设备上激活并使用\n您以达到设备上限\n感谢您的使用");
						}
					},
					error:function(err)
					{
						console.log(err);
					}
				});
			}
		else{alert("请联网使用本插件!");}
	}
	else{alert("请输入正确的激活码!");};
}
function funInterface_1(){
	var text = document.getElementById("ipt");
	var binding = document.getElementById("binding");
	var body =	document.getElementsByTagName("body")[0];
	body.removeChild(text);
	body.removeChild(binding);
	var btn_1	= document.createElement("input");
	btn_1.id="aKeyExfoliating";btn_1.type="button";btn_1.class="btn";btn_1.value="一键磨皮";btn_1.setAttribute("onclick","click_aKeyExfoliating()");
	document.getElementsByTagName("body")[0].appendChild(btn_1);
	var btn_2	= document.createElement("input");
	btn_2.id="contrastCorrection";btn_2.type="button";btn_2.class="btn";btn_2.value="对比度矫正";btn_2.setAttribute("onclick","click_contrastCorrection()");
	document.getElementsByTagName("body")[0].appendChild(btn_2);	
	var btn_3	= document.createElement("input");
	btn_3.id="fadedFilm";btn_3.type="button";btn_3.class="btn";btn_3.value="褪色胶片";btn_3.setAttribute("onclick","click_fadedFilm()");
	document.getElementsByTagName("body")[0].appendChild(btn_3);	
	var btn_4	= document.createElement("input");
	btn_4.id="purpleJelly";btn_4.type="button";btn_4.class="btn";btn_4.value="紫色软糖";btn_4.setAttribute("onclick","click_purpleJelly()");
	document.getElementsByTagName("body")[0].appendChild(btn_4);
}
function funInterface_2(){
	var btn_1	= document.createElement("input");
	btn_1.id="aKeyExfoliating";btn_1.type="button";btn_1.class="btn";btn_1.value="一键磨皮";btn_1.setAttribute("onclick","click_aKeyExfoliating()");
	document.getElementsByTagName("body")[0].appendChild(btn_1);
	var btn_2	= document.createElement("input");
	btn_2.id="contrastCorrection";btn_2.type="button";btn_2.class="btn";btn_2.value="对比度矫正";btn_2.setAttribute("onclick","click_contrastCorrection()");
	document.getElementsByTagName("body")[0].appendChild(btn_2);	
	var btn_3	= document.createElement("input");
	btn_3.id="fadedFilm";btn_3.type="button";btn_3.class="btn";btn_3.value="褪色胶片";btn_3.setAttribute("onclick","click_fadedFilm()");
	document.getElementsByTagName("body")[0].appendChild(btn_3);	
	var btn_4	= document.createElement("input");
	btn_4.id="purpleJelly";btn_4.type="button";btn_4.class="btn";btn_4.value="紫色软糖";btn_4.setAttribute("onclick","click_purpleJelly()");
	document.getElementsByTagName("body")[0].appendChild(btn_4);
}
var cs =new CSInterface();
var click_aKeyExfoliating = function (){
	cs.evalScript(" do_act(' [一键磨皮] · colocolo.com ','aKeyExfoliating')");
}
var click_contrastCorrection = function (){
	cs.evalScript( "do_act(' [对比度矫正] · colocolo.com ','contrastCorrection')");
}
var click_fadedFilm = function (){
	cs.evalScript("do_act(' [褪色胶片] · colocolo.com','fadedFilm')");
}
var click_purpleJelly = function (){
	cs.evalScript("do_act(' [紫色软糖] · colocolo.com ','purpleJelly')");
}