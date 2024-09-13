interface User{
    username: string,
    password:string,
    age:number,
    email:string,

}


type UpdatedProps = Pick<User, "age"|"password"|"email">

type UpdatePropsOptional = Partial<UpdatedProps>


function UpdatedUser(updatedProps:UpdatePropsOptional){
    
}
export {}