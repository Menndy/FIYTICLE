const SPIN_MULTIPLIER = 45;
const MIN_PARTICLE_COUNT = 200;
const MAX_PARTICLE_COUNT = 700;
const MIN_PARTICLE_SIZE = 12;
const MAX_PARTICLE_SIZE = 50;
const MIN_FORCE = 0.4;
const MAX_FORCE = 0.6;
const REPULSION_RADIUS = 100;
const REPULSION_STRENGTH = 0.25;
const IMG_RESIZED_WIDTH = 350;
const IMG_SCAN_STEPS = 2;

const DrawTypes = {
	Ellipse: 0,
	Rect: 1,
	Triangle: 2
};

// var imgNames = ["./allImages/卡农系列/GA802070.MWK正面.jpg"];
var imgNames = [['./image/大师系列/大师系列敦煌主题藻井腕表玫瑰金款GA886026.PQK.png'],['./image/风致系列/风致系列LA801008.PLPD正面.png'],['./image/锋逸系列/G622.WBW.png'],['./image/航天系列/GA8070.WBW.png'],['./image/花语系列/飞亚达花语系列 WLA805002.PWPD正面.png'],['./image/极限系列/759 .png'],['./image/经典系列/经典系列DGA29005.MWM正面.png'],['./image/卡农系列/卡农系列LA802059.MWMD-正面.png'],['./image/玲珑系列/L561.WWW正.png'],['./image/马赫系列/GA8540.BBB正面.png'],['./image/祈福系列/祈福系列GA888001.TGT正面.png'],['./image/倾城系列/倾城系列LA865009.PWSD正面.png'],['./image/摄影师系列/摄影师系列DGA23009.WBB正面.png'],['./image/四叶草系列/四叶草系列LA862031.MWMD正面.png'],['./image/心弦系列/飞亚达表心弦系列LA869009.PKPH正面 (2).png'],['./image/芯动系列/芯动系列GA802076.TWT正面.png'],['./image/印系列/LA850001.PKKD正面.png'],['./image/远洋系列/远洋系列GA867007.WLW正面.png'],['./image/卓雅系列/卓雅系列L800018.MWM正面.png']]

var slogan=['将千百年来世人的虔诚与想象，再现方寸之间，重现敦煌永恒的璀璨','化繁为简，现代简约主义，时间本来就很简单','典雅稳重，与一路向前的你共同见证时间','致敬探索传奇，展望无限可能','花之物语，时之曼妙，格桑花语，干净柔美','人生不设终点，突破极限，直面挑战，越是冒险，越是荣耀','人生路上诸多奇遇，梦想需要睿智与果敢，为猎梦者设计','这曲蓝调，非属凡尘，12个罗马字符组成腕间旋律','玲珑有致，尽显魅力，糅合精致时标，复古不失优雅','制空重器，威龙巡航，飒爽时计，迎风而上','福运连绵，矜贵呈祥，形意相通，寓意圆满','每个【她】都似一颗独立的星球，生活中扮演不同角色的【她们】值得天生闪耀','每个人都是生活的摄影师，时刻发现生活之美','探索东方秘境，代表着“真爱，健康，名誉，财富”的四叶草，在腕间肆意绽放承载幸运之愿，以独特的设计，赋予时光优雅，美好内涵','优雅风格见证独立女性，忠于时间，忠于自我','文艺轻奢，“芯”有所属，你中有我，我中有你','轻复古，慢生活，用态度印刻生活','翻越山海，探索无畏，夜光伴随，指引方向','回归本真，反璞归一，明快年轻，带给你不一样的感受']
var imageNamesCategory=imgNames.length;
var eachCategoryLen=[];

var myFont;
function preload() {
	myFont = loadFont('assets/HYTangMeiRenW.ttf');
  }
for(let i=0;i<imageNamesCategory;i++){
	eachCategoryLen[i]=imgNames[i].length;
}
var particles = [];
var indices = [];
var categoryIndex=0;
var imgIndex = 0;
var drawType = 0;
var particleCount = 550;
var maxSize = 0;
var img;

//控件
var priorImageButton;
var nextImageButton;
var showImage=false;//bool
var nextPriticalButton;
var saveImageButton;

var particleCount;

//使图片由暗变亮
var imageAlpha=255;
var textAlpha=0;

//保存暂停键
var pause=false;

//backgorund 
let p = [];
let num = 300;//max 500
let diagonal;
let rotation = 0;
let senkaiR = 0.05;
let senkaiSpeed = 0.1;



function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.canvas.oncontextmenu = () => false;
	loadImg(imgNames[0][0]);

	diagonal = Math.floor(sqrt(width*width + height * height)/2);
	//init particle
	for (let i = 0; i<num; i++) {
    p[i] = new Particletext();
    p[i].o = random(1, random(1, width/p[i].n));
  }
  
	particleCountSlider = new SliderLayout("Particle Count", MIN_PARTICLE_COUNT, MAX_PARTICLE_COUNT, 550, 50, 100, 40);

	priorImageButton = createButton("").addClass('prevImage');
	priorImageButton.position(50, 100);
	priorImageButton.mousePressed(loadPriorImg);

	nextImageButton = createButton("").addClass('nextImage');
	nextImageButton.position(100, 100);
	nextImageButton.mousePressed(loadNextImg);

	showImageButton = createButton("切换").addClass('showImage');
	showImageButton.position(100, 200);
	showImageButton.mousePressed(showImageOrNot);

	saveImageButton = createButton("保存").addClass('saveImage');
	saveImageButton.position(100, 200);
	saveImageButton.mousePressed(saveImage);

	particleCountSlider.display();

	ellipseButton = createButton("").addClass('ellipseParticle');
	ellipseButton.position(100, 200);
	ellipseButton.mousePressed(changeEllipseStyle);

	rectButton = createButton("").addClass('rectParticle');
	rectButton.position(100, 200);
	rectButton.mousePressed(changeRectStyle);

	triangleButton = createButton("").addClass('triangleParticle');
	triangleButton.position(100, 200);
	triangleButton.mousePressed(changeTriangleStyle);

	
	 

}

