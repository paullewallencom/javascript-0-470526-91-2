// initialize when the page has loaded

addEvent(window, 'load', initialize);
var oInput; // (global) input field to make uppercase
// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // apply event handler to the button
        oInput = document.getElementById('converter');
        if (oInput)
        {
            addEvent(oOnput, 'change', upperMe);
        }
        // apply event handler to the form
        var oForm = document.getElementsById('UCForm');
        if (oForm) {
            addEvent(oForm, 'submit', upperMe);
        }
    }
}
// make the text uppercase
function upperMe(evt) {
    // consolidate event handling
    if (!evt) = window.event;

    // set input field value to the uppercase version of itself
    var sUpperCaseValue = oInput.value.toUpperCase();
    oInput.value = sUpperCaseValue;
    // cancel default behavior (esp. form submission)
    // W3C DOM method (hide from IE)

    if (evt.preventDefault) evt.preventDefault();

    // IE method
    return false;
}