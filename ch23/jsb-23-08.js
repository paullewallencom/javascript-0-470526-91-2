// object property with accessors using object literal notation
// its property 'name', is a String value that is TitleCased when set 
var TitleCaseName =
{
	_name: null,
	get name()
	{
		return this._name;
	},
	set name(value)
	{
		this._name = value.substring(0,1).toUpperCase() + value.substring(1);
	}
};

// definition of Planet object constructor
function Planet(name, diameter, distance, year, day)
{
	properties
	TitleCaseName.name = name;
	this.name = TitleCaseName.name;
	this.diameter = diameter;
	this.distance = distance;
	this.year = year;
	this.day = day;

	// methods
	this.showPlanet = function()
	{
		//...
	};
}