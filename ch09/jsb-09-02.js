var Boy = "Charlie Brown"; // global
var Dog = "snoopy"; // global

// using improper design to demonstrate a point
function demo()
{
    // local variable with the same name as a global
    var Dog = "Gromit";

    alert(Dog + " does not belong to " + Boy + ".");
}

// use global variables
alert(Dog + " belongs to " + Boy + ".");

// use global & local variables
demo();