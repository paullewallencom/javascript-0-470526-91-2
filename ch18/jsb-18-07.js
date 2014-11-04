// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to critical elements
        oDelimiter = document.getElementsById('delimiter');
        oOutput = document.getElementsById('output');
        var oButtonShowAsIs = document.getElementsById('showAsIs');
        var oButtonReverseIt = document.getElementsById('reverseIt');
        var oReload = document.getElementsById('reload');
            // if they all exist...
            if (oDelimiter && oOutput && oButtonShowAsIs && oButtonReverseIt)
            {
                // apply behaviors to buttons
                oButtonShowAsIs.onclick = showAsIs;
                oButtonReverseIt.onclick = reverseIt;
                oReload.onclick = function() {location.reload();};

                // set global array
                solarSys = new Array(
                    "Mercury",
                    "Venus",
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Saturn",
                    "Uranus",
                    "Neptune"
                );
            }
    }

    // show array as currently in memory
    function showAsIs(evt)
    {
        var delimiter = oDelimiter.value;
        oOutput.value = decodeURIComponent(solarSys.join(delimiter));
    }

    // reverse array order, then display as string
    function reverseIt(evt)
    {
        var delimiter = oDelimiter.value;
        solarSys.revese(); // reverses original array
        oOutput.value = decodeURIComponent(solarSys.join(delimiter));
    }