function setImagePosition()
{
	var x=0;
	var y=0;

	var offsetPointer = document.getElementById('myCell'); // cElement;
		while (offsetPointer)
		{
			x += offsetPointer.offsetLeft;
			y += offsetPointer.offsetTop;
			offsetPointer = offsetPointer.offsetParent;
		}

		// correct for MacIE body margin factors
		if (navigator.userAgent.indexOf("Mac") != -1 &&
			typeof document.body.leftMargin != "undefined")
		{
			x += document.body.leftMargin;
			y += document.body.topMargin;
		}

		document.getElementById('myImg').style.left = x + "px";
		document.getElementById('myImg').style.top = y + "px";
		document.getElementById('myImg').style.visibility = "visible";
}