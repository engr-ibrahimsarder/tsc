{
// spread operator--------
const friends1: string[] = ["abir", "saim", "prantik"];
const friends2: string[] = ["sumon", "shakil", "rijbi"];
friends1.push(...friends2);

const bro1 = {
    python: "ibrahim",
    javaScript: "fahim",
    react: "sojib" 
};
const bro2 = {
    threejs: "rijbi",
    asp: "rajdip",
    nextjs: "kawsar" 
};
const broList = {
    ...bro1,
    ...bro2
};
// rest operator-----------

const greetFriend = (...friends: string[]) =>{
    friends.forEach((friend)=>console.log(
        `Hi ${friend}`
    ))
};
greetFriend("rijbi", 'fahim', 'santano', 'kawsar', 'sojib')









}