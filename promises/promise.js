// promises = An object that manages asynchronous operations.
//          Wrap a promise Object around{asynchronous code}
//          pending -> RESOLVED or REJECTED
//          new Promise((resolve,reject) =? {asynchronous code})

// Do these chores in order

// 1. walk the dog
// 2. clean the room
// 3. go to the store

function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        const dogWalked = true;
        if(dogWalked){
            resolve('walk the dog 🐕‍🦺');
        }
        else{
            reject('You did not walk the dog')
        } 
    },1000);
});
}

function cleanRoom(){
    
    return new Promise((resolve,reject) => {
        setTimeout(() =>{

            const roomCleaned = true;
            if(roomCleaned){
                resolve('clean the room 🧹');
            }else{
                reject('You did not clean the room');
            }
           
        }, 3000);
    });
}

function goToStore(){
    
    return new Promise((resolve,reject) => {
        setTimeout(() =>{

            const storeVisited = true;
            if(storeVisited){
                resolve('go to the store 🏪');
            }else{
                reject('You did not go to the store');
                }
            resolve('go to the store 🏪');
            
        }, 5000);  
    });
}
walkDog().then((value) => {console.log(value); return cleanRoom()})
.then((value) => {console.log(value); return goToStore()})
.then((value) => {console.log(value); console.log('all done!')})
.catch((err) => {console.log(err)});

