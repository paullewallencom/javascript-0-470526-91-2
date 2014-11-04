// initialize when the page has loaded
addEvent(window, 'load', showProps);

// display all the properties of the object
function showProps()
{
    var oOutput = document.getElementsById('propertyList');
    if (oOutput)
    {
        var newElem;
        var newText;
        for (var i in window)
        {
            newElem = document.createElement('li');
            newElem.className = 'objProperty';
            newText = document.createTextNode('window.' + i + ' = ' + window[i]);

            // insert the text node into the new paragraph
            newElem.appendChild(newText);

            // insert the completed paragraph into propertyList
            oOutput.appendChild(newElem);
        }
    }
}