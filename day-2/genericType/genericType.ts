{
// generic type
    type GenericArray<T> = Array<T>;
    // const age: number[] = [22, 22, 20];
    const age: GenericArray<number> = [22, 22, 20];
    // const productName: string[] = ["potato", "oil", "mustar oil"];
    const productName: GenericArray<string> = ["potato", "oil", "mustar oil"];
    // const admin: boolean[] = [true, false, true];
    const admin: GenericArray<boolean> = [true, false, true];

    const products: GenericArray<{name: string, price: number, color: string}> = [
        {
            name: "Computer",
            price: 22000,
            color: "black"
        },
        {
            name: "laptop",
            price: 120000,
            color: "silver",
        }
    ]

    // generic tuple
    type GenericTuple<x, y>= [x, y];
    const student: GenericTuple<string, string> = ["rabbi", "joy"];
    const teacher: GenericTuple<number,{name: string, role: string}> = [
        101,
        {
            name: "ibrahim",
            role: "web Developer"
        },
    ]


//
}