function addRow(item1)
{
	if (item1)
	{
		// assign long reference to shorter var name
		var theTable = document.getElementById('myTable');

		// append new row to the end of the table
		var newRow = theTable.insertRow(theTable.rows.length);

		//give the row its own ID
		newRow.id = newRow.uniqueID;

		// declare cell variable and data variable
		var newCell;
		var newText;

		// an inserted row has no cells, so insert the cells
		newCell = newRow.insertCell(0);

		// give this cell its own id
		newCell.id = newCell.uniqueID;

		// display the row's id as the cell text
		newText = document.createTextNode(newRow.id);
		newCell.appendChild(newText);
		newCell.bgcolor = "yellow";

		// re-use cell var for second cell insertion
		newCell = newRow.insertCell(1);
		newCell.id = newCell.uniqueID;
		newText = document.createTextNode(item1);
		newCell.appendChild(newText);
	}
}