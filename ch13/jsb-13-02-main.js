// run script when the page has loaded
addEvent(window, 'load', initialize);

// global pointer to sub-window
var oSubWindow;

// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to button
        var oButton = document.getElementById('open-sub-window');
        // if it exists, apply behavior
        if (oButton)
        {
            addEvent(oButton, 'click', openSubWindow);
        }
        // point to button
        oButton = document.getElementById('close-sub-window');
        // if it exists, apply behavior
        if (oButton) {
            addEvent(oButton, 'click', closeSubWindow);
        }
    }
}
// open (create) sub window
function openSubWindow()
{
    // store sub-window pointer in global variables
    oSubWindow = window.open("jsb-13-02-sub.html", "sub", "height=200,width=300");
}
// close (destroy) sub window
function closeSubWindow()
{
    // if the sub-window has been opened, close it
    if (oSubWindow)
    {
        oSubWindow.close();
    }
}