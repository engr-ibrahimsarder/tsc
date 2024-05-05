{
    // mapped types-----
    const numbers: number[] = [20, 34, 44];
    const name: string[] = ["orange", 'banana', 'apple'];
    const res = numbers.map((number)=> number.toString());
    console.log(res);

    type Areastring<T> ={
        [key in keyof T ]: T[key]
    }
    const area1: Areastring<{height: string; width: number}> = {
        height: '100',
        width: 50
    }
    
    //
}