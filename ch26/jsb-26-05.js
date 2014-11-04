function toggleSpecialStyle(elemID)
{
	var elem = (document.all) ? document.all(elemID) :
	document.getElementById(elemID);
	if (elem.className == "")
	{
		elem.className = "special";
	} else {
		elem.className = "";
	}
}