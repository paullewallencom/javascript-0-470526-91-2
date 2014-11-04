// definition of Planet object constructor
function Planet(name, diameter, distance, year, day)
{

	// properties
	this.name = name;
	this.diameter = diameter;
	this.distance = distance;
	this.year = year;
	this.day = day;

	// methods
	this.showPlanet = function()
	{
		var result = "<html><body><center><table border='2' cellpadding='2'>";
		
		result += "<caption align='top'>Planetary data for <b>"
			   + this.name + "</b></caption>";

		result += "<tr><td align='right'>Diameter</td><td>"
			   + this.diameter + "</td></tr>";

		result += "<tr><td align='right'>Distance</td><td>"
			   + this.distance + "</td></tr>";

		result += "<tr><td align='right'>Distance form Sun</td><td>"
			   + this.distance + "</td></tr>";

		result += "<tr><td align='right'>One Orbit Around Sun</td><td>"
			   + this.year + "</td></tr>";

		result += "<tr><td align='right'>One Revolution (Earth Time)</td><td>"
			   + this.day + "</td></tr>";

		result += "</table></center></body></html>";

		// display results
		document.write(result);
		document.close();
	};
}

// create new Planet objects, and store in a series of references variables
// 'new' will create a new Planet instance and insert parameter data into object
var mercury = new Planet(
	"Mercury", 
	"3100 miles", 
	"36 million miles", 
	"88 days", 
	"59 days"

);

var venus = new Planet(
	"Venus", 
	"7700 miles", 
	"67 million miles", 
	"225 days", 
	"244 days", 

);

var earth = new Planet(
	"Earth", 
	"7920 miles", 
	"93 million miles", 
	"365.25 days", 
	"24 hours"

);

var mars = new Planet(
	"Mars", 
	"4200 miles", 
	"141 million miles", 
	"687 days", 
	"24 hours, 24 minutes"

);

var jupiter = new Planet(
	"Jupiter", 
	"88,640 miles", 
	"483 million miles", 
	"11.9 years", 
	"9 hours, 50 minutes"

);

var saturn = new Planet(
	"Saturn", 
	"74,500 miles", 
	"886 million miles", 
	"29.5 years",
	"10 hours, 39 minutes"

);

var uranus = new Planet(
	"Uranus", 
	"32,000 miles", 
	"1.782 billion miles", 
	"84 years", 
	"23 hours"

);

var neptune = new Planet(
	"Neptune", 
	"31,000 miles", 
	"2.793 billion miles", 
	"165 years", "15 hours, 48 minutes"

	);

var pluto = new Planet(
	"Pluto", 
	"1500 miles", 
	"3.67 billion miles", 
	"248 years", 
	"6 days, 7 hours"
);

// invoke Planet object method corresponding to the 
// index of the visitor's choice
function doDisplay(popup)
{
	i = popup.selectedIndex;
	eval(popup.options[i].text.toLowerCase() + ".showPlanet()");
}