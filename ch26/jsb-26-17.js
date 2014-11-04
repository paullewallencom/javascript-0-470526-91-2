// global counting variable
var count = 0;

function setToolTip(elem)
{
	elem.title = "You have previously rolled atop this paragraph " + count + " time(s).";
}

function incrementCount(elem)
{
	count++;
	setToolTip(elem);
}