//this; In a function definitionm this refers to "owner" of the function


let student = {
    username : "root",
    password : "password",
    getUser : function(){
        console.log(this.username,this.password)
        console.log(this);
    },
    todo:{
        title:'test'
    },
    getTodo: function(){
        console.log(this.todo.title)
    }
}


// function test(){
//     console.log(this,"test")
//     function childOfTestFunction() {
//         console.log(this)
//     }
//     }

//     childOfTestFunction();
//     test();

student.getUser();
student.getTodo;

function showThis(param){
console.log(param)
}




let self = {
    name:'priya',
    age:33,
    profession:'Front End Developer',
    getUser : function(){
    console.log(this.name, this.age, this.profession)
    console.log(this)
    //let result =  `name:${this.name}`; console.log(result) - this is to print it claerly and  a pretty format
    },
    know:{
        title:'Nederlands',
    }

}

function showThis(param){
    console.log(param)
    }

self.getUser();


let school = {
    class:['kk1', 'kk2', 'kk3'],
    facility:['playground', 'slide', 'garden'],
    status:'registered',
    totalNumber:10,
    knowResult: function(){
        console.log(this.status)
        console.log(this)
    },
    parent1 : {
        name:"Ved",
        add:"Street4,1160",
        paid:250,

    },
    parent2 : {
        name:"Chad",
        add:"Street25,1160",
        paid:250,

    },
    parent3 : {
        name:"mehta",
        add:"Street30,1160",
        paid:'unpaid',

    },

}

school.knowResult()
console.log();

console.log(school.parent1);


























/* Emmanuel Code
const duurFrieten= {
 taap:"klentje",
 praas: 25,
 BTW:1.21,
 sauws: "kuurriesketsjup",
 muuntienhaat: "euro",
 zegdieswamoedemme:function(){
 console.log(
`veur maa een ${this.taap} me ${this.sauws} en rap een bikke!!!
 `
 ) 
 } 
 ,
 dakostanzeuveel: function(){
 console.log(
`OK. dat kost tan ${this.praas} ${this.muuntienhaat}, metten BeeTeeWee derbaa komt dat oep slechts ${this.praas*this.BTW}. moetter zouwt op aa frietjes? da was toch ee ${this.taap} me ${this.sauws} ee????????
`
 )
 
 },
 waaaddaaa: function(x){
 console.log("gaa zaa nen echten" + x )
 console.log(this.praas*this.BTW +", met de bTW derbaa, normool kost da " + this.praas/5 +"!!!!!!!!!!! "+ this.muuntienhaat +" dakannaatochnie!?")
 
 }
}
//functies aanroepen:
duurFrieten.zegdieswamoedemme();
duurFrieten.dakostanzeuveel();
duurFrieten.waaaddaaa(" afzetter!! ");//parameter doorgeven */



