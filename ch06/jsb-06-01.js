// tell the browser to run this script when the page has finished loading
window.onload = applyBehavior;

// apply behavior to the button
function applyBehavior()
{
    // ensure a DOM-aware user agent
    if (document.getElementById) {
        // point to the button
        var oButton = document.getElementById('clicker');

        // if it exists, apply behavior
        if (oButton)
        {

            oButton.onclick = behave;
        }
    }
}

// what to do when the button is clicked
function behave(evt)
{
    alert('Ouch!');
}