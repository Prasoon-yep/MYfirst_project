// function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(450)
//         }, 5000);
//     })
// }

async function getdata(){
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x)
    let data=await x.json()
    return 40
}
async function main() {
    console.log("I am prasoon")
    console.log("I am prasoon")
    console.log("I am prasoon")
    let data= await getdata()
    console.log(data)
    console.log("I am prasoon")
    console.log("I am prasoon")
    console.log("I am prasoon")

}
main();