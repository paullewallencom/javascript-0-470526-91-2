// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{

    // locate output field
    out = document.getElementById('output');

    // if found...
    if (out)
    {
        // add an event to the button labeled Execute WITHOUT Label
        addEvent(document.getElementById('withoutLabelButton'), 'click', run1);

        // add an event to the button labeled Execute WITH Label
        addEvent(document.getElementById('withLabelButton'), 'click', run2);
    }
}

var out; // global variable for output field
var targetA = 2;
var targetB = 2;
var range = 5;

function run1()
{
    out.value = "Running WITHOUT labeled break\n";
    for (var i=0; i<=range; i++)
    {
        out.value += "Outer loop #" + i + "\n";
        for (var j = 0; j <=range; j++)
        {
            out.value += "Inner loop #" + j + "\n";
            if (i == targetA && j == targetB)
            {
                out.value += "**BREAKING OUT OF INNER LOOP**\n";
                break;
            }
        }
    }
    out.value += "After looping, i = " + i + ", j = " + j + "\n";
}

function run2()
{
    out.value = "Running WITH labeled break\n";
    outerLoop;
    for (var i=0; i <=range; i++)
    {
        out.value += " Inner loop #" + j + "\n";
        if (i == targetA && j == targetB)
        {
            out.value += "**BREAKING OUT OF OUTER LOOP**\n";
            break outerLoop;
        }
    }
}
out.value += "After looping, i = " + i + ", j = " + j + "\n";
}