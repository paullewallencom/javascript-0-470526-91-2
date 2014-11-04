<!-- xmp tags added for display of HTML in a browser window -->
<xmp>
function walkChildren(objRef, n)
{
	var obj;
	if (objRef)
	{
		if (typeof objRef == "string")
		{
			obj = document.getElementById(objRef);
		} else {
			obj = objRef;
		}
	} else {
		obj = document.body.parentElement;
	}

	var output = "";
	var indent ="";
	var i, group;
	if (n)
	{
		for (i=0; i<n; i++)
		{
			indent += "+---";
		}
	} else {
		n = 0;
		output += "Children of <" + obj.tagName;
		output += ">\n=====================\n";
	}
	group = obj.children;
	for (i = 0; i<group.length; i++)
	{
		output += indent + "<" + group[i].tagName;
		output += (group[i].id) ? " ID=" + group[i].name : "";
		output += ">\n";

		if (group[i].children.length >0)
		{
			output += walkChildren(group[i], n+1);
		}
	}
	return output;
}
</xmp>