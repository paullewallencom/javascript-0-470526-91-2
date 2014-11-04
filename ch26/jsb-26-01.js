function assignKey(type, elem)
{
	if (window.event)	// IE, Opera, Safari, Chrome
	{
		if (window.event.keyCode == 13)
		{

			switch (type)
			{
				case "button":
				document.getElementById('access1').accessKey = elem.value;
				break;

				case "text":
				document.getElementById('access2').accessKey = elem.value;
				break;

				case "table":
				document.getElementById('myTable').accessKey = elem.value;
			}
			return false;
		}
	}
}