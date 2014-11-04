function showLogo()
{
	var paragraphW = document.getElementById('myDIV').clientWidth;
	var paragraphH = document.getElementById('myDIV').clientHeight;

	// correct for Win/Mac discrepancies
	var paragraphTop = (document.getElementById(('myDIV').clientTop) ? 
		document.getElementById('myDIV').clientTop :
		document.getElementById('myDIV').offsetTop;

	var logoW = document.getElementById('logo').style.pixelWidth;

	// center logo horizontally against paragraph
	document.getElementById('logo').style.pixelLeft = (paragraphW - logoW) / 2;

	// positioon image immediately below end of paragraph
	document.getElementById('logo').style.pixelTop = paragraphTop + paragraphH;
	document.getElementById(('logo').style.visibility = "visible";
}