console.log("typescript is here still")

console.log("typescript is amazing ")


// class User {
//     email:string
//     name:string
//     private readonly city:string="Jaipur"
//     constructor(email:string,name:string){
//         this.email=  email;
//         this.name=name;
//     }
// }

class User {
    protected _courseCount = 1
    private readonly city:string="Jaipur"
    constructor(public email:string,public name:string){
        this.email=  email;
        this.name=name;
    }

    private deleteToken(){
        console.log("token deleted")
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }

    get courseCount():number {
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("course count should be more than 1")
        }
        this._courseCount=courseNum
    }
    
}
class SubUser extends User{
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const yagya  = new User("y@gmail.com","yaya")
// yagya.city = "fsd"