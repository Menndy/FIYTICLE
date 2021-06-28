function loadNextImg() {
	if(showImage) showImage=!showImage;
	imgIndex++;
	if(imgIndex>=eachCategoryLen[categoryIndex]){
		imgIndex=0;
		categoryIndex++;
	}
	if(categoryIndex>=imageNamesCategory){
		imgIndex=0;
		categoryIndex=0;
	}

	loadImg(imgNames[categoryIndex][imgIndex]);
}

function loadPriorImg() {
	if(showImage) showImage=!showImage;
	imgIndex--;
	if(imgIndex<=0&&categoryIndex>0){
		categoryIndex--;
		imgIndex=eachCategoryLen[categoryIndex]-1;
	}
	if(imgIndex<=0&&categoryIndex<=0){
		imgIndex=eachCategoryLen[imageNamesCategory-1]-1;
		categoryIndex=imageNamesCategory-1;		
	}

	loadImg(imgNames[categoryIndex][imgIndex]);
}


function loadImg(imgName) {
	loadImage(imgName, newImg => {
    img = newImg;
		img.loadPixels();
		img.resize(IMG_RESIZED_WIDTH, 0);
		spawnParticles();
  });
}

// Collects valid positions where a particle can spawn onto.
function setupImg() {
	indices = [];
	
	for (let x = 0; x < img.width; x+=IMG_SCAN_STEPS * 4) {
		for (let y = 0; y < img.height; y+=IMG_SCAN_STEPS * 4) {
			let index = (x + y * img.width) * 4;
			
			let a = img.pixels[index + 3];
			if (a > 10) {
				indices.push(index);
			}
		}
	}
}

function spawnParticles() {
	particles = [];
	
	setupImg();
	
	maxSize = map(
		particleCount, 
		MIN_PARTICLE_COUNT, MAX_PARTICLE_COUNT, 
		MAX_PARTICLE_SIZE, MIN_PARTICLE_SIZE);
	
	if (indices.length == 0) {
		return;
	}
	
	for (let i = 0; i < particleCount; i++) {
		let max_attempts = 20;
		let attempts = 0;
		let newParticle = null;

		// Pick a random position from the active image and attempt to spawn a valid particle.
		while (newParticle == null) {
			let index = indices[int(random(indices.length))];
			
			let x = (index / 4) % img.width;
			let y = (index / 4) / img.width;
			
			let r = img.pixels[index];
			let g = img.pixels[index + 1];
			let b = img.pixels[index + 2];
			let a = img.pixels[index + 3];
			
			if (particles.length > 0) {
				let smallestSize = null;
				
				for (let i = 0; i < particles.length; i++) {
					let otherParticle = particles[i];
					let d = dist(x, y, otherParticle.target.x, otherParticle.target.y);
					let newSize = (d - (otherParticle.size / 2)) * 2;
					
					if (smallestSize == null || newSize < smallestSize) {
						smallestSize = newSize;
					}
				}
				
				if (smallestSize > 0) {
					newParticle = new Particle(
						x, y, 
						min(smallestSize, maxSize) * 0.75, 
						color(r, g, b, a));
				}
			} else {
				newParticle = new Particle(
					x, y, 
					maxSize,
					color(r, g, b, a));
			}
			
			attempts += 1;
			if (attempts > max_attempts) {
				break;
			}
		}

		if (newParticle != null) {
			particles.push(newParticle);	
		}
	}
}


function changeEllipseStyle(){
	drawType=0
}

function changeRectStyle(){
	drawType=1
}

function changeTriangleStyle(){
	drawType=2
}

function showImageOrNot(){
	showImage=!showImage;
	imageAlpha=255
	textAlpha=0
}

function changeParticle(){
	particleCount = min(particleCount + 50, MAX_PARTICLE_COUNT);//max+
	particleCount = max(particleCount - 50, MIN_PARTICLE_COUNT);//min-
	spawnParticles();
}


function saveImage(){
	save('myexplore.png')
}

function SliderLayout(label, minValue, maxValue, defaultValue, steps, posx, posy) {
  
	this.label = label;
	this.slider = createSlider(minValue, maxValue, defaultValue, steps).addClass("particleCountSlider");
	this.slider.position(posx, posy);
	
	this.display = function() {
	  var sliderPos = this.slider.position();
	  
	  noStroke();
	  fill(0);
	  textSize(15);
	  text(this.label, sliderPos.x, sliderPos.y-10);
  
	  fill(0);
	  text(this.slider.value(), sliderPos.x+this.slider.width+10, sliderPos.y+10);
	 
	}
  }