function addTwo(num:number){
    // num.toUpperCase()
    return "hello";
}

function getUpper(val:string){
    return val.toUpperCase()
}
function signUpUser(name:string,email:string,isPaid:boolean){

}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}
let myval = addTwo(5)
getUpper("yagya")
signUpUser("yagya","yagyagoel1.hashnode.dev",false)
loginUser("y","y.com")


function getValue(myval:number):boolean{
    if(myval>5){
        return true
    }
    // return "200 ok"
    return false;
}

const getHello = (s:string):string=>{
    return ""
}

const heros = ["thor","spiderman","ironman"] 
heros.map((hero:string):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}
function handleError(errmsg:string):never{
    throw new Error(errmsg)

}
export {}