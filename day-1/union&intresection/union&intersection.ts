{
    // union data type is emplement in the variable
    type Frontend = "great" | "good"
    const newDeveloper: Frontend = "great"
   // union data type is emplement in the object
    type User ={
        name: string;
        gender: "male" | "female"
    }
    const user: User={
        name: "Ibrahim",
        gender: "male"
    }
   // intersection data type is emplement in the object

   type FrontendDeveloper = {
    skills: string[];
    desigenation1: string
   }
   type Backend = {
    skills: string[];
    desigenation2: string
   }
   type FullStack = FrontendDeveloper & Backend
   const fullStackDeveloper: FullStack = {
    skills: ["html", "css", "javaScript", "mongoose"],
    desigenation1: "Frontend",
    desigenation2: 'Backend'
   }
}