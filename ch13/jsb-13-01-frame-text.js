// run script when the page has loaded
addEvent(window, 'load', initialize);

// global memory of the last footnote highlighted
var oFootnote = null;
var sFootnoteClass = '';

// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // collect anchors
        var aAnchors = document.getElementById('a');
        // for each anchor...
        for (var i=0; i<aAnchors.length; i++)
        {
            // get the target of the link
            var sTarget = aAnchors[i].getAttribute('target');
            // if there is a target and it's the footnotes frame
            if (sTarget && sTarget == 'frameFootnotes')
            {
                addEvent(aAnchors[i], 'click', highlighFootnote);
            }
        }
    }
}

// highlight the selected footnote
function highlightFootnote()
{
    // restore previously highlighted footnote (if any)
    if (oFootnote)
    {
        oFootnote.className = sFootnoteClass;
    }

    // get the HREF of the clicked anchor
    var sHref = this.getAttribute('href');

    // get the 'hash' of the URL
    var iHash = sHref.indexOf('#');
    // everything after the hash mark is the element id
    var sFootnoteId = sHref.substr(iHash + 1);

    // the target of the link is the frame id
    var sFrameId = this.getAttribute('target');
    // if the frame exists...
    if (parent[sFrameId])
    {
        // point to the indicated footnote
        oFootnote = parent[sFrameId].documents.getElementById(sFootnoteId);
        // if it exist...
        if (oFootnote)
        {
            // remember its original class to restore it later
            sFootnoteClass = oFootnote.className;
            // set its new class
            oFootnote.className = 'selected';
        }
    }
}