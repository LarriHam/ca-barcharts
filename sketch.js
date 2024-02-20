let barCharts = [];
let data;
let cleanData=[];

function preload(){
	data = loadTable("data/road_fatalities_2023.csv", "csv", "header");
}

function setup(){
	background(50);
	createCanvas(1000,1000);
	angleMode(DEGREES);
	noLoop();

numRows =data.rows.length;
for(let i=0; i<numRows; i++){
	cleanData.push(data.rows[i].obj)
}


let barChart = {
data:cleanData,
yValue: "VALUE",
xValue: "Month",
chartWidth: 400,
chartHeight: 300,
xPos: 50,
yPos: 400,
axisLineColour: "#0f0f0f",
barWidth: 20,
lableTextSize:20,
lablePadding: 10,
lableColour: ("#0f0f0f"),
lableRotation:45,
numTicks: 6,
tickColour: ("#0f0f0f"),
title: "Road Fatalities 2023",
barColour: "#30c9f0"
}

let horizontalBarChart = {
	data:cleanData,
	yValue: "VALUE",
	xValue: "Month",
	chartWidth: 400,
	chartHeight: 300,
	xPos: 550,
	yPos: 400,
	axisLineColour: "#0f0f0f",
	barWidth: 20,
	lableTextSize:20,
	lablePadding: 10,
	lableColour: ("#0f0f0f"),
	lableRotation:0,
	numTicks: 6,
	tickColour: ("#0f0f0f"),
	title: "Road Fatalities 2023",
	barColour: "#9ef542"
}

barCharts.push(new BarChart(barChart));
barCharts.push(new HorizontalBarChart(horizontalBarChart));


}

function draw(){
	background("#ededed")

	barCharts.forEach(bar => bar.render())
}

