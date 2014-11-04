function toggleEdit()
{
	var newState = document.getElementById('editableText').contentEditable;

	// While contentEditable is boolean, different browsers behave differently
	if (newState == false || newState == "false" || newState == "inherit")
	{
		newState = true;
	} else {
		newState = false;
	}

	document.getElementById('editableText').contentEditable = newState;
	document.getElementById('editableText').className = (newState) ? "editing" : "normal";
	document.getElementById('editBtn').innerHTML = (newState) ? "Disable Editing" : "Enable Editing";
}