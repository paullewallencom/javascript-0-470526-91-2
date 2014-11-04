// initialize when the page has loaded
addEvent(window, 'load', initialize);

var newElem;
var newText;

// define the function that will be the method for the custom object
function customToString()
{
	var dataArray = new Array();
	var count = 0;
	for (var i in this)
	{
		dataArray[count++] = this[i];
		if (count>2)
		{
			break;
		}
	}
	return dataArray.join(",");
}

// define a custom object
var book = {title:"The Aeneid", author:"Virgil", pageCount:543};

// declare a method for the custom object
book.toString = customToString;

// the onload event we identified earlier
function initialize()
{
	var placeHolderElement = document.getElementById('placeHolder');
	if (placeHolderElement)
	{
		// book.toString();
		newElem = document.createElement('h4');
		newText = document.createTextNode(book.toString());

		// insert the text into the new h4
		newElem.appendChild(newText);

		// insert the completed h4 into placeholder
		placeHolderElement.appendChild(newElem);
	}
}