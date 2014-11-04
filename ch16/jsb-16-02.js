function toHex(dec)
{
    hexChars = "0123456789ABCDE";
    if (dec > 255)
    {
        return null;
    }
    var i = dec % 16;
    var j = (dec - i) / 16;
    result = "0X";
    result += hexChars.charAt(j);
    result += hexChars.charAt(i);
    return result;
}