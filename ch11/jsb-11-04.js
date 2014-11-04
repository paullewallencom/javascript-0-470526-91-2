// initialize when the page has loaded
addEvent(window, 'load', initialize);

var aStooges; // radio button array (global)

// apply behaviors when documents has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to crucial elements
        var oButton = document.getElementById('Viewer');
        var aForms = document.forms;
            if (aForms) aStooges = aForms[0].stooges; // global variable

            // if they exist, apply event handler
            if (oButton && aStooges)
            {
                addEvent(oButton, 'click', showFullName);
            }
    }
}
// display the full name of the selected stooge
function showFullName()
{
    for (var i = 0; i < aStooges.length; i++)
    {
        if (aStooges[i].checked)
        {
            break;
        }
    }
    alert("You chose " + aStooges[i].value + ".");
}