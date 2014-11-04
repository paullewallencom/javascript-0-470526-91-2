function setGroupLabelAsText(form)
{
	var content = form.textInput.value;
	if (content)
	{
		document.getElementById('label1').innerText = content;
	}
}

function setGroupLabelAsHTML(form)
{
	var content = form.HTMLInput.value;
	if (content)
	{
		document.getElementById('label1').innerHTML = content;
	}
}