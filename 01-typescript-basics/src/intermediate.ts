interface User{
    name: string,
    age: number,
    isAdmin: boolean,
    city: string;
}

let userDetails: User = {
    name: "Shreya",
    age: 25,
    isAdmin: true,
    city: "New York"
}


type name = string | number | boolean;
let userName: name = "Abhi";

type A = {name: string};
type B = {age : number};
type Person = A & B;
let people: Person = {
    name: "Ray",
    age: 25
}

class Device{
    name: string = "iPhone";
    price: number = 80000;
    updates: number = 6;
}
let d1 = new Device();
