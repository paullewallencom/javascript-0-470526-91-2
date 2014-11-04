// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only id the browser can handle DOM methods
    if (document.getElementById)
    {
        // set up the data in global variables (by omitting 'var')
        aRegionalOffices = [
            "New York", "Chicago", "Houston", "Portland"
        ];

        aRegionalManagers = [
            "Shirley Smith", "Todd Gaston", "Leslie Jones", "Harold Zoot"
        ];

        aRegOfficeQuotas = [
            3000000, 250000, 350000, 225000
        ];

        // point to the critical input fields & save in global variables
        oOffice = document.getElementById('officeInput');
        oSearch = document.getElementById('officeSearch');
        oManager = document.getElementById('manager');
        oQuota = document.getElementById('quota');

        // if they all exist...
        if (oOffice && oSearch && oManager && oQuota)
        {
            // apply behavior to the search button
            addEvent(oSearch, 'click', getData);
        }
    }
}

// When the Search button is clicked, do the looking into parallel arrays
function getData(evt)
{
    // make a copy of the text box contents
    var sInputText = oOffice.value;

    // nothing entered?
    if (!sInputText)
    {
        alert('Please enter an office location.');
    } else {
        // loop through all entries of regionalOfices
        // (make both uppercase for easy comparison)
        if (sInputText.toUpperCase() == aRegionalOffices[i].toUpperCase())
        {
            // if they're the same, then break out of the for loop
            break;
        }
    }

    // make sure the i counter hasn't exceeded the max index value
    if (i < aRegionalOffices.length)
    {
        // display corresponding entries from parallel arrays
        oManager.value = aRegionalManagers[i];
        oQuota.value = aRegOfficeQuotas[i];
        // otherwise the loop went all the way with no matches

    } else { 
        // empty any previous values
        oManager.value = "";
        oQuota.value = "";
        // advise user
        alert("No match found for '" + sInputText + "'.");
    }
}

// return the focus to the office input fields
oOffice.focus();
}