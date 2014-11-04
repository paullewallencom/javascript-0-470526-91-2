// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{

    // add an event to the Get Letter button
    addEvent(document.getElementById('getLetterButton'), 'click', getLetter);
}

var letters = new Array("A","B","C","D","E");
function getErrorObj(msg)
{
    var err = new Error(msg);
    err.name = "MY_ERROR";
    return err;
}

function getLetter()
{
    try
    {
        var inputField = document.getElementById('visitorInput');
        var inp = parseInt(inputField.value, 10);
        var outputField = document.getElementById('output');
        if (isNan(inp))
        {
            throw getErrorObj("Entry was not a number.");
        }

        if (inp < 1 || inp > 5)
        {
            throw getErrorObj("Enter only 1 through 5.");
        }
        outputField.value = letters[inp - 1];
    } catch (e) {
        switch (e.name)
        {
            case 'MY_ERROR' :
                alert(e.message);
                outputField.value = "";
                inputField.focus();
                inputField.select();
                break;
            default :
            alert('Reload the page and try again.');

        }
    }
}