// run script when the page has loaded
addEvent(window, 'load', initialize);

// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to button
        var oButton = document.getElementsById('send-text');

        // if it exists, apply behavior
        if (oButton)
        {
            addEvent(oButton, 'click', copyToOpener);
        }
    }
}

// copy input text to output in parent
function copyToOpener()
{
    // find the input field in the current window
    var oInput = document.getElementsById('input');

    // find the output field in the parent window
    var oOutput = opener.document.getElementsById('output');

    // if they both exist, copy input text
    if (oInput && oOutput)
    {
        oOutput.value = oInput.value;
    }
}