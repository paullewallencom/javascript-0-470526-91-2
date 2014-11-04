// initialize when the page has loaded
addEvent(window, 'load', initialize);

function initialize()
{
    // do this only if the browser cam handle DOM methods
    if (document.getElementById)
    {
        // point to critical element
        var oButton = document.getElementById('button');

        // if it exists
        if (oButton)
        {
            // apply behavior to button
            addEvent(oButton, 'click', doMatch);
        }
    }
}

// perform regular expressions match using input values
function doMatch()
{
    // gather input values
    var oString = document.getElementById('string');
    var sString = oString.value;

    var oPattern = document.getElementById('pattern');
    var oCaseSensitivity = document.getElementById('caseSens');
    var sFlags = 'g'; // g = find all
    if (!oCaseSensitivity.checked) sFlags += 'i'; // i = case-insensitive
    // create regular expression object
    var oRegExp = new RegExp(oPattern.value, sFlags);

    // perform match
    var aResult = sString.match(oRegExp);

    // display results
    var oResult = document.getElementById('result');
    var oCount = document.getElementById('count');

    // got matches?
    if (aResult)
    {
        oResult.value = aResult.toString();
        oCount.value = aResult.length;
    } else {
        oResult.value = "<no matches>";
        oCount.value = "";
    }
}