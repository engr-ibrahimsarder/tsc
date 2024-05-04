{
//
// nullable type
    const searchName = (value: string | null) =>{
        if(value){
            console.log("search")
        }
        else{
            console.log("not searching")
        }
    }
    searchName(null)
    // unknown type
    const geetSpeedMeterToKilloMeter = (value: unknown) =>{
        if(typeof value === 'number'){
            const converted = (value / 1000);
            console.log(converted)
        }
        else if(typeof value === 'string'){
            const [result] = value.split(" ");
            const converted = (parseFloat(result) / 1000);
            console.log(converted)
        }
    }
    geetSpeedMeterToKilloMeter(`5000 meter`)

    // never
    const thowError = (msg: string):never =>{
        throw new Error(msg)
    }
    thowError('not return velue')
//
}