let recordValue;
function draw() {
	background(0);
	recordValue=particleCount
	fill(255);
	noStroke();

	
	if (img == null) {
		return;
	}
	if(showImage){
		fill(255,255,255,textAlpha>=255?255:textAlpha)
		textSize(40);  
		textFont('Georgia');
		text("FIYTA",350,330)
		textSize(20);  
		text("飞亚达",375,400)
	}

	
	push();
	translate(width / 2 - img.width / 2-50, height / 2 - img.height / 2-30);
	
	fill(255);
	noStroke();
	
	rectMode(CENTER);
	if(!showImage){
		particleCount= particleCountSlider.slider.value()
		if(particleCount!==recordValue) spawnParticles()
	particles.forEach(particle => {
		particle.move();
		
		push();
		translate(particle.pos.x, particle.pos.y);
		
		let spin = particle.vel.mag() * SPIN_MULTIPLIER;
		rotate(radians(particle.mapped_angle + spin));
		
		fill(particle.color);
		
		switch(drawType) {
			case DrawTypes.Ellipse:
				ellipse(0, 0, particle.size, particle.size);
				break;
			case DrawTypes.Rect:
				rect(0, 0, particle.size, particle.size);
				break;
			case DrawTypes.Triangle:
				triangle(
					particle.size * -0.5, particle.size * -0.5, 
					0, particle.size, 
					particle.size * 0.5, particle.size * -0.5);
				break;
		}
		pop();
	});
}
	rectMode(CORNER);
	
	if (showImage) {
		//旋回
		push()
		let r = map(frameCount*senkaiSpeed%30,0,30,HALF_PI*-1,HALF_PI*3);
		let rad = width*senkaiR*sin(frameCount/100);
		translate(img.width / 2+cos(r)*rad, img.height / 2+sin(r)*rad);

		rotation-=0.002;
		rotate(rotation);

		for (let i = 0; i<p.length; i++) {
			p[i].textdrawit();
			//reset particle
		if (p[i].drawDist()>diagonal*1.5) {
			p[i] = new Particletext();
			}
		}
		pop()

		//-------------------------------------
		noStroke();
		image(img, 0, 0);
		// fill(0,0,0,mouseSizeSlider.slider.value())
		fill(0,0,0,imageAlpha>=0?imageAlpha-=3:0)
		rect(0,0,img.width,img.height)
		textSize(118);
		textFont(myFont);
		stroke(255,textAlpha>=255?255:textAlpha);
		strokeWeight(2);
		fill(255, 250, 255, 0);
		textAlign(CENTER, TOP);
		let theme=imgNames[categoryIndex][imgIndex].split('/')[2]
		let themeSplit=theme.split('');
		for(let i=0;i<themeSplit.length-2;i++){
			text(themeSplit[i], 550,0+i*130);
		}
		textSize(30);  
		let index;
		if(themeSplit.length===4) index=120;
		else if(themeSplit.length===5) index=210;
		else index=40
		for(let i=themeSplit.length-2;i<themeSplit.length;i++){
			text(themeSplit[i], 670,index+i*40);
		}
		

		fill(255,255,255,textAlpha>=255?255:textAlpha+=3)
		rect(635,210+130*(themeSplit.length-4),3,70)
		// textSize(40);  
		// textFont('Georgia');
		// text("Flyta",-150,180)
		// textSize(20);  
		// text("飞亚达",-150,250)

		textSize(12);
		noStroke()
		textFont('Georgia');
		let solganCurrent=slogan[categoryIndex]
		let solganLen=solganCurrent.length;
		let num=int(solganLen/12);
	
		for(let i=0;i<num+1;i++){
			text(solganCurrent.substring(0+i*12,i*12+12), 550,index+210+i*18,70,80);
		}
			
		

	}
	
	pop();
}


function mousePressed(){
	if(mouseButton == RIGHT){
		pause=!pause
		if(pause) noLoop()
		else loop()
	}
	
}

class Particletext {
	
	constructor(){
		this.alpha = 1;
		this.n = random(1, width/2);
    	this.rotate = random(0, TWO_PI);//rotation Offset
    	this.o = random(1, random(1, width/this.n));
		this.type = Math.floor(random(3));
		this.speed = 0.07;//●speed
		this.sizeMulti = 0.1;//●size
		this.c = color(255,255,255);//●color
	}
	
 
  	textdrawit(){
		this.alpha++;
		push();
		rotate(this.rotate);
		translate(0, this.drawDist());
		fill(red(this.c),green(this.c),blue(this.c), min(this.alpha, 180));
			let size = width/this.o*this.sizeMulti;
			
			if(this.type == 0){
				drawDottypo(0,0,size,second(),0);//drawMode
			}else if(this.type == 1){
				drawDottypo(0,0,size,minute(),1);//drawMode
			}else{
				drawDottypo(0,0,size,hour(),2);//drawMode
			}
		pop();
    	this.o-=this.speed;
  }
  
	drawDist() {
    return atan(this.n/this.o)/HALF_PI*width;
  }
}





