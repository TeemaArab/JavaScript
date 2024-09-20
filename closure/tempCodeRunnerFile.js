function bankAccount(){
    let balance = 0;

    function bankClerk(action, amount){
         if(action=== "deposit"){
            balance += amount;
            console.log(`Deposited amount:  ${amount}. New balance is $${balance}`);
         }
         else if( action === "withdraw"){
            balance -= amount;
            console.log(`Withdrawn amount:  ${amount}. New balance is $${balance}`);
         }
         else if (action === "CheckBalance"){
            console.log(`Deposited amount:  ${amount}. New balance is $${balance}`);
         }
         
    }
    return bankClerk;
}

const myBankClerk = bankAccount();
myBankClerk("Deposit", 100);