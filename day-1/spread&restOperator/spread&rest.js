"use strict";
{
    // spread operator--------
    const friends1 = ["abir", "saim", "prantik"];
    const friends2 = ["sumon", "shakil", "rijbi"];
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
    const broList = Object.assign(Object.assign({}, bro1), bro2);
    // rest operator-----------
    const greetFriend = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriend("rijbi", 'fahim', 'santano', 'kawsar', 'sojib');
}
