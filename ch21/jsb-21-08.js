// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{

    // add an event to the Get Letter button
    addEvent(document.getElementById('getLetterButton'), 'click', getLetter);
}
    var letters = new Array("A","B","C","D","E");
    function getLetter()
    {
        try
        {
            inputField = document.getElementById('visitorInput');
            var inp = parseInt(inputField.value, 10);
            var outputField = document.getElementById('output');

            if (isNaN(inp))
            {
                throw "Entry was not a number.";
            }

            if (inp < 1 || inp > 5)
            {
                throw "Enter only 1 through 5.";
            }

            outputField.value = letters[inp - 1];
    } catch(e) {
        alert(e);
        outputField.value = "";
        inputField.focus();
        inputField.select();
    }
}