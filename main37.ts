// ASSIGNMENT NO 37:

/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
 the default message, and a shirt of any size with a different message.
*/

console.log("ASSIGNMENT NO 37:");

// Making a Function:
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`) 
} 

// Calling a function with by-defualt values:
make_shirt ();

// Calling a function now with Medium size and default message:
make_shirt("Medium");

// Calling a function now with small size and also Different Print message:
make_shirt("Small", "I Love JavaScript");