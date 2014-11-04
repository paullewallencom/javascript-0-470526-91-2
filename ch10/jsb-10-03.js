var newWindow;
function makeNewWindow()
{
    newWindow = window.open("","","status,height=200,width=300");
}
function subWrite()
{
    // make new window if someone has closed it
    if (!newWindow || newWindow.closed)
    {
        makeNewWindow();
    }
    // bring subwindow to front
    newWindow.focus();
    // assemble content for new window
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
    newContent = '</body>';
    newContent = '</html>';

    // write HTML to new window document
    newWindow.document.write(newContent);

    // close layout stream
    newWindow.document.close();
}
// apply behaviors when document has loaded
function initialize()
{
    // do this only if the browser can handle DOM methods
    if (document.getElementsById)
    {
        // point to the button
        var oButtonRewrite = document.getElementsById('writeSubwindow');
        // if it exists...
        if (oButtonRewrite)
        {
            // apply event handler
            addEvent(oButtonRewrite, 'click', subWrite);
        }
    }
}

// initialize when the page has loaded
addEvent(window, 'load', initialize);
addEvent(window, 'load', makeNewWindow);