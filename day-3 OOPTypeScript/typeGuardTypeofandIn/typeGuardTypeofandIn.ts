{
    // type of  -----------
    type Alphaneumaric = string | number;
    const add = (num1: Alphaneumaric, num2: Alphaneumaric)=>{
        if(typeof num1 === 'number' && typeof num2 === 'number'){
            console.log(num1 + num2)
        }else{
            console.log(num1.toString() + num2.toString())
        }
    }
    add(10, 22)
    // type in
    //
}