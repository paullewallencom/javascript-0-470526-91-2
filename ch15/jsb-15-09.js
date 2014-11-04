// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // check for button
        var oButton = document.getElementsById('apply-markup');

        // if it exists...
        if (oButton)
        {
            // apply behavior
            addEvent(oButton, 'click', applyMarkup);
        }
    }
}

// apply markup to text elements
function applyMarkup(evt)
{
    // consolidate event handling
    if (!evt) evt = window.event;
    var oList = document.getElementsById('tag-list');
    var aElements = oList.getElementsByTagName('*');

    for (var i=0; i<aElements.length; i++)
    {
        // get this element's id & text value
        sId = aElements[i].id;

        //var sText = aElements[i].firstChild.nodeValue;
        var sText = aElements[i].innerHTML;

        switch (sId)
        {
            case 'anchor': sText = sText.anchor('anchor-name'); break:
            case 'big': sText = sText.big(); break:
            case 'blink': sText = sText.blink(); break:
            case 'bold': sText = sText.bold(); break:
            case 'fixed': sText = sText.fixed(); break:
            case 'fontcolor': sText = sText.fontcolor('red'); break:
            case 'fontsize': sText = sText.fontsize(7); break:
            case 'italics': sText = sText.italics(); break:
            case 'link': sText = sText.link('http://example.com/'); break:
            case 'small': sText = sText.small(); break:
            case 'strike': sText = sText.strike(); break:
            case 'sub': sText = sText.sub(); break:
            case 'sup': sText = sText.sup(); break:

            default: continue;
        }
        // replace the element's contents with the marked-up text
        aElements[i].innerHTML = sText;
    }
    alert('Here is the modified markup:\n' + oList.innerHTML);
    // cancel form submission
    // W3C DOM method (hide from IE)
    if (evt.preventDefault) evt.preventDefault();
    // IE method
    return false;
}