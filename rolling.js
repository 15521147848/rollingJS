function Roll(obj){
	//容器样式初始化
	contentStyle(obj);
	//添加图片
	addImg(obj.img,obj.el,obj.type,obj.time,obj.speed);
	//添加小圆点
}	
//容器样式初始化
function contentStyle(obj){
	var el = obj.el;
	var width = obj.width;
	var height = obj.height;
	el.style.width = width+'px';
	el.style.height = height+'px';
	el.style.position = 'relative';
	el.style.overflow = 'hidden';
}
//添加图片
function addImg(img,el,type,time,speed){
	var length = img.length;
	var contentWidth = parseInt(el.style.width);
	var contentHeight = parseInt(el.style.height);
	var imgContent = document.createElement('div');
	var imgContent2 = document.createElement('div');
	switch(type){
		case "left":
		var width = (contentWidth*length);
		imgContent.style.width = width+'px';
		imgContent.style.height = contentHeight+'px';
		imgContent.style.position = 'absolute';
		imgContent2.style.width = width+'px';
		imgContent2.style.height = contentHeight+'px';
		imgContent2.style.position = 'absolute';
		imgContent.style.left = '0';
		imgContent.style.top = '0';
		imgContent2.style.left = contentWidth+'px';
		imgContent2.style.top = '0';
		imgContent.setAttribute("class",'imgContent1');
		imgContent2.setAttribute("class",'imgContent2');
		for(var i=0;i<length;i++){
			var image = document.createElement("img");
			image.setAttribute('src',img[i]);
			image.style.width = contentWidth+'px';
			image.style.height = contentHeight+'px';
			image.style.float = 'left';
			var image2 = document.createElement("img");
			image2.setAttribute('src',img[i]);
			image2.style.width = contentWidth+'px';
			image2.style.height = contentHeight+'px';
			image2.style.float = 'left';
			imgContent2.appendChild(image2);
			imgContent.appendChild(image);
		}
		el.appendChild(imgContent);
		el.appendChild(imgContent2);
		rollLeft(imgContent,imgContent2,width,contentWidth,time,speed);
	case "right":
		var width = (contentWidth*length);
		imgContent.style.width = width+'px';
		imgContent.style.height = contentHeight+'px';
		imgContent.style.position = 'absolute';
		imgContent2.style.width = width+'px';
		imgContent2.style.height = contentHeight+'px';
		imgContent2.style.position = 'absolute';
		imgContent.style.left = '0';
		imgContent.style.top = '0';
		imgContent2.style.left = (-width)+'px';
		imgContent2.style.top = '0';
		imgContent.setAttribute("class",'imgContent1');
		imgContent2.setAttribute("class",'imgContent2');
		for(var i=0;i<length;i++){
			var image = document.createElement("img");
			image.setAttribute('src',img[i]);
			image.style.width = contentWidth+'px';
			image.style.height = contentHeight+'px';
			image.style.float = 'left';
			var image2 = document.createElement("img");
			image2.setAttribute('src',img[i]);
			image2.style.width = contentWidth+'px';
			image2.style.height = contentHeight+'px';
			image2.style.float = 'left';
			imgContent2.appendChild(image2);
			imgContent.appendChild(image);
		}
		el.appendChild(imgContent);
		el.appendChild(imgContent2);
		rollRight(imgContent,imgContent2,width,contentWidth,time,speed);
	case "up":
		var height = (contentHeight*length);
		imgContent.style.width = contentWidth+'px';
		imgContent.style.height = height+'px';
		imgContent.style.position = 'absolute';
		imgContent.style.fontSize = '0';
		imgContent2.style.width = contentWidth+'px';
		imgContent2.style.height = height+'px';
		imgContent2.style.position = 'absolute';
		imgContent2.style.fontSize = '0';
		imgContent.style.left = '0';
		imgContent.style.top = '0';
		imgContent2.style.left = '0';
		imgContent2.style.top = contentHeight+'px';
		imgContent.setAttribute("class",'imgContent1');
		imgContent2.setAttribute("class",'imgContent2');
		for(var i=0;i<length;i++){
			var image = document.createElement("img");
			image.setAttribute('src',img[i]);
			image.style.width = contentWidth+'px';
			image.style.height = contentHeight+'px';
			var image2 = document.createElement("img");
			image2.setAttribute('src',img[i]);
			image2.style.width = contentWidth+'px';
			image2.style.height = contentHeight+'px';
			imgContent2.appendChild(image2);
			imgContent.appendChild(image);
		}
		el.appendChild(imgContent);
		el.appendChild(imgContent2);
		rollUp(imgContent,imgContent2,height,contentHeight,time,speed);
case "down":
		var height = (contentHeight*length);
		imgContent.style.width = contentWidth+'px';
		imgContent.style.height = height+'px';
		imgContent.style.position = 'absolute';
		imgContent.style.fontSize = '0';
		imgContent2.style.width = contentWidth+'px';
		imgContent2.style.height = height+'px';
		imgContent2.style.position = 'absolute';
		imgContent2.style.fontSize = '0';
		imgContent.style.left = '0';
		imgContent.style.top = '0';
		imgContent2.style.left = '0';
		imgContent2.style.top = contentHeight+'px';
		imgContent.setAttribute("class",'imgContent1');
		imgContent2.setAttribute("class",'imgContent2');
		for(var i=0;i<length;i++){
			var image = document.createElement("img");
			image.setAttribute('src',img[i]);
			image.style.width = contentWidth+'px';
			image.style.height = contentHeight+'px';
			var image2 = document.createElement("img");
			image2.setAttribute('src',img[i]);
			image2.style.width = contentWidth+'px';
			image2.style.height = contentHeight+'px';
			imgContent2.appendChild(image2);
			imgContent.appendChild(image);
		}
		el.appendChild(imgContent);
		el.appendChild(imgContent2);
		rollDown(imgContent,imgContent2,height,contentHeight,time,speed);

	}

}
//从左到右轮播
function rollLeft(img1,img2,width,contentWidth,time,speed){
	go(img1,img2,contentWidth);
	function go(img1,img2,contentWidth){
		var x = 0;
		var y = contentWidth;
		var Interval = setInterval(function(){
			x+=speed;
			img1.style.left = x +'px';
			if(x<=(-width+contentWidth)){
				y-=speed;
				img2.style.left = y +'px';
				if(y <=0){
					clearInterval(Interval);
					img1.style.left = contentWidth+'px';
					go(img2,img1,contentWidth);
				} 
			}
		},time);
	}

}
//从右到左轮播
function rollRight(img1,img2,width,contentWidth,time,speed){
	go(img1,img2,contentWidth);
	function go(img1,img2,contentWidth){
		var x = 0;
		var y = (-width);
		var Interval = setInterval(function(){
			x+=speed;
			img1.style.left = x +'px';
			if(x>0){
				y+=speed;
				img2.style.left = y +'px';
				if(y >=0){
					clearInterval(Interval);
					img1.style.left = (-contentWidth)+'px';
					go(img2,img1,contentWidth);
				} 
			}
		},time);
	}

}
//up轮播
function rollUp(img1,img2,height,contentHeight,time,speed){
	go(img1,img2,contentHeight);
	function go(img1,img2,contentWidth){
		var x = 0;
		var y = contentHeight;
		var Interval = setInterval(function(){
			x-=speed;
			img1.style.top = x +'px';
			if(x<=(-height+contentHeight)){
				y-=speed;
				img2.style.top = y +'px';
				if(y <=0){
					clearInterval(Interval);
					img1.style.top = contentHeight+'px';
					go(img2,img1,contentHeight);
				} 
			}
		},time);
	}

}
//down轮播
function rollDown(img1,img2,height,contentHeight,time,speed){
	go(img1,img2,contentHeight);
	function go(img1,img2,contentWidth){
		var x = 0;
		var y = (-height);
		var Interval = setInterval(function(){
			x+=speed;
			img1.style.top = x +'px';
			if(x>0){
				y+=speed;
				img2.style.top = y +'px';
				if(y >=0){
					clearInterval(Interval);
					img1.style.top = (-contentHeight)+'px';
					go(img2,img1,contentHeight);
				} 
			}
		},time);
	}

}