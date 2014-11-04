// extract front part of string prior to searchString
function getFront(sMain, sSearch)
{
    iOffset = sMain.indexOf(sSearch);
    if (iOffset == -1)
    {
        return null;
    } else {
        return sMain.substring(0, iOffset);
    }
}

// extract back end of string after searchString
function getEnd(sMain, sSearch)
{
    iOffset = sMain.indexOf(sSearch);
    if (iOffset == -1)
    {
        return null;
    } else {
        return sMain.substring(iOffset + sSearch.length, sMain.length);
    }
}

// insert insertString immediately before searchString
function insertString(sMain, sSearch, sInsert)
{
    var sFront = getFront(sMain, sSearch);
    var sEnd = getEnd(sMain, sSearch);
    if (sFront == null || sEnd == null)
    {
        return null;
    } else {
        return sFront + sInsert + sSearch + sEnd;
    }
}

// remove sDelete from sMain
function deleteString(sMain, sDelete)
{
    return replaceString(sMain, sDelete, "");
}

// replace sSearch with sReplace
function replaceString(sMain, sSearch, sReplace)
{
    var sFront = getFront(sMain, sSearch);
    var sEnd = getEnd(sMain, sSearch);
    if (sFront == null || sEnd == null)
    {
        return null;

    } else {
        return sFront + sReplace + sEnd;
    }
}