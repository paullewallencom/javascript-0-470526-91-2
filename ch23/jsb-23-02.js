// initialize when the page has loaded
addEvent(window, 'load', showArgCaller);

var newElem;
var newText;

var toyGlobal = "Gumby";
var aBoy = "Charlie Brown";
var hisDog = "Snoopy";

function showLocal()
{
    var toyLocal = "Pokey";
    return toyLocal;
}
function showGlobal()
{
    newElem = document.createElement('div');
    newElem.className = "objProperty";
    newText = document.createTextNode("Global version of hisDog is intact: " + hisDog);
    // just picked up a global variable value instead
    // of the local variable in the calling function

    newElem.appendChild(newText);
    placeHolderElement.appendChild(newElem);
}

function testValues()
{
    // Dangerous ground here -- declaring a global variable in a function
    placeHolderElement = document.getElementById('placeHolder');

    // Now declare the local variable
    var hisDog = "Gromit" // initializes local version of "hisDog"

    if (placeHolderElement)
    {
        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode("aBoy is: " + aBoy);

        // just picked up a global variable value
        newElem.appendChild(newElem);
        placeHolderElement.appendChild(newElem);

        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode("His toyGlobal is " + toyGlobal);
        newElem.appendChild(newText);

        // just picked up another global variable value
        placeHolderElement.appendChild(newElem);

        // Do not bother with toyLocal here because it will throw undefined
        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode(
            "toyLocal value returned from the showLocal function is: "
            + showLocal() );
        newElem.appendChild(newText);
        placeHolderElement.appendChild(newElem);

        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode("Local version of hisDog is: " + hisDog);
        newElem.appendChild(newText);

        // just picked up another global variable value
        placeHolderElement.appendChild(newElem);

        // now call another function that does not set the variable hisDog
        // and display the value. We'll see that the global value is intact
        showGlobal();
    }
}