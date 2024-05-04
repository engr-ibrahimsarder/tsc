{
// constraints using key
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }
    type Ownar = 'bike' | 'car' | 'ship'; // minually

    type Ownar2 = keyof Vehicle

    const getValueProperty = <X, Y extends keyof X>(obj: X, key: Y) =>{
        return obj[key]
    }
    const user4 = {
        name: 'abir',
        email: 'a@gmail.com'
    }
    const car ={
        model: '3adky',
        price: 2999
    }
    const result = getValueProperty(user4, 'email')
    const result1 = getValueProperty(car, 'model')
//
}