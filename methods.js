const user = {
   users: [
  {
    name:"steffan",
    email: "stefansalvatore@email.com",
    password:"09390939",
    id: 1
  },
  {
   name:"klaus mikealson",
   email:"klaus@gmail.com",
   password:"09990999",
   id: 2,
  },
   ],

   add:function(name, email, password, passwordConfirmation){
        const id = this.users.length + 1;
        if ( password.length < 8 ){
            throw new Error("password must be atleast 8 charachters");
        }

        const matchedUser = this.users.find(user=>{
            if(user.name==name && user.email==email) return user;
        });

        if( matchedUser && matchedUser.password == password){
            throw new Error("the password" + password + "  is a repetitive one ...")
        }

        if(password!==passwordConfirmation){
            throw new Error("it is not tha same please try  the password code...");
        }

        const user = {
            name:name,
            email:email,
            password:password,
            id:id
        };

        this.users.push(user);
    },
    
    get:function(id){

        console.log(this.users);
            return this.users.find(user=>user.id==id)
    

    },
    
    

    delete:function(id){
    
        const index = this.users.findIndex(user=>user.id==id);
        this.users.splice(index,1);
    
    }
    
}

user.add("rehim","rehim@nawekan.com","12345678","12345678");

console.log(user.users);

user.delete(2);

console.log(user.users);

const currentUser= {
    monthly: 3200,
    compensation: 400,
    inflationFactor: 100,
    children: 200,
    healthInsurance: -200,
    pensionInsurance: -250,
    unemploymentInsurance: -300,
    marriage: 125,
    };
   //TODO find keys
    const currentUserKeys = Object.keys(currentUser);
    let sum = 0;
    
   //TODO Iterate key arrays
   currentUserKeys.forEach(key=>{
        // console.log(currentUser[key]);
        //TODO summarize them
        sum = sum + currentUser[key];
    });

    console.log(sum);
   