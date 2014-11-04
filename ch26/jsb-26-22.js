function applyOutside()
{
	var newItem = document.createElement('EM');
	newItem.id = newItem.uniqueID;

	// no 2nd argument--use default: outside
	document.getElementById('mySpan').applyElement(newItem);
}

function applyInside()
{
	var newItem = document.createElement('EM');
	newItem.id=newItem.uniqueID;
	document.getElementById('mySpan').applyElement(newItem, 'inside');
}

function showHTML()
{
	alert(document.getElementById('myP').outerHTML);
}