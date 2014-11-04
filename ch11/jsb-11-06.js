// initialize when the page has loaded
addEvent(window, 'load', initialize);

// apply behaviors when document has loaded
function initialize()
{
    // do this if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to crucial elements
        var oForm = document.getElementById('beatles-form');
        var oSong = document.getElementById('song');
        var oButtonSubmit = document.getElementById('submit');

        // if they all exist...
        if (oForm && oSong && oButtonSubmit)
        {
            // apply behavior to input field & button
            addEvent(oSong, 'change', verifySong);
            addEvent(oButtonSubmit, 'click', processData);
        }
    }
}

// verify all input & suppress form submission
function processData(evt)
{
    // consolidate event handling
    if (!evt) evt = window.event;

    // point to the activated control's form ancestor
    var oForm = this.form;

    // see which radio button was selected
    for (var i=0; i< oForm.Beatles.length; i++)
    {
        if (oForm.Beatles[i].checked)
        {
            break;
        }
    }

    // assign values to variables for convenience
    var sBeatle = oForm.Beatles[i].value;
    var sSong = oForm.song.value;

    // this is where a data lookup would go...
    alert("Checking whether " + sSong + " features " + sBeatle + "...");
    // cancel form submission
    if (evt.preventDefault) evt.preventDefault();
    return false;
}

// verify the song name when it's changed
functionverifySong()
{
    // get the input song
    // ('this' is the object whose event handler called this function)
    var sSong = this.value;

    // this is where a data lookup would go...
    alert("Checking whether " + sSong + " is a Beatles tune...");
}