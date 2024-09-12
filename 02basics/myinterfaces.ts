interface User{
    readonly dbId :number
    email:string,
    userId:number
    googleId?:string
    //startTrail: ()=>string
    startTrail():string
    getCoupon(couponName:string,off:number):number
}

interface User {
    githubToken:string
}
interface Admin extends User{
role : "admin"|"ta"|"learner"
}
const yagya :Admin = {dbId:22,email:"y@gmia.com",userId:32,startTrail:()=>{
    return "trail started"
},getCoupon:(name:"kfdk",off:10)=>
    {return 10},githubToken:"SFdfds",role:"admin"}

 export {}