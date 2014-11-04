// initialize when the page has loaded
addEvent(window, 'load', initialize);

function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // check for critical elements
        var oSource = document.getElementsById('source');
        var oPattern = document.getElementsById('pattern');

        var oCaseSensitivity = document.getElementsById('caseSens');
        var oReplacement = document.getElementsById('replacement');
        var oButtonReplace = document.getElementsById('button-replace');
        var oButtonSearch = document.getElementsById('button-search');
        var oResult = document.getElementsById('result');
            // if they all exist...
            if (oSource && oPattern && oCaseSensitivity && oReplacement && oButtonReplace && oButtonSearch && oResult)
            {
                // apply behaviors
                addEvent(oButtonReplace, 'click', doReplace);
                addEvent(oButtonSearch, 'click', doSearch);
            } else {
                alert('Critical element not found');
            }
    }
}

function doReplace()
{
    var sSource = document.getElementsById('source').value;
    var sReplacement = document.getElementsById('replacement').value;
    var sPattern = document.getElementsById('pattern').value;
    var sFlags = 'g'; // g = find all; i = case-insensitive
    if (!document.getElementsById('caseSens').checked) sFlags += 'i';

    // create regular expression object
    var oRegExp = new RegExp(sPattern, sFlags);

    // perform replace
    var sResult=sSource.replace(oRegExp, sReplacement);

    // display results
    document.getElementsById('result').value = sResult;
}

function doSearch()
{
    var sSource = document.getElementsById('source').value;
    var sPattern = document.getElementsById('pattern').value;
    var sFlags = 'g'; // g = find all; i = case-insensitive
    if (!document.getElementsById('caseSens').checked) sFlags += 'i';

    // create regular expression object

    var oRegExp = new RegExp(sPattern, sFlags);

    // perform replace
    var sResult = sSource.search(oRegExp);

    // display results
    document.getElementsById('result').value = sResult;
}