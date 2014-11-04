var myPBehaviorID;

function turnOn()
{
	myPBehaviorID = document.getElementById('myP').addBehavior('makeHot.htc');
	setInitialColor();
}

function setInitialColor()
{
	if (document.getElementById('myP').readyState == "complete")
	{
		var select = document.forms[0].colorChoice;
		var color = select.options[select.selectedIndex].value;
		document.getElementById('myP').setHotColor(color);
	} else {
		setTimeout('setInitialColor()', 500);
	}
}

function turnOff()
{
	document.getElementById('myP').removeBehavior(myPBehaviorID);
}

function setColor(select, color)
{
	if (document.getElementById('myP').hotColor)
	{
		document.getElementById('myP').setHotColor(color);
	} else {
		alert("This feature is not available. Turn on the Behavior first.");
		select.selectedIndex = 0;
	}
}

function showBehaviorCount()
{
	var num = document.getElementById('myP').behaviorUrns.length;
	var msg = "The myP element has " + num + " behavior(s). ";
}