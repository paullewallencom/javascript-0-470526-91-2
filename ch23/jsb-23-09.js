function setIt(msg)
{
	document.forms[0].entry.value = msg;
}

function watchIt(on)
{
	var obj = document.forms[0].entry;
	if (on)
	{
		obj.watch("value", report);
	} else {
		obj.unwatch("value");
	}
}

function report(id, oldval, newval)
{
	alert("The field's " + id + " property on its way from \n'" + oldval + "'\n to \n'" + newval + "'.");
	return newval;
}