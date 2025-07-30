// Readfile method

// const fileSystem=require("fs");
// console.log("filesystem");
// fileSystem.readFile("./read.txt","utf-8",(error,data)=>{ //add paramater like:-"utf-8"  //this line has three parameters
// if (error)
// {
//     console.log("Unable to readfile");
// }
// // console.log(data.toString()); 
// console.log(data); //with using "utf-8"
// });



//Asynchrouns function
// const fileSystem=require("fs");
// console.log("filesystem started");
// fileSystem.readFile("./read.txt",(error,data)=>{ //add paramater like:-"utf-8"  //this line has three parameters
// if (error)
// {
//     console.log("Unable to readfile");
// }
// console.log(data.toString()); 
// console.log(data);//with using "utf-8"
// });
// console.log("filsystem ended");





//synchronous method
// const fileSystem=require("fs");
// console.log("fileSystem started");
// const file=fileSystem.readFileSync("./read.txt","utf-8");
// console.log(file);
// console.log("filesystemm ended");




//Write file method
//adding text data into write.txt file

// const filesystem=require("fs")  
// filesystem.writeFile("./write.txt","Adding to write file",(error,data)=>{
//   console.log("succesfully writen into file");
// })


//adding {}object data into write.txt file

// const filesystem=require("fs")
// const Skill={skills:"Node.js",frontend:"React.js",database:"mysql"}
// filesystem.writeFile("./write.txt",JSON.stringify(Skill),(error,data)=>{
//   console.log("succesfully writen into file");
//   console.log(data); //Undefined it doesn't read the data in writeFile
// })




//AppendFile method

// const filesystem=require("fs")
// filesystem.appendFile("./read.txt","Full stack developer",(error,data)=>{
// console.log(error);
// console.log("Succesfully appended into another .txt file");
// })


//AppendFile into another folder

// const filesystem=require("fs")
// filesystem.appendFile("./Data/content.txt","Fullstack developer",(error,data)=>{
//     console.log(error);
//     console.log("added successfully");
//     console.log(data);
// })



//file system method for folders
// const fs=require("fs");
// fs.mkdir("./folder",(error,data)=>{
// if (error)
// {
//     console.log("unable to create folder");
// }
// console.log("folder created");
// })



//file system method to delete folders
// const fs=require("fs");
// fs.rmdir("./folder",(error,data)=>{
// if(error)
// {
//     // console.log(error);
//     console.log("already deleted folder");
// }
// else{
// console.log("Removed folder");
// }
// })







// remove file method
// const fs=require("fs");
// fs.unlink("./Data/delete.txt",(error,data)=>{
//     if(error) 
//         {
//             console.log("Already deleted the file");
//         }
//         else
//         {
//         console.log("File deleted");
//         }
// });





// see the file is present are not
// single file to check
// const fs=require("fs");
// const a=fs.existsSync("./Data/cntent.txt")
// console.log(a);

//multiple files to check
// const fs=require("fs");
// fs.readdir("./",(error,data)=>{
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log(data);
//     }
// });



//using promises async and await

const fs=require("fs/promises")
async function read()
{
   console.log("file reading is started")
   const a=await fs.readFile("./Data/content.txt","utf-8");
   console.log(a);
   console.log("file reading is ended");
}
read();

