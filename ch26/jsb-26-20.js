// add event listeners
function addBubbleListener(elemID)
{
	document.getElementById(elemID).addEventListener('click', reportEvent, false);
}

function addCaptureListener(elemID)
{
	document.getElementById(elemID).addEventListener('click', reportEvent, true);
}

// remove event listeners
function removeBubbleListener(elemID)
{
	document.getElementById(elemID).removeEventListener('click', reportEvent, true);
}

function removeCaptureListener(elemID)
{
	document.getElementById(elemID).removeEventListener('click', reportEvent, false);
}

// display details about any event heard
function reportEvent(evt)
{
	var elem = (evt.target.nodeType == 3) ? evt.target.parentNode : evt.target;
	if (elem.id == "mySPAN")
	{
		var msg = "Event processed at " + evt.currentTarget.tagName + " element (event phase = " + evt.eventPhase + ").\n";
		document.controls.output.value += msg;
	}
}

// clear the details textarea
function clearTextArea()
{
	document.controls.output.value = "";
}