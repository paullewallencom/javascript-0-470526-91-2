// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to the target paragraphs
        var oOutput = document.getElementsById('days-left');
        var oDayWord = document.getElementById('day-word');
        // if they exist, plug in new content
        if (oOutput && oDayWord)
        {
            // plug in days left
            var sDaysLeft = getDaysUntilXmas();
            replaceTextContent(oOutput, sDaysLeft);

            // pluralize day if not one
            var sDayWord = (sDaysLeft == 1) ? 'day' : 'days';
            replaceTextContent(oDayWord, sDayWord);
        }
    }
}

// calculate the number of days till next Christmas
function getDaysUntilXmas()
{
    var oneMinute = 60 * 1000;
    var oneHour = oneMinute * 60;
    var oneDay = oneHour * 24;
    var today = new Date();
    var nextXmas = new Date();

    nextXmas.setMonth(11);
    nextXmas.setDate(25);

    if (today.getMonth() == 11 && today.getDate() > 25)
    {
        nextXmas.setFullYear(nextXmas.getFullYear() + 1);
    }

    var diff = nextXmas.getTime() - today.getTime();
    diff = Math.floor(diff/oneDay);
    return diff;
}

// replaces the text contents of a page element
function replaceTextContent(oElement, sContent)
{
    // if the object exists
    if (oElement)
    {
        // remove all child nodes
        while (oElement.firstChild)
        {
            oElement.removeChild(oElement.firstChild);
        }

        // create a text node with a new content
        var oNewText = document.createTextNode(sContent);

        // insert that content
        oElement.appendChild(oNewText);
    }
}