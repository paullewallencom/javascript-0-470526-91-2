function isNumber(inputStr)
{
    for (var i=0; i<inputStr.length; i++)
    {
        var oneChar = inputStr.substring(i, i +1);
            if (oneChar < "0" || oneChar > "9")
            {
                alert("Please make sure entries are numerals only.");
                return false;
            }
    }
    return true;
}