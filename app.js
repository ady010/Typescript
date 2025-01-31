"use strict";
// // enumrations
//     enum UserRoles{
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN = "super_admin"
// }
// //
// let a: number;
// a = 12
// //void
// function abcde(): number{
//     let num1 = 1
//     let num2 = 1
//     let sum = num1 + num2
//     return sum
// }
// // never
// function abc(): never{
//     while(true){
//     }
// }
// abc()
// console.log("hello");
//
// interface User{
//     name: string,
//     email: string,
//     password: string,
//     gender?: string
// }
// function abcd (obj: User){
// }
// abcd()
//Classes making
class Device {
    constructor() {
        this.name = "LG";
        this.price = "20000";
        this.category = "Tv";
    }
}
let d1 = new Device();
// constructor
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker("Milton", 1200);
