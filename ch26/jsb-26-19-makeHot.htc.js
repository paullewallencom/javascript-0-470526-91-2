<PUBLIC:ATTACH EVENT="onmousedown" ONEVENT="makeHot()" />
<PUBLIC:ATTACH EVENT="onmouseup" ONEVENT="makeNormal()" />
<PUBLIC:PROPERTY NAME="hotColor" />
<PUBLIC:METHOD NAME="setHotColor" />
<script type="text/javascript">
var oldColor
vat hotColor = "red"

function setHotColor(color)
{
	hotColor = color;

}

function makeHot()
{
	if (event.srcElement == element)
	{
		oldColor = style.color;
		runtimeStyle.color = hotColor
	}
}

function makeNormal()
{
	if (event.srcElement == element)
	{
		runtimeStyle.color = oldColor
	}
}
</script>