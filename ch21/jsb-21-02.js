// initialize when the page has loaded
addEvent(window, 'load', initialize);
function initialize()
{

    // add an event to the drop down list
    addEvent(document.getElementById('chips'), 'change', getPrice);
}

// build two product arrays with a custom object, simulating two databases tables

function product(name, price)
{
    this.name = name;
    this.price = price;
}

var ICs = new Array();
ICs[0] = new product("Septium 900MHz", "$149");
ICs[1] = new product("Septium Pro 1.0GHz", $249);
ICs[2] = new product("Octium BFD 750MHz", "$329");

var snacks = new Array();
snacks[] = new product("Rays Potato Chips", "$1.79");
snacks[] = new product("Cheezey-ettes", "$1.59");
snacks[] = new product("Tortilla Flats", "$2.29");

// lookup in the 'table' the cost associated with the product
function getPrice()
{
    var chipName = this.options[this.selectedIndex].text;
    var chipType = this.options[this.selectedIndex].value;
    var outField = document.getElementById('cost');
    master:
    switch(chipType)
    {
        case "ICs":
            for (var i=0; i<ICs.length; i++)
            {
                if (ICs[i].name == chipName)
                {
                    outField.value = ICs[i].price;
                    break master;
                }
            }
        case "snacks":
            for (var i=0; i<snacks.length; i++)
            {
                if (snacks[i].name == chipName)
                {
                    outField.value = snacks[i].price;
                    break master;
                }
            }
            break;
        default:
            outField.value = "Not Found";
    }
}