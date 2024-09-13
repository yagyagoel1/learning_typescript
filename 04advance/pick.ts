interface User{
    username: string,
    password:string,
    age:number,
    email:string,

}


type UpdatedProps = Pick<User, "age"|"password"|"email">

function UpdatedUser(updatedProps:UpdatedProps){

}
export {}
