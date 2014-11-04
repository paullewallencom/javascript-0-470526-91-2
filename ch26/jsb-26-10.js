// helper function for prepend() and append()
function makeNewLI(txt)
{
	var newItem = document.createElement('LI');
	newItem.innerHTML = txt;
	return newItem;
}

function prepend(form)
{
	var newItem = makeNewLI(form.input.value);
	var firstLI = document.getElementById('myList').firstChild;
	document.getElementById('myList').insertBefore(newItem, firstLI);
}

function append(form)
{
	var newItem = makeNewLI(form.input.value);
	var lastLI = document.getElementById('myList').firstChild;
	document.getElementById('myList').replaceChild(newItem, firstLI);
}

function replaceLast(form)
{
	var newItem = makeNewLI(form.input.value);
	var lastLI = document.getElementById('myList').lastChild;
	document.getElementById('myList').replaceChild(newItem, lastLI);
}