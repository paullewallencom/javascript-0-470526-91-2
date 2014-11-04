// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // add an event to the form
    addEvent(document.getElementById('theForm'), 'submit', suppressFormSubmission);

    // add an event to the input box
    addEvent(document.getElementById('theText'), 'change', testLetter);
}

function suppressFormSubmission(evt)
{
    // consolidate event handling
    if (!evt) evt = window.event;

    // cancel default bahavior
    // W3C DOM method (hide from IE)
    if (evt.preventDefault) evt.preventDefault();

    //IE method
    return false;
}

function testLetter()
{
    // assign to shorter variable name
    var inpVal = this.value;
    if (inpVal != "")
    {

        // if entry is not empty then dive in...
        if (inpVal == "A")
            { 

                // Is it an "A"?
                alert("Thanks for the A.");

            } else if (inpVal == "B") {

                // No. Is it a "B"?

            } else if (inpVal == "C") {

                // No. Is is it a "C"?

            } else {

                // Nope. None of the above
                alert("Sorry, wrong character or case.");
            }
    } else {
        // value was empty, so skipped all other stuff above
        alert("You did not enter anything.");
    }
}