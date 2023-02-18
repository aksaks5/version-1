// Define the array of names
var names = ["John", "Jane", "Jim", "Jack", "Jill"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];

  // Determine if the name starts with J or not
  if (name.charAt(0).toLowerCase() === "j") {
    // If it does, print "Goodbye" to the console
    console.log("Goodbye " + name);
  } else {
    // If it doesn't, print "Hello" to the console
    console.log("Hello " + name);
  }
}
