function addTwo (num:number):number{
    return num+2
    //return "hello"
}


function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(email:string,username:string,isPaid:boolean){}

let loginUser =(email:string,username:string,isPaid:boolean=false)=>{}

let myValue = addTwo(5)

getUpper("hi")

signUpUser("hitesh", "hitesh@lco.dev", false)

loginUser('h', 'ali@.com')


// function getVal(myVal: number):boolean{
//     // if(myVal > 5){
//     //     return true
//     // }
//     // return "200 ok"
// }


const getHello = (s : string):string=>{
    return ""
}

//const heros = ["thor", "spiderman", "ironman"]

const heros = [1,2,3]

heros.map((hero):number=>{
    return hero
})


// heros.map((hero):string=>{
//     return hero
// })

function consoleError(errmsg:string): void{
    console.log(errmsg)
}

function handleError(err:string):never{
    throw new Error(err)
}