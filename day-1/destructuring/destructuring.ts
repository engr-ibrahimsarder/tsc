{
    // object destructuring ------------
const user ={
    id: 101,
    name:{
        firstName: "Md Ibrahim",
        lastName: "Sarder"
    },
    education:{
        ssc: "jhalokathi",
        diploma: "Barisal"
    },
    contactNo:"01798097005"
}

const {
    name : {firstName},
    name: {lastName},
    contactNo
} = user;
console.log(`my name is ${firstName} ${lastName} and contact number ${contactNo}`);
// array destructuring ------------
const friends = ["saim", "sumon", "prantick", "rijbi", "sojib", "santanu"];
const [a, b, bestFriend] = friends;
console.log(a, b, bestFriend)
}