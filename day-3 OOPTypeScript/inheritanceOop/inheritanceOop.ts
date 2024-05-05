{
    // inheritance OOP
    // Parent Class---------
    class Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSleep(number: number){
            console.log(`${this.name} is sleep in ${number}`)
        }
    }
    // Student Child Class ---------------
    class Student extends Person {
        constructor(name: string, age: number, address: string){
        super(name, age, address)
        }
    }
    // Teacher Child Class
    class Teacher extends Person{
        designation: string;
        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
        }
        getClass(number: number){
            console.log(`${this.name} is class in ${number}`)
        }
    }
    const student = new Student('abir', 22, 'uttara');
    const teacher = new Teacher('abir', 40, 'uttara', 'Teacher');
    const data = student.getSleep(4)
    console.log(data)
    //
}