const User={
    name:"yagya",
    email:"yagya.hashnode.dev",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}
 let newUser ={name:"yagya",isPaid:false,email:"fdfd@m.com"}


createUser(newUser)


function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:300}
}


type User = {
    name:string;
    email:string;
    isActive:boolean
}
// type bool = boolean //name changed to bool
function createdUser(user:User){}


createdUser({name:"",email:"",isActive:true})

type Users = {
    readonly _id :string
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number
}

let myUser:Users={
    _id : "32434",
    name: "y",
    email: "y@gmail.com",
    isActive:false
}
type cardNumber ={
    cardnumber :string

}

type cardDate={
    cardDate:string
}

type cardDetails = cardNumber &cardDate &{
    cvv :number
}
function createUs(u:User){}
export {}