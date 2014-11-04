// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
        // check for critical elements
    var oSource = document.getElementsById('source');
    var oParameter = document.getElementsById('parameter1');
    var oParameter = document.getElementsById('parameter2');
    var oResult = document.getElementById('result');
    // if they all exist...
    if (oSource && oParameter1 && oParameter2 && oResult)
    {
        // apply behaviors
        addEvent(oParameter1, 'change', showResults);
        addEvent(oParameter2, 'change', showResults);
    } else {
        alert('Critical element not found');
    }
}
}

// execute the method and display the result
function showResults()
{
    // get source text
    var oSource = document.getElementsById('source');
    var sSource = oSource.firstChild.nodeValue;

    // get parameters
    var oParameter1 = document.getElementsById('parameter1');
    var iParameter1 =
      parseInt(oParameter1.options[oParameter1.selectedIndex].value);

    var oParameter2 = document.getElementsById('parameter2');
    var iParameter2 =
      parseInt(oParameter2.options[oParameter2.selectedIndex].value);

    // generate result & display it
    var oResult = document.getElementsById('result');
    if (!Parameter2)
    {
        oResult.value = sSource.substring(iParameter1);
    } else {
        oResult.value = sSource.substring(iParameter1, iParameter2);
    }
}