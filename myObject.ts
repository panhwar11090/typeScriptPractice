// const User= {
//     name:"huzaifa",
//     email:"huzaifaa190@gmail.com",
//     isActive:true
// }

// function createUser({name:string, isPaid:boolean}){}

// // let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

// //createUser(newUser);

// //  createUser({name:"huzaifa",isPaid:12, price: true});

// function createCourse ():{name:string,price:number}{
//         return {name:"react", price:399}
// }

// // alias
// type Detais ={
//     name: string;
//     price:number,
//     isActive :boolean
// }

// function setDetails(user:Detais):Detais{
//     return {name: "", price: 0, isActive: true}
// }

// setDetails({name:"", price:0,isActive:true})

type User = {
    readonly _id: string
    name: string
    email:string
    isActive:boolean
    creditCardDetails?: number
}

let myUser : User ={
    _id: "123",
    name:"huzaifa",
    email:"a.com",
    isActive:false
}

type cardNumber = {
    cardnumber: string
}


type cardDate = {
    cardDate: string
}

type cardDetails = cardDate & cardNumber & {
    cvv : number
}

//myUser._id = "456"
myUser.isActive = false

// console.log(myUser)

export{}