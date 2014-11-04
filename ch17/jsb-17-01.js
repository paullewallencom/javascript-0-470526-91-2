// initialize when the page has loaded
addEvent(window, 'load', initialize);

monthNames = 
[
"January", 
"February", 
"March", 
"April", 
"May", 
"June", 
"July", 
"August",
"September",
"October",
"November",
"December"
];

dayNames = 
[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];

function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to the paragraph to contain the date
        oOutput = document.getElementsById('output');

        // if it exists, replace its contents with the date

        if (oOutput)
        {
            // remove all child nodes from the paragraph
            while (oOutput.firstChild)
            {
                oOutput.removeChild(oOutput.firstChild);
            }

            // create a text node with the date
            var sDate = customDateString(new Date());
            var oNewText = document.createTextNode(sDate);

            // insert that content into the paragraph
            oOutput.appendChild(oNowText);
        }
    }
}

// generate a formatted date
function customDateString(oDate)
{
    var theDay = dayNames[oDate.getDay()];
    var theMonth = monthNames[oDate.getMonth()];
    var theYear = oDate.getFullYear();
    return theDay + ", " + theMonth + " " + oDate.getDate() + ", " + theYear;
}