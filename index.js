
// if statement . nested if statement
let age = 23;
let hasLicense = false;
if (age >= 16){
   console.log("You are old enough to drive!")
   if(hasLicense){
      console.log(" You also have a driving license to drive.")
   }
   else{
    console.log("Sorry! but you don't have a license to drive")
   }
}
else{
    console.log("You are not old enough to drive");
}