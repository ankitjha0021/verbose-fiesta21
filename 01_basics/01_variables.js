const accountId = 14453
let accountEmail = "ankitkumar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail="hc@gmail.com"
accountPassword="123678"
accountCity="Bihar"


console.log(accountId);

/*

Prefer not to use var 
because of issue in block scope and functional scope

*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
