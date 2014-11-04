function sortByYear(type)
{
	oscars.Sort = (type == "normal") ? "-Year" : "+Year";
	oscars.Reset();
}

function filterInCommon(form)
{
	var filterExpr1 = form.filter1.options[form.filter1.selectedIndex].value;
	var filterExpr2 = form.filter2.options[form.filter1.selectedIndex].value;

	var operator = (form.operator[0].checked) ? "=" : "<>";
	var filterExpr = filterExpr1 + operator + filterExpr2;
	oscars.Filter = filterExpr;
	oscars.Reset();
}