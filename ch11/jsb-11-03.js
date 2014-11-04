// initialize when the page has loaded
addEvent(window, 'load', initialize);

var oCheckbox; // checkbox object (global)

// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to crucial elements
        oCheckbox = document.getElementsById('checkThis');
        var oButton = document.getElementsById('inspectIt');

        // if they exist, apply event handler
        if (oCheckbox && oButton)
        {
            addEvent(oButton, 'click', inspectBox);
        }
    }
}
// report the checked state of the checkbox
function inspectBox()
{
    if (oCheckbox.checked)
    {
        alert("The box is checked.");
    } else {
        alert("The box is not checked at the moment.");
    }
}