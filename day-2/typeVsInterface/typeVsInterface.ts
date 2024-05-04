{
// interface
type user1 = {
    name: string;
    age: number
}
type userWithRole = user1 & {role: string};

interface userWithRole2 extends user2 {
    role: string
};

interface user2{
    name: string;
    age: number
}

const userData: userWithRole2 = {
    name: "ibrahim",
    age: 22,
    role: "webDeveloper"
}
console.log(userData.role)
// js --> object, array-->object, function-->object
    interface Roll{
        [index: number] :number
    }
    const rollNumber: Roll = [1, 2, 3];
    // interface and type uses in function
    type Add = (num1: number, num2: number)=>number
    interface Add1{
        (num1: number, num2: number):number
    }
    const add:Add=(num1:number, num2: number)=>num1 + num2
    console.log(add(5, 7));
//
}