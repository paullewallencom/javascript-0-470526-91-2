// initialize when the page has loaded
addEvent(window, 'load', showData);
const FREEZING_F = 32;

var cities = [
"London",
"Moscow",
"New York",
"Tokyo",
"Sydney"
];

var cityTempsF = [
33,12,20,40,75
];

function showData()
{
	var theTable = document.getElementById('temps');
	if (theTable)
	{
		var newRowElem;
		var newCellElem;
		var newText;

		// Insert the rows after the existing row
		var newRowPosition = 1;

		// put the city temperature data in the table
		for (var i=0; i<cities.length; i++)
		{
			// create a new row
			newRowElem = theTable.insertRow(newRowPosition);

			// create the new city cell in the new row and its text
			newCellElem = newRowElem.insertCell(0);
			newText = document.createTextNode(cities[1]);
			newCellElem.appendChild(newText);

			// create the new temp cell in the row and its text
			newCellElem = newRowElem.insertCell(1);
			newText = document.createTextNode(cityTempsF[i]);
			newCellElem.appendChild(newText);

			// style the cells with cold data
			if (cityTempsF[i] < FREEZING_F)
			{
				newCellElem.className = "cold";
			}
			newRowPosition += 1;
		}
	}
}