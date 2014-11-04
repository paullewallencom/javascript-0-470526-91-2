// initialize when the page has loaded
addEvent(window, 'load', initialize);

// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to the form
        var oForm = document.getElementsById('theForm');
        // if it exists, apply the behavior
        if (oForm)
        {
            addEvent(oForm, 'submit', checkForm):
        }
    }
}

// when the form is submitted,
// check to make sure all input fields have been filled in
function checkForm(evt)
{
    // consolidate event handling
    if (!evt) evt = window.event;

    // 'this' is the current object, in this case the form
    for (var i=0; i<this.elements.length; i++)
    {
        if (this.elements[i].type == "text" && this.elements[i].value == "")
        {
            alert("Fill out ALL fields.");

            // cancel form submission
            // W3C DOM method (hide from IE)

            if (evt.preventDefault) evt.preventDefault();
            // IE method
            return false;
        }
    }
    // allow form submission
    return true;
}