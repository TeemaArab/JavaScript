// repeat some code limited amount of time
// for(let i= 12; i>0; i--){
//    console.log(i);
// }
// console.log("Happy New Year!")

// to escape an iteration, we can use continue key word for example
for(let i= 1; i <= 20; i++){
   if ( i == 13){
    continue;
   }
   else{
    console.log(i);
   }
 }

 // we can use break instead of continue; however, break takes you out of the loop completely.
 for(let i= 1; i <= 20; i++){
    if ( i == 13){
     break;
    }
    else{
     console.log(i);
    }
  }