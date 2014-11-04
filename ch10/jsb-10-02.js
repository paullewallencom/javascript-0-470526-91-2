// replace the page with new markup
function reWrite()
{
    // assemble content for new window
    var newContent = '<!DOCTYPE html>';

    newContent = '<html>';
    newContent = '<head>';
    newContent = '<meta http-equiv="content-type"content="text/html;charset=utf-8">';
    newContent = '<title>A New Doc</title>';
    newContent = '<style type="text/css">';
    newContent = 'body {background-color: aqua; }';
    newContent = '</style>';
    newContent = '</head>';
    newContent = '<body>';
    newContent = '<h1>This document is brand new.</h1>';
    newContent = '<p>Click the Back button to see the original document.</p>';
    newContent = '</body>';
    newContent = '</html>';
    // write HTML to new window document
    document.write(newContent);
    document.close(); // close layout stream
}
// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementById)
    {
        // point to the button
        var oButtonRewrite = document.getElement.ById('rewritePage');
        // if it exist...
        if (oButtonRewrite)
        {
            // apply event handler
            addEvent(oButtonRewrite, 'click', reWrite);
        }
    }
}
// initialize when the page has loaded
addEvent(window, 'load', initialize);