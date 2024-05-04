{
//
const kmToGm = (value: number | string):number | string | undefined =>{
    if(typeof value === 'number'){
        const converted = value * 1000;
        return (`${value} km is ${converted} gm`)
    }
}
 const result = kmToGm(5) as number;
 console.log(result)

//
}