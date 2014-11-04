function showMegaPixels()
{
    var theForm = document.getElementById('sizesForm');
    if (theForm)
    {
        var sizeChoices = theForm.choices;
        for (var i=0; i<sizeChoices.length; i++)
        {
            if (sizeChoices[i].checked)
            {
                break;
            }
        }

        alert("That image size requires " + sizeChoices[i].value + " megapixels.");
    }
}