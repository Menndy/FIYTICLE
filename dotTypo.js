
const widDotNum = 3;
const heiDotNum = 5;

//●
const typosData = [
	[//0
		[1,1,1],
		[1,0,1],
		[1,0,1],
		[1,0,1],
		[1,1,1]
	],
	[//1
		[1,1,0],
		[0,1,0],
		[0,1,0],
		[0,1,0],
		[1,1,1]
	],
	[//2
		[1,1,1],
		[0,0,1],
		[1,1,1],
		[1,0,0],
		[1,1,1]
	],
	[//3
		[1,1,1],
		[0,0,1],
		[1,1,1],
		[0,0,1],
		[1,1,1]
	],
	[//4
		[1,0,1],
		[1,0,1],
		[1,1,1],
		[0,0,1],
		[0,0,1]
	],
	[//5
		[1,1,1],
		[1,0,0],
		[1,1,1],
		[0,0,1],
		[1,1,1]
	],
	[//6
		[1,1,1],
		[1,0,0],
		[1,1,1],
		[1,0,1],
		[1,1,1]
	],
	[//7
		[1,1,1],
		[1,0,1],
		[0,0,1],
		[0,0,1],
		[0,0,1]
	],
	[//8
		[1,1,1],
		[1,0,1],
		[1,1,1],
		[1,0,1],
		[1,1,1]
	],
	[//9
		[1,1,1],
		[1,0,1],
		[1,1,1],
		[0,0,1],
		[1,1,1]
	]
];


function drawDottypo(tx,ty,size,num,mode){
	ellipseMode(CENTER);
	rectMode(CENTER);
	noStroke();
	let typeData = getNumtypoArray(num);//描画
	let unitSize = size/widDotNum;
	let startPosX = tx - unitSize*(typeData[0].length/2) + unitSize*0.5//开始x位置
	let startPosY = ty - unitSize*(typeData.length/2) + unitSize*0.5//开始y位置

	for(let y = 0; y < typeData.length; y ++){
		for(let x = 0; x < typeData[y].length; x ++){
			if(typeData[y][x] ==1){
				if(mode == 0){//custom drawMode
					ellipse(startPosX + unitSize*x,startPosY + unitSize*y,unitSize*0.8,unitSize*0.8);
				}else if(mode == 1){//custom drawMode
					rect(startPosX + unitSize*x,startPosY + unitSize*y,unitSize*0.9,unitSize*0.9);
				}else if(mode == 2){//custom drawMode
					quad(startPosX + unitSize*x + unitSize*0.5,startPosY + unitSize*y,
							 startPosX + unitSize*x,startPosY + unitSize*y + unitSize*0.5,
							 startPosX + unitSize*x + unitSize*0.5,startPosY + unitSize*y + unitSize,
							 startPosX + unitSize*x + unitSize,startPosY + unitSize*y + unitSize*0.5
							);
				}else if(mode == 3){//custom drawMode
					ellipse(startPosX + unitSize*x,startPosY + unitSize*y,unitSize*0.2,unitSize*0.2);
				}
				
			}
		}
	}
}


function getNumtypoArray(num){
	let numStr = String(num);
	let array = [];
		for(let i = 0; i < heiDotNum; i++){
			array[i] = [];
		}
	
	for(let i = 0; i < numStr.length; i++){
		let n = Number(numStr.charAt(i));
		for(let j = 0; j < array.length; j ++){
			if(i != 0)array[j].push(0);//space
			Array.prototype.push.apply(array[j], typosData[n][j]);
		}
	}
	return array;
}