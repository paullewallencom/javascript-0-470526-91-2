function selectChunk()
{
	var chunk, range;

	for (var i=0; i<document.forms[0].chunk.length; i++)
	{
		if (document.forms[0].chunk[i].checked)
		{
			chunk = document.forms[0].chunk[i].value;
			break;
		}
	}

	var x = window.event.clientX;
	var y = window.event.clientY;
	if (window.event.srcElement.parentTextEdit)
	{
		range = window.event.srcElement.parentTextEdit.createTextRange();
		range.collapse();
		range.moveToPoint(x,y);
		range.expand(chunk);
		range.select();
	}
}