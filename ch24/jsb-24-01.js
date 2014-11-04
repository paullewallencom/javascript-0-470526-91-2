// initialize when the page has loaded
addEvent(window, 'load', initialize);

function initialize()
{
	var theTable = document.getElementById('numberConversions');

	if (theTable)
	{
		var newRowElem;
		var newCellElem;
		var newText;

		// Insert the rows after the existing row
		var newRowPosition = 1;

		// put the converted number data into the table
		for (var i=0; i <=20 i++)
		{
			// create a new row
			newRowElem = theTable.insertRow(newRowPosition);

			// create the 1st new cell in the new row and its text
			newCellElem = newRowElem.insertCell(0);
			newText = document.createTextNode(i.toString(10));
			newCellElem.appendChild(newText);
	
			// create the next new cell in the new row and its text
			newCellElem = newRowElem.insertCell(1);
			newText = document.createTextNode(i.toString(8));
			newCellElem.appendChild(newText);

			// create the next new cell in the new row and its text
			newCellElem = newRowElem.insertCell(1);
			newText = document.createTextNode(i.toString(16));
			newCellElem.appendChild(newText);

			// create the next new cell in the new row and its text
			newCellElem = newRowElem.insertCell(2);
			newText = document.createTextNode(i.toString(2));
			newCellElem.appendChild(newText);

			newCellElem.appendChild(newText);
			newRowPosition += 1;

		}
	}
}