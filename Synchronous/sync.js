// synchronous = Executes line by line consecutively in a sequentail manner
               // code that wait for an operation to complete.

 // asynchronous = allows multiple operations to be performed concurrently without waiting 
              // Doesn't block the execution flow and allows the program to continue 
              // (I/O operations, network requests, fetching data)
              // handled with: callbacks, promises, Async/wait 
              
function func1(callback){
    setTimeout(() => {
        console.log("Task1");callback()
    },3000);
}
function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}
func1(func2);