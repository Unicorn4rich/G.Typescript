// 1_ forEach or map mein kya defrence hai 
// 2_ length
// 3_ split method
// 4_ objects all mrthods anounymous type, interface type and custom type
// 5_ object in object values acces in 2 way
// 6_ type Alias
// 7_ object pass in function and then function pass in array
// 8_ type ID = string | number;
// 9_ self check quiz using inquirer
// Home work assigment start
// // Basic function creation
// 1. Using default parameter
// 2. Using default parameter
// 3. Arrow function conversion
// 4. Implementing a Rest parameter

// 9_ aik student details ka object bnana hai phir aik function create karna hai jiske andar 
// ham object ko pass krwaenge Main data base mein or iske andar adding delete rename replace ke option bhi moujod ho 
// <-------------------------------------------------End---------------------------------------------------->
// forEach or map mein kya defrence hai ?

// Typescript mein forEach or map 2no methods arrays ke saath istemal kiye jaate hain jo array mein se har value ko 
// aik aik kar ke get karte hain or unpe opration perform karte hain lekin inmein thora sa farq hota hai.
// forEach method currunt time values par modification perform karwa kar print krwa deta hai lekin return nahi karta
// kisi bhi new array mein. 
// lekin map() ka method currunt time modification krwa ke bhi print krwa deta hai or iske ilawa apne andar ki gai 
// modification ko aik new array mein bhi return krwa deta hai...


// forEach()

// example 1
// let legends: string[] = ["shoaib", "arshad", "asif"];

// legends.forEach((item) => console.log( `He is Rich ${item}`))  // working



// // example 2
// let legends: string[] = ["shoaib", "arshad", "asif"];

// let main = legends.forEach((item) => `The great ${item}`)  
// console.log(main);  // undefined



// example 3
// let legends: string[] = ["shoaib", "arshad", "asif"];

// let main = legends.forEach((item) => {
//    return `The great ${item}`
// })  
// console.log(main);  // undefined

// <-------------------------------------------------End---------------------------------------------------->
// forEach or map mein kya defrence hai ?
// map():


// example 1
// let legends: string[] = ["shoaib", "arshad", "asif"];
// legends.map((item) => console.log(`He is Rich ${item}`)); // working in seperate line


// example 2
// let legends: string[] = ["shoaib", "arshad", "asif"];
// let main = legends.map((item) => `The great ${item}`)

// console.log(main);   // working but all values in one line



// example 2
// let legends: string[] = ["shoaib", "arshad", "asif"];
// let main = legends.map((item) => `The great ${item}`);

// main.forEach(item => console.log(item));  // working each value in seperate line

// <-------------------------------------------------End---------------------------------------------------->


// example 3
// let legends: string[] = ["shoaib", "arshad", "asif"];

// let main = legends.map((item) => {
//    `The great ${item}`
// })  
// console.log(main); // Output: [ undefined, undefined, undefined ]



// example 3
// let legends: string[] = ["shoaib", "arshad", "asif"];

// let main = legends.map((item) => {
//    return `The great ${item}`
// })  
// console.log(main);     // working in one line

// <-------------------------------------------------End---------------------------------------------------->

// example 4
// let legends: string[] = ["shoaib", "arshad", "asif"];

// let main = legends.map((item) => {
//    return `The great ${item}`
// })  
// console.log(main);     // working in one line

// main.map((item) => console.log(item)) // working in seperate line

// <-------------------------------------------------End---------------------------------------------------->
// length

// ye method agr veriable pe apply kiyya jaye to to ye us veriable ke charecters or spaces ko count kar ke dega
// lekin agr ye method array par apply kiyya jaye to ye array ke elements ko counts kar ke dega charecters ko nahi 
// or ye aik new veriable mein unka total return karega.


// example 1
// let para = "my name is shoaib";
// console.log(para.length)  // output 17


// example 2
// let para: string[] = ["shoaib", "arshad", "asif"];
// console.log(para.length); // output 3


// <-------------------------------------------------End---------------------------------------------------->
// objects all methods

// Typescript mein object aik aisi data type hota hai jo key-value pairs ki collection represent karta hai or Har aik
// key aik unique identifier hoti hai jo us key ki corresponding value ko hold karti hai. 
// Objects ko curly braces {} ke andar define kiya jata hai aur key-value pairs comma separated hote hain.

// Objects ka sabse bara faida ye hai ke ham multiple properties ko aik sath rakh sakte hain jo data ko 
// organize or access karne mein madad karta hai khaas kar jab hame multiple properties ko aik sath manage karna ho.


// example 1
// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// name, age, aur city  ye keys hain, jo har aik property ko identify karti hain.
// "John", 30, aur "New York" in keys ke corresponding values hain.

