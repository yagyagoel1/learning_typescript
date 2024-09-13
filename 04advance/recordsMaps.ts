type User={
    id:string,
    username:string
}
// type Users ={
//     [key:string]:User
// }

type Users = Record<number,User>


const users = new Map<number,User>()
