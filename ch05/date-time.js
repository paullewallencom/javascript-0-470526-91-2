
// Tell the browser to run this script when the page has finished loading.
window.onload = insertDateTime;

// Insert the date & time
function insertDateTime()
{
    // ensure a DOM-aware user agent
    if (!document.getElementById) return;
    if (!document.createTextNode) return;

    // create a date-time object
    var oNow = new Date();

    // get the current date & time as a string
    var sDateTime = oNow.toLocaleString();

    // point to the target element where we want to insert the date & time
    var oTarget = document.getElementById('output');

    // make sure the target is found
    if (!oTarget) return;

    // delete everything inside the target
    while (oTarget.firstChild)
    {
        oTarget.removeChild(oTarget.firstChild);
    }

    // use the date-time string to create a new text node for the page
    var oNewText = document.createTextNode(sDateTime);

    // insert the new text into the span
    oTarget.appendChild(oNewText);
}