// <-------------------------------------------------End---------------------------------------------------->
// anounymous object

// Single-use Objects: Agar kisi specific object ka baar baar use nahi ho rha or sirf aik hi jagah par use karna hai
// to hum us object ko anonymous ke taur pe define karty hain. 

// or objects ke liye ham data types isliye define karte hain kiyun ke ham nahi chahty ke koi string ki jagah number
// or number ki jagah string reassign kardy. or is se ham user ko bhi strict kar sakty hain ke jo data type hamne
// define ki hai us jagah sirf wahi data type hi input hogi dosri nahi


// example 1

// let student: {
//     name: string,
//     studentId: string,
//     roll_number: number,
//     onsite: boolean
// } = {
//     name: "shoaib",
//     studentId: "Governer sindh It initiative",
//     roll_number: 204428,
//     onsite: true,
// }

// console.log(student); // working properly

// <-------------------------------------------------End---------------------------------------------------->
// custom data type interface object

// is object ko kisi bhi dusri jagah reuse kar sakte hain or Is object ko aik bar define karne ke bad ham isey
// multiple jagaho par istemal kar sakte hain, jahan bhi iski tarah ka data ka chahiye hoga.

// example 2

// interface student {
//     name: string,
//     studentId: string,
//     roll_number: number,
//     onsite: boolean
// }

// let person: student = {
//     name: "shoaib",
//     studentId: "Governer sindh It initiative",
//     roll_number: 204428,
//     onsite: true
// };

// console.log(person);


// <-------------------------------------------------End---------------------------------------------------->
// custom data type type object


// type student = {
//     name: string,
//     studentId: string,
//     roll_number: number,
//     onsite: boolean
// }

// let person: student = {
//     name: "shoaib",
//     studentId: "Governer sindh It initiative",
//     roll_number: 204428,
//     onsite: true
// };

// console.log(person);

// <-------------------------------------------------End---------------------------------------------------->
// interface or type object mein defrence kya hai?

// Interface or type dono TypeScript mein custom data types banane ke liye istemal kie jati hain, lekin dono ke beech
// thora farq hota hai. Yeh farq inke behavior or use case mein hota hai.

// Jab hum interface ke andar properties ko define karte hain, ham un properties ko sirf unki type ke saath define
// karte hain, lekin unmein koi value nahi hoti. Ye properties sirf aik blueprint hoti hain jismein sirf ham ye
// batatey hain ke unki data type kya hogi, Interface mein ham sirf properties or unki types ko define karty hain 
// lekin unmein koi default values, methods ya computed properties nahi hote.

// <-------------------------------------------------End---------------------------------------------------->
// type or interface object mein defrence kya hai?

// Type aik data type ko represent karta hai jismein ham object ke sath sath union intersection or dosri custom types
// bhi define kar sakte hain. Type mein ham properties, methods, computed properties, or kuch bhi define kar sakte hain.

// Types ka istemal ham tab karte hain jab specific data type ko represent karna chahte hain, jismein object ke sath sath
// or bhi kuch shamil karna chahty hain Ye zyadatar custom data types ko represent karne ke liye istemal hoti hain,
// jese ki union types intersection types, aur aliased types...



// Union Type: Hum type keyword ka istmal karke multiple data types ko combine karke union type bana sakte hain:


// type ID = string | number;

// let userId: ID;
// userId = "user123"; // valid
// userId = 456; // valid

// <-------------------------------------------------End---------------------------------------------------->
// object values acces in 2 way

// example 1
// interface jobs {
//     name: string,
//     company: string,
//     salery: number,
//     month: number,
//     work: string
// }

// let person: jobs = {
//     name: "shoaib",
//     company: "No name",
//     salery: 25000,
//     month: 1,
//     work: "full day"
// }

// object se indivisual value acces karne ke tariqe

// console.log(person);   // full object print
// console.log(person.name);    // shoaib
// console.log(person["salery"])  // 25000

// <-------------------------------------------------End---------------------------------------------------->
// object in object values acces in 2 way

// example 2

// interface jobs {
//     name: string,
//     company: string,
//     salery: number,
//     month: number,
//     work: string,
//    secondOb: {
//         name: string,
//         adress: string,
//         time: number              
//     }
// }

// let person: jobs = {
//     name: "shoaib",
//     company: "No name",
//     salery: 25000,
//     month: 1,
//     work: "full day",
//     secondOb: {
//         name: "asif",
//         adress: "pata nahi",
//         time: 9 
//     }
// }

