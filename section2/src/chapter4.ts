//타입 별칭

type User = {
    id : number;
    name : string;
    birth : string;
    bio : string;
    location : string;
};

//type User = {};
//동일한 스코프에서는 선언 불가

let user1 : User= {
    id : 1,
    name : "honggilldong",
    birth : "0000.00.00",
    bio : "hi",
    location : "서울시",
};

let user2 : User = {
    id : 2,
    name : "aa",
    birth : "0000.00.00",
    bio : "hi",
    location : "제주시",
};