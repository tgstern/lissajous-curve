function setup(){
  createCanvas(windowWidth, windowHeight);
	
	// create slider to adjust one wavelength of Lissajous curve
	curveSlider = createSlider(100, 180, 120);
	curveSlider.position(width/2 - 100, 20);
	curveSlider.style("width", "200px");
	
	// create slider to adjust color palette base value
	hueSlider = createSlider(0, 360, 100);
	hueSlider.position(width/2 - 100, height - 40);
	hueSlider.style("width", "200px");
	colorMode(HSB);
}

function draw(){
	var curve = curveSlider.value(); // set curve variable to the position of curveSlider
	var hue = hueSlider.value(); // set hue variable to the position of hueSlider
	var amplitude = width / 10; // set amplitude based on window width to ensure a good fit
	
	// center Lissajous animation
	push();
  translate(width/2, height/2); // position in center of canvas
	var x1 = sin(frameCount / 90 * TWO_PI) * amplitude; // set x value based on wavelength of 90
	var y1 = sin(frameCount / curve * TWO_PI) * amplitude; // set variable y value based on slider position
	fill(hue + 50*cos(frameCount/15), 50 + 20*sin(frameCount), 100); // set varying shade based on hue base and oscillating relationship to frameCount, narrow range
	ellipse(x1, y1, 20); // draw ellipse
	pop();
	
	// left Lissajous animation
	push();
	translate(width/4, height/2); // position left of center with equal height
	var x2 = sin(frameCount / 90 * TWO_PI) * amplitude; // set x value based on wavelength of 90
	var y2 = sin(frameCount / curve * TWO_PI) * amplitude; // set variable y value based on slider position
	fill(hue + 100*cos(frameCount/30), 50 + 20*sin(frameCount), 100); // set varying shade based on hue base and oscillating relationship to frameCount, wide range
	ellipse(x2, y2, 20); // draw ellipse
	pop();
	
	// right Lissajous animation
	push();
	translate(3*width/4, height/2); // position right of center with equal height
	var x3 = sin(frameCount / 90 * TWO_PI) * amplitude; // set x value based on wavelength of 90
	var y3 = sin(frameCount / curve * TWO_PI) * amplitude; // set variable y value based on slider position
	fill(hue + 100*cos(frameCount/30), 50 + 20*sin(frameCount), 100); // set varying shade based on hue base and oscillating relationship to frameCount, wide range
	ellipse(x3, y3, 20); // draw ellipse
	pop();
}

// function to clear background on mouse click
function mouseClicked() {
	clear();
}
