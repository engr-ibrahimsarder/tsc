{
//
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }
    const getData = async():Promise<Todo> =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data;
    }
    
    const data= getData()
    console.log(data)
    const createPromise = ():Promise<Todo> =>{
        return new Promise<Todo> ((resolve, reject) =>{
         
            if(data){
                resolve(data)
            }else{
                reject("This data is rejected")
            }
        })
    };
    const showData = async():Promise<Todo>=>{
        const data:Todo = await createPromise()
        return data
    }
    const result = showData()
    // console.log(result)
//
}