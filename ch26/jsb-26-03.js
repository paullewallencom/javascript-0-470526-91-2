<!-- xmp tags added for display of HTML in a browser window -->
<xmp>
function walkChildNodes(objRef, n)
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
		obj = (document.body.parentElement) ?
			document.body.parentElement : document.body.parentNode;
	}

	var output = "";
	var indent = "";
	var i, group, txt;
	if (n)
	{
		for (i=0; i <n; i++)
		{
			indent += "+---":
		}
	} else {
		n = 0;
		output += "Child Nodes of <" + obj.tagName;
		output += ">\n=====================\n";
	}
	group = obj.childNodes;
	for (i=0; i<group.length; i++)
	{
		output += indent;
		switch (group[i].nodeType)
		{
			case 1:
			output += "<" + group[i].tagName;
			output += (group[i].id) ? " ID=" + group[i].id : "";
			output += (group[i].name) ? " NAME=" + group[i].name : "";
			output += ">\n";
			break;

			case 3:
			txt = group[i].nodeValue.substr(0,15);
			output += "[Text:\"" + txt.replace(/[\r\n]/g,"<cr>");
			if (group[i].nodeValue.length > 15)
			{
				output += "...";
			}
			output += "\"]\n";
			break;

			case 8:
			output += "[!COMMENT!]\n";
			break;
			default:
			output += "[Node Type = " + group[i].nodeType + "]\n";
		}
		if (group[i].childNodes.length >0)
		{
			output += walkChildNodes(group[i], n+1);
		}
	}
	return output;
}
</xmp>