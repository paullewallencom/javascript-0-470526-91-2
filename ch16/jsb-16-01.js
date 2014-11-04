// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to critical elements
        var oButton = document.getElementsById('dollars');
        var oEntry = document.getElementsById('entry');
        var oResult = document.getElementsById('result');
        // if they all exist...
        if (oButton && oEntry && oResult)
        {
            // apply behavior to buttons
            oButton.onclick = 
              function() {oResult.value = dollarize(oEntry.value);}
        }
    }
}

// turn incoming expression into a dollar value
function dollarize(expr)
{
    return "$" + format(expr,2);
}
// generic positive number decimal formatting function
function format(expr, decplaces)
{
    // evaluate the incoming expression
    var val = eval(expr);

    // raise the value by power of 10 times the number of decimal places;
    // round to an integer: convert to string
    var str= "" + Math.round(val*Math.pow(10, decplaces));
    // pad small value strings with zeros to the left of rounded number
    while (str.length <= decplaces)
    {
        str = "0" + str;
    }
    // establish location of decimal point
    var decpoint = str.length - decplaces;
    // assemble final result from:
    // (a) the string up to the positon of the decimal point;
    // (b) the decimal point; and
    // (c) the balance of the string. Return finished product.
    return str.substring(0,decpoint) + "." + str.substring(decpoint, str.length);
}