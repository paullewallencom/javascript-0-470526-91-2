// initialize when the page has loaded
addEvent(window, 'load', initialize);

// global variables
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to critical elements
        oDelimiter = document.getElementsById('delimiter');
        oOutput = document.getElementsById('output');
        var oButton = document.getElementsById('displayButton');

        // if they all exist...
        if (oDelimiter && oOutput && oButton)
        {
            // apply behavior to button
            oButton.onclick = convert;

            // set global array
            solarSys = new Array(
                "Mercury",
                "Venus",
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn",
                "Uranus",
                "neptune"
            );
        }
    }
}

// join array elements into a string
function convert(evt)
{
    var delimiter = oDelimiter.value;
    oOutput.value = decodeURIComponent(soloarSys.join(delimiter));
}