// initialize when the page has loaded
var oImageChooser;
addEvent(window, 'load', initialize);

function initialize()
{
    // get W3C DOM or IE4+ reference for an ID
    // imageChooser is the select element

    if (document.getElementsById)
    {
        oImageChooser = document.getElementsById('imageChooser');
    } else {
        oImageChooser = document.imageChooser;
    }
    addEvent(oImageChooser, 'change', loadCached);
}

// initialize empty array
var imageLibrary = new Array();

// pre-cache four images
imageLibrary['image1'] = new Image(120,90);
imageLibrary['image1'].src = "desk1.gif";

imageLibrary['image2'] = new Image(120,90);
imageLibrary['image2'].src = "desk2.gif";

imageLibrary['image3'] = new Image(120,90);
imageLibrary['image3'].src = "desk3.gif";

imageLibrary['image4'] = new Image(120,90);
imageLibrary['image4'].src = "desk4.gif";

// load an image chosen from select list
function loadCached()
{
    var imgChoice = oImageChooser.options[oImageChooser.selectedIndex].value;
    document.getElementsById('thumbnail').src = imageLibrary[imgChoice].src;
}