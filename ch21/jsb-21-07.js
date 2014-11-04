// generic appender
function attachToEnd(theNode, newTag)
{
    try
    {
        var newElem = document.createElement(newTag);
        theNode.appendChild(newElem);
    }

    catch (e)
    {
        switch (e.name)
        {

            case "INVALID_CHARACTER_ERR" :
                // statements to handle this ? error
                break;
            case "HIERARCHY_REQUEST_ERR" :
                // statements to handle this ? error
                break;
            case "WRONG_DOCUMENT_ERR" :
                // statements to handle this ? error
                break;
            case "NO_MODIFICATION_ALLOWED_ERR" :
                // statements to handle this ? error
                break;
                default:
                    // statements to handle any other error
        }
        return false;
    }
    return true;
}