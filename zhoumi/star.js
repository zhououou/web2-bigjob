//评论信息存储
var comments=["差", "一般", "中等", "还行", "好"];

var picimgs=document.getElementById("pic").children;
var text=document.getElementById("txt");
var clickPos=-1;
console.log(picimgs[0].src);
console.log(picimgs[1].src);
console.log(picimgs[2].src);

function show(index){
	for(var x=(index+1);x<picimgs.length;x++){
		// consloe.log(x);
		picimgs[x].src="imgs/star0.png";
	}
	if(index<2){
		for(var j=0;j<=index;j++){
			picimgs[j].src="imgs/star1.png";
		}
	}
	else{
		for(var j=0;j<=index;j++){
			picimgs[j].src="imgs/star2.png";
		}
	}
	text.value=comments[index]?comments[index]:"";
}

for(var i=0;i<picimgs.length;i++){
	picimgs[i].index=i; //加属性
	//悬浮
	picimgs[i].onmouseover=function(){
		var pos=this.index;
		show(pos);
	};
	//点击
	picimgs[i].onclick=function(){
		clickPos=this.index;
		show(clickPos);
	};
	//离开
	picimgs[i].onmouseout=function(){
		show(clickPos);
	};
}