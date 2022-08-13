const user = {
   users: [
  {
    name:"steffan",
    email: "stefansalvatore@email.com",
    password:"09390939",
    id: 2
  },
  {
   name:"klaus mikealson",
   email:"klaus@gmail.com",
   password:"09990999",
   id: 3,
  },
   ],

   add(name, email, password, passwordConfirmation){
    this.name = name;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    


     if ( password.length < 8 ){
     throw Error("password must be atleast 8 charachters");}




     for (i=0; i < this.password.length; i++){
        if (this.password[i]===password){
            throw Error("the password" + password + "  is a repetitive one ...")
        } 
    } this.password.push(password);


     

    if(password!==passwordConfirmation){
        throw alert("it is not tha same please try  the password code...");
    }else{
        return ("youre password succefully changed")}

    },
    
    get(id){

        if(id===users.id){
            return users 
        }

    },
    
    

    delete(id){
    if(id===this.users.id){
        return this.users.shift(id)
    }
    }
    
}


console.log(user)