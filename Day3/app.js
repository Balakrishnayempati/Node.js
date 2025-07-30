// builtin modules
// const http=require("http");
// http.createServer((request,response)=>{
// response.writeHead(400,{
//     "content-type":"application/json",
// })
//     response.write("server staring in port number:8080");
    
//     response.end();
// })
// .listen(8080,()=>{
//     console.log("Server are started");
// })



// custom modules
// const skills=require("./skills.js");
// console.log("sills",skills);
// console.log(require("./skills"));


// const {hello,skill,location}=require("./skills")
// console.log("hello");
// console.log(hello());
// console.log(skill());
// console.log(location());



//es6 modules and ejs 
// import skills,{user} from "./skills.js";
// console.log(skills());
// console.log(user());



//third party modules with ejs

// import colors from "colors";
// console.log(colors.green("hi"));
// console.log(colors.red("404 error"));
// console.log(colors.rainbow("Rainbow colors"));
// console.log(colors.bgBlue("Background"));
// console.log(colors.bgRed("Error occured"));


// third party using with commonjs
// const c=require("colors");
// console.log(c.black("Black in color"));
// console.log(c.white("White in color"));
// console.log(c.green("Node.js"));
// console.log(c.red("Error"));
// console.log(c.bgBlue("Background color"));
// console.log(c.bgWhite("Background color"));
// console.log(c.rainbow("Rainbow effect"));

// using uuid third party
// const id=require("uuid");
// console.log("Random uuid numbers");
// console.log(id.v4());
// console.log(id.v1());

// import {v4} from "uuid";
// console.log(v4());