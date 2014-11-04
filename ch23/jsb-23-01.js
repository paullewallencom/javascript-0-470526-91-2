// initialize when the page has loaded
addEvent(window, 'load', showArgCaller);

var newElem;
var newText;

var toyGlobal = "Gumby";
var aBoy = "Charlie Brown";
var hisDog = "Snoopy";

function showArgCaller()
{
    // Call the hansel function twice: once directly,
    // second indirectly from the gretel function.
    hansel(1, 'two', 3);
    gretel(4, 'five', 6, 'seven');
}

function hansel(x,y)
{
    var args = hansel.arguments;
    var placeHolderElement = document.getElementById('placeHolder')
    if (placeHolderElement)
    {

        // a header line
        newElem = document.createElement('h3');
        newElem.className = "objProperty";
        newText = document.createTextNode("The caller and the arguments");

        // insert the 1st line (text node) into the new h3
        newElem.appendChild(newText);

        // insert the completed h3 into placeholder
        placeHolderElement.appendChild(newElem);

        // the next line is the caller
        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode('hansel.caller is ' + hansel.caller);
        newElem.appendChild(newText);
        placeHolderElement.appendChild(newElem);

        // the next line is the number or arguments
        newElem = document.createElement('div');
        newElem.className = "objProperty";
        newText = document.createTextNode('hansel.arguments.length is ' + hansel.arguments.length);

        newElem.appendChild(newText);
        placeHolderElement.appendChild(newElem);

        // the rest of the lines are the arguments
        for (var i=0; i<args.length; i++)
        {
            newElem = document.createElement('div');
            newElem.className = 'objProperty';
            newText = document.createTextNode("argument " + i + " is " + args[i]);
            newElem.appendChild(newText);
            placeHolderElement.appendChild(newElem);
        }
    }
}

function gretel(x,y,z)
{
    today = new Date();
    thisYear = today.getFullYear();
    hansel(x,y,z,thisYear);
}