{
    // class and object
    class Car {
        constructor(public name: string, public color: string, public price: number){}
        makeCar(){
            console.log(`My car name is ${this.name} and color ${this.color} and price ${this.price}`)
        }
    }
    const car1 = new Car('BMW', 'Black', 50000);
    car1.makeCar()

    //
}