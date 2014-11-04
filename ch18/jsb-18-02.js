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
        oSelect = document.getElementById('offices');
        oManager = document.getElementById('manager');
        oQuota = document.getElementById('quota');

        // if they all exist...
        if (oSelect && oManager && oQuota)
        {
            // build the drop-down list of regional offices
            for (var i=0; i<aRegionalOffices.length; i++)
            {
                oSelect.options[i] = new Option(aRegionalOffices[i]);
            }
            // set the onchange behavior
            addEvent(oSelect, 'change', getData);
        }

        // plug in data for the default select option
        getData();
    }
}
// when a new option is selected, do the lookup into parallel arrays
function getData(evt)
{
    // get the offset of the selected option
    var index = oSelect.selectedIndex;

    // get data from the same offset in the parallel arrays
    oManager.value = aRegionalManagers[index];
    oQuota.value = aRegOfficeQuotas[index];
}