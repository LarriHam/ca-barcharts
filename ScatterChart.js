//this defines every object
class ScatterChart {
	constructor(obj){
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
		this.yTotal = obj.yTotal;
		this.chartWidth=obj.chartWidth;
		this.chartHeight=obj.chartHeight;
		this.xPos=obj.xPos;
		this.yPos=obj.yPos;
		this.axisLineColour = obj.axisLineColour;
		this.lableTextSize = obj.labelTextSize;
		this.lablePadding = obj.lablePadding;
		this.lableColour =  obj.lableColour;
		this.lableRotation = obj.lableRotation;
		this.barWidth = obj.barWidth;
		this.numTicks = obj.numTicks;
		this.tickColour = obj.tickColour;
		this.title = obj.title;
		this.barColour = obj.barColour;
	}

	render(){
		push ();
		translate (this.xPos,this.yPos);
		stroke (this.axisLineColour);
		line (0,0,0,-this.chartHeight);
		line (0,0,this.chartWidth,0);

		// title
		let titlePosY = (-this.chartHeight-30);
		let titlePosX = (this.chartWidth/2);
		textAlign(CENTER);
		text (this.title, titlePosX, titlePosY);

		let gap =(this.chartWidth-(this.data.length * this.barWidth))/(this.data.length)
		let labels = this.data.map(d => d[this.xValue]);
		let scale = this.chartHeight / max(this.data.map(d=>d[this.yTotal]));
		console.log(scale);

		//this loop draws the horizontal elements bars and labels
		push()
		translate(gap,0);
		for(let i=0; i<this.data.length; i++){
			// draws the bars
			
			noStroke();
			let row = this.data[i];
			push();
			for(let j=0; j<this.yValue.length; j++){
				fill (this.barColour);
				ellipse(0,-row[this.yValue[j]]*scale,this.barWidth,this.barWidth);

			}
			pop();

			// lables
			fill (this.lableColour)
			noStroke();
			textSize(this.labelTextSize);
			textAlign(LEFT,CENTER);
			// push and the pop made the text rotate correctly
			push();
			translate(this.barWidth/2, this.lablePadding)
			rotate(this.lableRotation);		

			text (labels[i],0, 0);
			pop();

			// moves to the next bar
			translate(gap+this.barWidth,0)
		}
		pop();	


		//this draws the vertical elements
		let tickGap = this.chartHeight/this.numTicks;
		let tickValue = max(this.data.map(d=>d[this.yTotal]))/this.numTicks;
		for(let i=0; i<=this.numTicks; i++){
			stroke(this.tickColour);
			line(0,-i*tickGap,-15,-i*tickGap);

			fill (this.lableColour)
			noStroke();
			textSize(this.lableTextSize);
			textAlign(RIGHT,CENTER);
			text(round(tickValue*i), -20, -i*tickGap);
		}
		

		pop ();
	}
}