//배열
let numArr:number[] = [1,2,3];

let strArr : string[] = ["Hello", "H", "temp"];

let boolArr : Array<boolean> = [true, false, true]; //제네릭

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr : (string | number)[]= [1, "hello"];

//다차원 배열
let doubleArr : number[][] = [
    [1,2,3],
    [4,5],
];

//튜플
//길이와 타입이 고정된 배열
let tup1 : [number, number] = [1,2];

let tup2 : [number, string, boolean] = [1, "2", true];

tup1.push(1);
tup1.pop();