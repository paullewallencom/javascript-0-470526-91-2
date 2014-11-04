// controller functions (disabled)

function goFirst()
{
    alert("in goFirst");
}

function goPrev()
{
    alert("in goPrev");
}

function goNext()
{
    alert("in goNext");
}

function goLast()
{
    alert("in goLast");
}

// event handler assignments

function init()
{
    if (document.getElementsById)
    {
        oImageFirst = document.getElementsById('first');
        oImagePrev = document.getElementsById('prev');
        oImageNext = document.getElementsById('next');
        oImageLast = document.getElementsById('last');

    } else {

        oImageFirst = document.first;
        oImagePrev = document.prev;
        oImageNext = document.next;
        oImageLast = document.last;

    }

        addEvent(oImageFirst, 'click', goFirst;
        addEvent(oImagePrev, 'click', goPrev;
        addEvent(oImageNext, 'click', goNext;
        addEvent(oImageLast, 'click', goLast;

}
// initialize when the page has loaded
addEvent(window, 'load', init);