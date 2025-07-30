// const{addition,subtraction}=require("./cal");
// {
//     console.log("Arithematic opearters using comman module")
//     console.log(addition(5,10));
//     console.log(subtraction(15,10));
// }
// const{division}=require("./cal");
// {
//     console.log(division(5,5));
// }
// const{multiplication}=require("./multiplication")
// {
//     console.log(multiplication(10,5));
// }
// const{division}=require("./division")
// {
//     console.log(division(14,4));
// }
// const{modulo}=require("./modulo")
// {
//     console.log(modulo(22,2));
// }
// const{data}=require("./data")
// {
//     console.log(data());
// }
// const{manageUSer}=require("./users")
// const users=()=>{
//   return manageUSer({name:"aritrak",email:"aritrak@gmail.com"});
// };
// console.log(users());







//How to create localhost server
// const http =require("http");
// http.createServer((request,response)=>{
//     response.write("server port number::7878")
//     response.end();
// })
// .listen(7878,()=>{
//     console.log("Server started");
// });





// axios with dummyjson
// const http=require("http");
// const axios = require("axios")
// http.createServer((request,response)=>{
//     axios
//     .get("https://dummyjson.com/products")
//     .then((res)=>{
//     response.write(JSON.stringify(res.data));
//     response.end();
//     });
// })
// .listen(8080,()=>{
//     console.log("Server started")
// });







