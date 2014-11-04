function colorAll()
{
	var elems = document.getElementsByTagName('*');
	for (var i = 0; i < elems.length; i++)
	{
		elems[i].style.color = "red";
	}
}

function colorChildBearing()
{
	var elems = document.getElementsByTagName('*');
	for (var i=0; i<elems.length; i++)
	{
		if (elems[i].canHaveChildren)
		{
			elems[i].style.color = "red";
		}
	}
}