// console.log(person); // print all  object in object
// console.log(person.secondOb); // print small objects
// console.log(person.secondOb.adress); // Output form secondOb: pata nahi
// console.log(person.secondOb["name"]);   // Output asif

// <-------------------------------------------------End---------------------------------------------------->
// modify object property

// let person: {name: string, age: number, adress: string} = {

//     name: "shoaib",
//     age: 23,
//     adress: "mai nahi btaonga"
// }

// person.name = "mithoo";    // modifying
// console.log(person.name);  // Output mithoo

// person.age = 13;
// console.log(person.age);  // output 13

// person.email = "sk9952908@gmail.com";  // not assign becouse email property is not in object

// console.log(person); all object modify with new values

// <-------------------------------------------------End---------------------------------------------------->
// Type alias
// ye aik custom data type hoti hai jise ham object ke liye tayyar karte hain (type) ke zariye.
// Type alias ka istemal repetive code ka kam karne ke liye or code ko reusable banane ke liye hota hai. 
// Agar ham aik data type ko multiple jaghon par istemal karna chahty hain to tab hamy us data ko aik bar 
// type alias mein define karke rakh lety hain or phir jahan chahy us data type ko assign kar ke use kar letay hain.


// ye jo type ham bana rhy hain isy hi type alias kehty hain

// type user = {
//     name: string,
//     age: number,
//     haspet: boolean
// }

// is object ko hamne type alias data type assign kardi

// let user1: user = {
//     name: "shoaib",
//     age: 23,
//     haspet: true
// }

// console.log(user1);

// <-------------------------------------------------End---------------------------------------------------->
// 7_ object pass in function and then function pass in array


// let Data_base = [];

// type details = {
//     name: string,
//     age: number,
//     fatherName: string,
//     roll_num: number,
//     course: string,
//     email: string,
//     adress: string,
//     onsite: boolean,
// }

// let student: details = {
//     name: "Shoaib",
//     age: 23,
//     fatherName: "Bashir ahmed",
//     roll_num: 204428,
//     course: "Governer House IT initiative Web 3.0",
//     email: "sk9952908@gmail.com",
//     adress: "mai nahi btaonga",
//     onsite: true
// };



// function passing_Obj(object_values: { [key: string]: any }){

//    for (let obj in object_values){
//      console.log(`${obj}: ${object_values[obj]}`)
//    }

//    return object_values;
// }


// let print = passing_Obj(student);

// Data_base.push(print);

// console.log(Data_base);


// Notes
// is function meinloop ke zariye jo ye  console.log(`${obj}: ${object_values[obj]}`) expression likha gaya hai
// isme ${obj} mein object ki key value store hoti hain or isme ${object_values[obj]} object ki corresponding key value 
// hoti hai isliye jab ham console mein dono ko print krwaty hain to key value ke sath uski corresponding value
// bhi print ho jati hai aik sath...

// <-------------------------------------------------End---------------------------------------------------->
// self check quiz using inquirer


// import inquirer from 'inquirer'

// let self = await inquirer.prompt(
//     {
//         name: "check",
//         message: "What is the capital of France",
//         type: "input"
//     }
// );

// function quiz(question: string, correctAnswer: string){

//     if(self.check.toLowerCase() === correctAnswer.toLowerCase()){
//         console.log("Correct answer")
//     }
//     else{console.log("Wrong answer. try again")}
// };

// quiz("What is the captal of france", "paris");


// <-------------------------------------------------End---------------------------------------------------->
// Home Work Assigment Start
// <-------------------------------------------------End---------------------------------------------------->
// 1. Basic function creation


// function calculateProduct(parameter1: number, parameter2: number):number{
//    return parameter1 * parameter2
// };

// let result = calculateProduct(5, 10);
// console.log("your result: " + result);  // Output 50


// <-------------------------------------------------End---------------------------------------------------->
// 2. Using default parameter

// function greet(name: string, greeting: string = "Hello"){
//    return `${greeting} ${name}`
// };

// let result = greet("shoaib");
// console.log(result);   // Output Hello shoaib

// <-------------------------------------------------End---------------------------------------------------->
// 3. Arrow function conversion

// convert the following traditional function into an arrow function.


// example 1

// function add(a: number, b: number){
//     return a + b
// };

// let result = add(23, 26);
// console.log(result);  // Output 49


// example 2

// let add = (a: number, b: number) => a + b;

// let result = add(3, 5);
// console.log(result);  // Output 8


// <-------------------------------------------------End---------------------------------------------------->
// 4. Implementing a Rest parameter

// Write a function sumAll that uses a rest parameter to take any number of arguments
// and returns their sum.

// function sumAll(...Rest_para: number[]){

