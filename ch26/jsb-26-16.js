function invert()
{
	var form = document.lab;
	for (var i = 0; j = form.elements.length; i < form.elements.length; i++, j--)
	{
		form.elements[i].tabIndex = j;
	}
}

function skip2()
{
	document.lab.text2.tabIndex = -1;
}

function resetTab()
{
	var form = document.lab;
	for (var i=0; i < form.elements.length; i++)
	{
		form.elements[i].tabIndex = 0;
	}
}