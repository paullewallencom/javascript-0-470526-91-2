function nextField()
{
	var elem = document.getElementById('display');
	var fieldName = elem.dataFld;
	var currFieldNum = parseInt(fieldName.substring(7,fieldName.length),10);
	currFieldNum = (currFieldNum == 10) ? 1 : ++currFieldNum;
	elem.dataFld = "Article" + currFieldNum;
}

function prevField()
{
	var elem = document.getElementById('display');
	var fieldName = elem.dataFld;
	var currFieldNum = parseInt(fieldName.substring(7,fieldName.length),10);
	currFieldNum = (currFieldNum == 1) ? 10 : --currFieldNum;
	elem.dataFld = "Article" + currFieldNum;
}

function toggleComplete()
{
	if (document.getElementById('buttonWrapper').className == "")
	{
		document.getElementById('display').dataSrc = "#rights_raw";
		document.getElementById('display').dataFld = "column1";
		document.getElementById('display').dataFormatAs = "text";
		document.getElementById('buttonWrapper').className = "hiddenControl";
	} else {
		document.getElementById('display').dataSrc = "#rights_html";
		document.getElementById('display').dataFld = "Article1";
		document.getElementById('display').dataFormatAs = "HTML";
		document.getElementById('buttonWrapper').className = "";
	}
}