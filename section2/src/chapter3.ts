let user1 : object= {
    id : 1,
    name : "홍길동",
}; // 객체라는 것 외에 어떠한 정보도 x

let user2 : {
    id? : number;
    //id 프로퍼티가 있어도 되고, 없어도 된다.
    //단, 있으면 무조건 number여야 함.
    name : string
} = {
    id : 2,
    name : "임꺽정",
};

let dog : {
    name : string;
    color : string;
}= {
    name : "초코",
    color : "brown",
};

let config : {
    readonly apiKey : string;
    // readonly가 붙으면 수정 불가(읽기 전용)
} = {
    apiKey : "MY API KEY",
};

// config.apiKey = "hacked";
