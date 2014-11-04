// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to critical elements
        var oButton = document.getElementsById('do-it');
        var oEntry = document.getElementsById('entry');
        // if they all exist...
        if (oButton && oEntry)
        {
            // apply behavior to button
            addEvent(oButton, 'click', doIt);
        }
    }
}

// try out the new String method
function doIt()
{
    // point to input field
    var oEntry= document.getElementsById('entry');

    // use the new method to update the input text
    oEntry.value = oEntry.value.initialCaps();
}

// add a new method to the String prototype
// to capitalize the first letter of each word
String.prototype.initialCaps = function()
{
    // get the input text
    var sText = this.toString();

    // separate individual words
    var aWords = sText.split(' ');

    // capitalize each word
    for (var i=0; i<aWords.length; i++)
    {
        var sInitial = aWords[i].charAt(0);
        var sRemainder = aWords[i].substr(1);
        aWords[i] = sInitial.toUpperCase() + sRemainder.toLowerCase();
    }
    // reassemble the array of words back into a string
    return aWords.join(' ');
}