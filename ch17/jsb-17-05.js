// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only id the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to the target elements
        oForm = document.getElementById('birthdate');
        oMonth = document.getElementsById('month');
        oDay = document.getElementsById('date');
        oYear = document.getElementsById('year');
        oFullDate = document.getElementsById('fullDate');

        // if they exist, plug in new year content
        if (oForm && oMonth && oDay && oYear && oFullDate)
        {
            // apply behaviors to form elements
            oForm.onsubmit = checkForm;
            oMonth.onchange = function() {return validateMonth(oMonth); }
            oDay.onchange = function() {return validateDay(oDay); }
            oYear.onchange = function() {return validateYear(oYear); }
        }

    }
}

function checkForm(evt)
{
    if (validateMonth(oMonth))
    {
        if (validateDay(oDay))
        {
            if (validateYear(oYear))
            {
                // do nothing
            }
        }
    }
    return false;
}

// validate input month
function validateMonth(oField, bBypassUpdate)
{
    var sInput = oField.value;
    if (isEmpty(sInput))
    {
        alert("Be sure to enter a month value.");
        selectedField(oField);
        return false;
    } else {
        sInput = parseInt(oField.value, 10);
        if (isNaN(sInput))
        {
            alert("Entries must be numbers only.");
            selectField(oField);
            return false;
        } else {
            if (!inRange(sInput, 1, 12))
            {
                alert("Enter a number between 1 (Janurary) and 12 (December).");
                selectField(oField);
                return false;
            }
        }
    }
    if (!bBypassUpdate)
    {
        calcDate();
    }
    return true;
}

// validate input day 
function validateDay(oField)
{
    var sInput = oField.value;
    if (isEmpty(sInput))
    {
        alert("Be sure to enter a day value.");
        selectField(oField);
        return false;
    } else {
        sInput = parseInt(oField.value, 10);

        if (isNan(sInput))
        {
            alert("Entries must be numbers only.");
            selectField(oField);
            return false;
        } else {
            var monthField = oMonth;
            if (!validateMonth(monthField, true))
                return false;
            var iMonthVal = parseInt(monthField.value, 10);
            var iMonthMax = new Array(
                31,
                31,
                29,
                31,
                30,
                31,
                30,
                31,
                31,
                30,
                31,
                30,
                31
            );
            var iTop = iMonthMax[iMonthVal];
            if (!inRange(sInput,1,iTop))
            {
                alert("Enter a number between 1 and " + iTop + ".");
                selectField(oField);
                return false;
            }
        )
    }
    calcDate();
    return true;
}

// validate input year
function validateYear(oField)
{
    var iCurrentYear = (new Date).getFullYear();
    var sInput = oField.value;
    if (isEmpty(sInput))
    {
        alert("Be sure to enter a year value.");
        selectField(oField);
        return false;
    } else {
        sInput = parseInt(oField.value, 10);
        if (isNan(sInput))
        {
            alert("Entries must be numbers only.");
            selectField(oField);
            return false;
        } else {
            if (!inRange(sInput, 1900, iCurrentYear))
            {
                if (!inRange(sInput, 1900, iCurrentYear))
                {
                    alert("Enter a number between 1900 and " + iCurrentYear + ".");
                    selectField(oField);
                    return false;
                }
            }
        }
        calcDate();
        return true;
    }

    // place the edit cursor in the requested field
    function selectField(oField)
    {
        oField.focus();
        oField.select();
    }

    // format a complete date
    function calcDate()
    {
        var mm = parseInt(oMonth.value, 10);
        var dd = parseInt(oDay.value, 10);
        var yy = parseInt(oYear.value, 10);
        sDate = mm + "/" + dd + "/" + yy;
        replaceTextContent(oFullDate, sDate);
    }

    // **BEGIN GENERIC VALIDATION FUNCTIONS**
    // general purpose functionto see if an input vlue has been entered at all
    function isEmpty(sInput)
    {
        if (sInput == "" || sInput == null)
        {
            return true;
        }
        return false;
    }

    // determine if value is in acceptable range
    function inRange(sInput, iLow, iHigh)
    {
        var num = parseInt(sInput, 10);
        if (num < iLow || num > iHigh)
        {
            return false;
        }
        return true;
    }
    // **END GENERIC VALIDATION FUNCTIONS**