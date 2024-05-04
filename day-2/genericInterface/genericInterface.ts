{
// generic - interface
    interface Developer<X, Y = null>{
        name: string;
        computer:{
            model: string;
            releaseYear: number;
            price: number
        };
        smartWatch: X;
        bike?: Y
    }
    type Watch ={
        heartTest: boolean, 
        sleapTest: boolean, 
        price: number
    }
    const poorDeveloper: Developer<Watch> = {
        name: "PC",
        computer: {
            model: 'asus',
            releaseYear: 2023,
            price: 70000
        },
        smartWatch: {
            heartTest: true,
            sleapTest: true,
            price: 5000
        }
    }
    // rich man watch
    interface RichManWatch{
        heartTest: boolean;
        sleapTest: boolean;
        price: number;
        color: string
    };
    type RichManBike ={
        model: string;
        engineCapacity: string
    }

    const richDeveloper: Developer<RichManWatch, RichManBike> = {
        name: "PC",
        computer: {
            model: 'asus',
            releaseYear: 2023,
            price: 70000
        },
        smartWatch: {
            heartTest: true,
            sleapTest: true,
            price: 5000,
            color: "silver",
        },
        bike: {
            model: 'Yahma',
            engineCapacity: '220cc'
        }
    }

//
}