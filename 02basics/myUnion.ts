let score:number | string = 33


score = 44

score ="55"


type User ={
    name:string;
    id:number
}

type Admin ={
    username:string
    id:number
}

let yagya: User |Admin = {name:"yagya",id:43}

yagya= {username:"hc",id:343}

// function getDBId(id:number|string){
//     console.log(`db id is ${id}`);
// }


getDBId(3)
getDBId("3")

function getDBId(id:number|string){
    if(typeof(id)=="string"){
        id.toLowerCase()
    }
    else
    id+2;

}

const data:number[]= [1,2,3]
const data1:string[]= ["1","2","3"]
const data3:(string| number|boolean)[]= [1,2,3,"4",true]


let seatAllotment:"aisle"| "middle"|"window"

seatAllotment =  "aisle"
// seatAllotment = "serta"
export {}