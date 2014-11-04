// initialize when the page has loaded
addEvent(window, 'load', initialize);

// global variables
var arrayOne, arrayTwo, arrayThree, textObj;
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        form = document.forms[0];

        var oButton = document.getElementsById('button1');
        if (oButton) oButton.onclick = update1;

        oButton = document.getElementsById('button2');
        if (oButton) oButton.onclick = update2;

        oButton = document.getElementsById('buttonReset');
        if (oButton) oButton.onclick = function() {location.reload(); };

        // populate arrays
        textObj = form.original;
        arrayOne = new Array("Jerry", "Elaine", "Kramer");
        arrayTwo = new Array("Ross", "Rachael", textObj);
        arrayThree = arrayOne.concat(arrayTwo);

        // perform initial update
        update1();
        update2();

        showArrays();
    }
}

// display current values of all three arrays
function showArrays()
{
    form.array1.value = arrayOne.join("\n");
    form.array2.value = arrayTwo.join("\n");
    form.array3.value = arrayThree.join("\n");
}

// change the value of first item in Array three
function update1(evt)
{
    arrayThree[0] = form.source1.value;
    form.result1.value = arrayOne[0];
    form.result2.value = arrayThree[0];
    showArrays();
}

// change value of object property pointed to in Array Three
function update2(evt)
{
    arrayThree[5].value = form.source2.value;
    form.result3.value = arrayTwo[2].value;
    form.result4.value = arrayThree[5].value;
    showArrays();
}