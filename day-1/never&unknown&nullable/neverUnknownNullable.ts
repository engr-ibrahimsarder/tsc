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
//
}