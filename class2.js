console.log("Suman");
console.log("Mahato");
console.log("SRM");

//to create function function --(parameter) { content }

function name() {
  console.log("Suman");
  console.log("Mahato");
  console.log("SRM");
}
// use to call function --(arguments);
  name();

//concatination attaching multiple strings into one string

function Greeting(name,age){
  console.log("Hi! " + name + " , Your age is " + age);
  
}
Greeting("Suman","20");

// here name and age is parameter which tells what does this function requires to work basically entry in party by using gift

// here suman and 20 are arguments

// dp ca 
//dp - declaring function parameter 
//ca - calling function arguments

// parameters and variable are different

// flags are used to confirm the successfull running of the code like green flag (thumbs up)

function Greeting(name,age){
  console.log("Hi! " + name + " , Your age is " + age);
  return "all ok";
}
var flag = Greeting("Suman","20");

console.log(flag);




