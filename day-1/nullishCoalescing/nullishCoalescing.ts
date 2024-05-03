{
//tarnary operator || optional chaing || nullish Coalescing 

const age: number = 105;
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Not Adult")
}
// tarnary operator
const boy = (age >= 18) ? "Adult" : "Not Adult"
console.log(boy)

// nullish Coalescing operator
// null || undefined --------> decision meking
const isAuthenticUser = null;
const user = isAuthenticUser ?? 'rahim'
const user3 = isAuthenticUser ? isAuthenticUser : 'guest'
console.log(user, user3)

//
}