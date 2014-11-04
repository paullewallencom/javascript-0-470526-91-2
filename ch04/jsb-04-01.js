// Initialize when the page has loaded
addEvent(window, 'load', addText);

function addText() {
    // ensure a DOM-aware user agent
    if (!document.appendChild || !document.createTextNode) return;

    // create a text node
    var oNewText = document.createTextNode("Only DOM-aware user agents running JavaScript will reveal this text.");

    // create a paragraph
    var oParagraph  =document.createElement('p');

    // insert the text into the paragraph
    oParagraph.appendChild(oNewText);

    // insert the paragraph at the end of the document
    document.body.appendChild(oParagraph);
}}