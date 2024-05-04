{
// function with generic
    const createArray = (param: string):string[] =>{
        return [param]
    };
    const createArrayWithGeneric = <T>(param: T):T[] =>{
        return [param]
    };

    const res1 = createArray('bangladesh');
    const res2 = createArrayWithGeneric<string>('bangladesh');
    const res3 = createArrayWithGeneric<number>(101);
    // tuple uses in function
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q):[T, Q] =>{
        return [param1, param2]
    };
    type User = {name:string; age: number};
    const res4 =  createArrayWithTuple<number, User>(101, {name: 'rabbi', age: 20});
    const nextLevel = <T>(param: T)=>{
        const student ="next level developer"
        return {
            student,
            ...param
        }
    }
    const res5 = nextLevel({id: 101, name: 'rabbi'});
//
}