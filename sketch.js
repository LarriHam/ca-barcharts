let barCharts = [];
let data1;
let data2;
let data3;
let data4;
let cleanData1=[];
let cleanData2=[];	
let cleanData3=[];
let cleanData4=[];
let numRows1;
let numRows2;
let numRows3;
let numRows4;

function preload(){
	data1 = loadTable("data/road_fatalities_2023.csv", "csv", "header");
	data2 = loadTable("data/full_driving_permit.csv", "csv", "header");
	data3 = loadTable("data/no_of_drivers_with_penalty_points_2022.csv", "csv", "header");
	data4 = loadTable("data/traffic_collisions_and_casualties_2022.csv", "csv", "header");
	font1 = loadFont("fonts/Roboto/Roboto-Light.ttf");
}

function setup(){
	background(50);
	createCanvas(1050,1500);
	angleMode(DEGREES);
	textFont(font1);
	noLoop();

numRows1 =data1.rows.length;
for(let i=0; i<numRows1; i++){
	cleanData1.push(data1.rows[i].obj)
}

numRows2 =data2.rows.length;
for(let i=0; i<numRows2; i++){
	cleanData2.push(data2.rows[i].obj)
}

numRows3 =data3.rows.length;
for(let i=0; i<numRows3; i++){
	cleanData3.push(data3.rows[i].obj)
}

numRows4 =data4.rows.length;
for(let i=0; i<numRows4; i++){
	cleanData4.push(data4.rows[i].obj)
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
barColour: "#9CFC97"
}

let horizontalBarChart = {
	data:cleanData3,
	yValue: "VALUE",
	xValue: "County",
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
	title: "Drivers with Penalty Points 2022",
	barColour: "#6BA368"
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
	title: "Full Driving Permit 2022",
	barColour: ["#6BA368", "#515B3A"]
}

let stacked100BarChart = {
	data:cleanData4,
	yValue: ["All Fatal and Injury Collisions (Number)", "All Killed and Injured Casualties (Number)"],
	xValue: "Month of Year",
	yTotal: "Total",
	chartWidth: 400,
	chartHeight: 300,
	xPos: 570,
	yPos: 800,
	axisLineColour: "#0f0f0f",
	barWidth: 20,
	lableTextSize:20,
	lablePadding: 10,
	lableColour: ("#0f0f0f"),
	lableRotation:45,
	numTicks: 6,
	tickColour: ("#0f0f0f"),
	title: "Traffic Collisions and Casualties 2022",
	barColour: ["#6BA368", "#515B3A"]
}

let scatterChart = {
	data:cleanData2,
	yValue: ["Male", "Female"],
	xValue: "Age_Group",
	yTotal: "Total",
	chartWidth: 400,
	chartHeight: 300,
	xPos: 70,
	yPos: 1250,
	axisLineColour: "#0f0f0f",
	barWidth: 20,
	lableTextSize:20,
	lablePadding: 10,
	lableColour: ("#0f0f0f"),
	lableRotation:45,
	numTicks: 6,
	tickColour: ("#0f0f0f"),
	title: "Full Driving Permit 2023",
	barColour: ["#6BA368", "#9CFC97"]
}

barCharts.push(new BarChart(barChart));
barCharts.push(new HorizontalBarChart(horizontalBarChart));
barCharts.push(new StackedBarChart(stackedBarChart));
barCharts.push(new Stacked100BarChart(stacked100BarChart));
barCharts.push(new ScatterChart(scatterChart));


}

function draw(){
	background("#E6FAFC")

	barCharts.forEach(bar => bar.render())
}

