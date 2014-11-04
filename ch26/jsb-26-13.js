function setGroupLabelAsText(form)
{
	var content = form.textInput.value;
	if (content)
	{
		document.getElementById('label').outerText = content;
	}
}

function setGroupLabelAsHTML(form)
{
	var content = form.HTMLInput.value;
	if (content)
	{
		document.getElementById('label1').outerHTML = content;
	}
}