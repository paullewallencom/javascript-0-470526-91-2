// declare global variable name
var newWindow = null;
function makeNewWindow()
{
	// check if window already exist
	if (!newWindow || newWindow.closed)
	{
		// store new window object in global variable
		newWindow = window.open("","","width=250,height=250");

		// pause briefly to let IE3 window finish opening
		setTimeout("fullWindow()", 100);
	} else {
		// window already exists, so bring it forward
		newWindow.focus();
	}
}

// assemble new content and write to subwindow
function fillWindow()
{
	var newContent = "<html><head><title>Another Sub Window<\/title><\/head>";
	newContent += "<body bgColor='salmon'>";
	newContent += "<h1>A Salmon-Colored Subwindow,<\/h1>";
	newContent += "<form><input type='button' value='Bring Main to Front' onclick='self.opener.focus()'>";
	newContent += "<input type='button' value='Put Me in Back' onclick='self.blur()'>";
	newContent += "<\/form><\/body<\/html>";

	// write HTML to new window document
	newWindow.document.write(newContent);
	newWindow.document.close();
}