//   return  Rest_para.reduce((acc, curr) => acc + curr, 0);

// };

// let result = sumAll(1, 2, 3);
// console.log(result);  // output 6

// Note
// is reduce method mein hamne 2 parameter bnaye jin mein se (acc) parameter ko 0, ki value assign kardi or
// jo (curr) hai wo array mein se aik aik kar ke new value leta hai jisme se aik value wo apne andar rakhta hai or
// dosri value acc mein rakhta hai phir un values ko apas mein sum karta rehta hai or single sum ki value return 
// kar rha hai 

// <-------------------------------------------------End---------------------------------------------------->
// 5. Returning another function

// Create a function multiplier that takes a number as its argument and returns another function. 
// The returned function should take a single number as its argument and return the product of its 
// argument and tha argument of the first function.

// function multiplier(){}

// multiplier(3)



// <-------------------------------------------------End---------------------------------------------------->
// project
// aik student details ka object bnana hai phir aik function create karna hai jiske andar 
// ham object ko pass krwaenge Main data base mein or iske andar adding, delete, rename, replace, ke option bhi moujod ho.

import inquirer from 'inquirer'

// // main data base everything store in 
let Data_Base = [];

let checker = []

// Asking questions from User and store it in object
let Student_details = await inquirer.prompt(
    [
        {
            name: "name",
            message: "What is your name?",
            type: "string"
        },

        {
            name: "father",
            message: "What is your father name?",
            type: "string"
        },

        {
            name: "age",
            message: "What is your age?",
            type: "number"
        },

        {
            name: "course",
            message: "What course are you pursuing?",
            type: "string"
        },

        {
            name: "location",
            message: "Are you studying onsite or offline?",
            type: "checkbox",
            choices: [{name: "Onsite", value: "Onsite"},{name: "Offline", value: "Offline"} ]
            // choices: ["Onsite", "Offline"]

        }
    ]
);


// function that accepting object argument from object
function data_pass(object_values: Record<string, any>){

    for(let data in object_values){
        console.log(`${data}`)
    }

    // Data_Base.push(New_data);
    return object_values
}

let print = data_pass(Student_details); // retun object in veriable
Data_Base.push(print);
console.log(Data_Base); // Main data list print



// yahn ham main data base ki list mein changes kar rhy hain
let modification = await inquirer.prompt(
    [
        {
            name: "ask",
            message: "Do you want to change anything?",
            type: "confirm",
            default: "false"
        }
    ]
);



// agr user ne changes karnay chahy to uske liye ye list show hogi
if(modification.ask === true){
    let user_yes = await inquirer.prompt([
        {
            name: "modi",
            message: "Please choose your option",
            type: "list",
            choices: ["Add", "Delete", "Rename", "Replace"]
        }
    ]);


//  Add ki statment
    if(user_yes.modi === "Add"){
      let adding = await inquirer.prompt(
            {
                name: "add",
                message: "What you want to add in your list?",
                type: "input"
            }
        )

        if(adding.add !== ""){
            checker.push(adding.add)
            console.log(Data_Base); // Main data list print
            console.log("Your input list", checker)
        };
    };


// Delete ki statment
    if(user_yes.modi === "Delete"){

        let del = await inquirer.prompt([
            {
                name: "delete",
                message: "What you want to delete?",
                type: "list",
                choices: Data_Base
            }
        ]);

       let deleting_val = Data_Base.indexOf(del.delete);

       if(deleting_val >= 0){
        Data_Base.splice(deleting_val, 1);
        console.log(`Your deleted value: ${deleting_val}`);
        console.log(`Your final list after delete ${Data_Base}`)
       }
    };


    // Rename ki statment
    if(user_yes.modi === "Rename"){
        let reni = await inquirer.prompt(
          [
            {
                name: "rename",
                message: "Select the item you want to rename",
                type: "list",
                choices: Data_Base
            },

            {
               name: "put",
               message: "Enter the new name for rename",
               type: "input"
            }
        ]
        );

          let renam_val = Data_Base.indexOf(reni.rename);

        Data_Base[renam_val] = reni.put;
        console.log(`This is your list after Rename ${Data_Base}`)

    };


    // Replace statment
    if(user_yes.modi === "Replace"){
        let replo = await inquirer.prompt(
          [
            {
                name: "rep",
                message: "Select the item you want to rename",
                type: "list",
                choices: Data_Base
            },

            {
               name: "puting",
               message: "Enter the new name for rename",
               type: "input"
            }
        ]
        );

          let replace_val = Data_Base.indexOf(replo.rep);

        Data_Base[replace_val] = replo.puting;
        console.log(`This is your list after Replace ${Data_Base}`)

    }

}
