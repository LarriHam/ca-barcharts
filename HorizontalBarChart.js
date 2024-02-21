//this defines every object
class HorizontalBarChart {
	constructor(obj){
		this.data = obj.data;
		this.yValue = obj.yValue;
		this.xValue = obj.xValue;
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

		let gap =(this.chartHeight-(this.data.length * this.barWidth))/(this.data.length +1)
		let labels = this.data.map(d => d[this.xValue]);
		let scale = this.chartHeight / max(this.data.map(d=>d[this.yValue]));
		console.log(scale);

		//this loop draws the horizontal elements bars and labels
		push()
		translate(1,-gap);
		for(let i=0; i<this.data.length; i++){
			// draws the bars
			fill (this.barColour);
			noStroke();
			rect (0,0,this.data[i][this.yValue] * scale,-this.barWidth );

			// lables
			fill (this.lableColour)
			noStroke();
			textSize(this.labelTextSize);
			textAlign(RIGHT,CENTER);
			// push and the pop made the text rotate correctly
			push();
			translate(-this.lablePadding, -this.barWidth/2)
			rotate(this.lableRotation);		

			text (labels[i],0, 0);
			pop();

			// moves to the next bar
			translate(0,-gap-this.barWidth)
		}
		pop();	


		//this draws the horizontal elements
		let tickGap = this.chartWidth/this.numTicks;
		let tickValue = max(this.data.map(d=>d[this.yValue]))/this.numTicks;
		for(let i=0; i<=this.numTicks; i++){
			stroke(this.tickColour);
			line(i*tickGap,0,i*tickGap,15);

			fill (this.lableColour)
			noStroke();
			textSize(this.lableTextSize);
			textAlign(CENTER);
			text(round(tickValue*i),i*tickGap , 30); //PADDING!!!!!!!!!!!!!! NO HARDCODING U SUCK
		}
		

		pop ();
	}
}