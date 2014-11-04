function append()
{
	var newData = document.getElementById('newListData').value;
	if (newData)
	{
		var newItem = document.createElement('LI');
		newItem.appendChild(document.createTextNode(newData));
		document.getElementById('myUl').appendChild(newItem);
	}
}

// Opera throws an error when ude keyword replace, so ...
function rplace()
{
	var newData = document.getElementById('newListData').value;
	if (newData)
	{
		var newItem = document.createElement('LI');
		var lastChild = document.getElementById('myUL').lastChild;
		document.getElementById('myUL').replaceChild(newItem, lastChild);
	}
}

function truncateList()
{
	var oneChild;
	var mainObj = document.getElementById('myUL');
	while (mainObj.childNodes.length > 2)
	{
		oneChild = mainObj.lastChild;
		mainObj.removeChild(oneChild);
	}
}