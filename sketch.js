let barCharts = [];
let data1;
let data2;
let cleanData1=[];
let cleanData2=[];	
let numRows1;
let numRows2;

function preload(){
	data1 = loadTable("data/road_fatalities_2023.csv", "csv", "header");
	data2 = loadTable("data/full_driving_permit.csv", "csv", "header");

}

function setup(){
	background(50);
	createCanvas(1050,1000);
	angleMode(DEGREES);
	noLoop();

numRows1 =data1.rows.length;
for(let i=0; i<numRows1; i++){
	cleanData1.push(data1.rows[i].obj)
}

numRows2 =data2.rows.length;
for(let i=0; i<numRows2; i++){
	cleanData2.push(data2.rows[i].obj)
}


let barChart = {
data:cleanData1,
yValue: "VALUE",
xValue: "Month",
chartWidth: 400,
chartHeight: 300,
xPos: 70,
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
	data:cleanData1,
	yValue: "VALUE",
	xValue: "Month",
	chartWidth: 400,
	chartHeight: 300,
	xPos: 570,
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

let stackedBarChart = {
	data:cleanData2,
	yValue: ["Male", "Female"],
	xValue: "Age_Group",
	yTotal: "Total",
	chartWidth: 400,
	chartHeight: 300,
	xPos: 70,
	yPos: 800,
	axisLineColour: "#0f0f0f",
	barWidth: 40,
	lableTextSize:20,
	lablePadding: 10,
	lableColour: ("#0f0f0f"),
	lableRotation:45,
	numTicks: 6,
	tickColour: ("#0f0f0f"),
	title: "Road Fatalities 2023",
	barColour: ["#eb4cfc", "#2739d9"]
	}

barCharts.push(new BarChart(barChart));
barCharts.push(new HorizontalBarChart(horizontalBarChart));
barCharts.push(new StackedBarChart(stackedBarChart));


}

function draw(){
	background("#ededed")

	barCharts.forEach(bar => bar.render())
}

