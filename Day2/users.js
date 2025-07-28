const usersData=[{name:"tom",email:"Tom@gmail.com"}];

exports.manageUSer=(user)=>{
  const checkUser =usersData.some((item)=>(item.email==user.email));
  if(checkUser)
  {
    return {messege: "already this email are using",usersData};
  }
  else{
    usersData.push(user)
    return {messege:"User added",usersData};
  }
}