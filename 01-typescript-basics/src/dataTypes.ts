let age: number = 25;

let name: string = "Alice";

let isAdmin: boolean = true;

let numberArray: number[] = [1,2,3,4,5];

let stringArray: string[] = ["Akhil", "Raj", "Shreya"];

let tuple: [string, number, boolean] = ["Ajay", 25, true];

enum Status{
    success = "SUCCESS",
    failure = "FAILURE",
    pending = "PENDING",
}

let enumStatus : Status = Status.failure

let unknownValue: unknown = "Raj";

if(typeof unknownValue == "string"){
    unknownValue.charAt(0);
}

if(typeof unknownValue == "number"){
    unknownValue.toFixed(2);
}

function voidFund(name: string): void{
    console.log(name);
}

let username: string | null = "Rahul";

