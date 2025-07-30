const path=require("path");
console.log(path.basename("./path.txt"));
console.log(path.dirname("data/users/path.txt"));
console.log(path.join("data","users","file.txt"));
console.log(path.extname("data/file.txt"));
console.log(path.parse("data/file.txt"));
console.log(path.resolve("data/file.txt"));