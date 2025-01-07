async function getdata() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve(450)
          },3000);
     })
}

async function main() {
     console.log("I am prasoon kc")
     console.log("I am prasoon kc")
     console.log("I am prasoon kc")
     let data= await getdata();
     console.log(data)
     console.log("I am prasoon kc")
     console.log("I am prasoon kc")
     console.log("I am prasoon kc")
     console.log("I am prasoon kc")
     
}
main();