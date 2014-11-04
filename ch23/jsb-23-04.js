// initialize when the page has loaded
addEvent(window, 'load', initialize);

function initialize()
{
	// intercept form submission
	addEvent(document.getElementById('theForm'), 'submit', calcFactorial);
}

function calcFactorial(evt)
{

	// consolidate event handling
	if (!evt) evt = window.event;

	// plug transformed input to output field
	var oInput = document.getElementById('input');
	var oOutput = document.getElementById('output');

	// if they both exist
	if (oInput && oOutput)
	{
		oOutput.value = factorial(oInput.value);
	}

	// cancel form submission
	// W3C DOM method (hide from IE5)
	if (evt.preventDefault) evt.preventDefault();

	// IE method
	return false;
}

function factorial(n)
{
	if (n>0)
	{
		return n * (factorial(n-1));
	} else {
		return 1;
	}
}