// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to the target elements
        oOutputNow = document.getElementById('now');
        oOutputTimeSince = document.getElementById('time-since');
        var oOutputPastDay = document.getElementById('past-day');

        // if they exist, plug in new content
        if (oOutputNow && oOutputTimeSince && oOutputPastDay)
        {
            // globals -- calculate only once
            // set target date to 20:17 UTC on July 20, 1969
            targetDate = Date.UTC(1969, 6, 20, 20, 17, 0, 0);
            oneSecond = 1000;
            oneMinute = oneSecond * 60;
            oneHour = oneMinute * 60;
            oneDay = oneHour * 24;

            // plug in the past date
            var sPastDay = (new Date(targetDate)).toLocaleString();
            replaceTextContent(oOutputPastDay, sPastDay);

            // plug in current time & time since
            updateCounter();
        }
    }
}

//timer loop to display changing values
function updateCounter()
{
    // plug in current time
    var sNow = (new Date()).toLocaleString();
    replaceTextContent(oOutputNow, sNow);

    // plug in days since
    var sTimeSince = formatTimeSince();
    replaceTextContent(oOutputTimeSince, sTimeSince);
    setTimeout("updateCounter()", 1000);
}

// format elapsed time
function formatTimeSince()
{
    var ms = getTimeDiff(targetDate);
    var days, hrs, mins, secs;
    days = Math.floor(ms/oneDay);
    output = days + " Day";
    
    if (days !=1) output += 's';
    ms -= oneDay * days;
    hrs = Math.floor(ms/oneHour);
    output += ", " + hrs + " Hour";
    
    if (hrs != 1) output += 's';
    ms -= oneHour * hrs;
    mins = Math.floor(ms/oneMinute);
    output += ", " + mins + " Minute";
    if (mins != 1) output += 's';
    ms -= oneMinute * mins;
    secs = Math.floor(ms/oneSecond);
    output += ", and " + secs + " Second";
    if (secs != 1) output += 's';
    return output;
}

// get the difference between two datetimes in milliseconds
function getTimeDiff(targetMs)
{
    var today = new Date();
    var diff = Math.abs(today.valueOf() - targetMS);
    return Math.floor(diff);
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