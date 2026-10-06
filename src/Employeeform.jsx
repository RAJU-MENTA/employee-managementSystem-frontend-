import { useState } from "react";
function Employeeform(){
    
        const[formdata,setformdata]=useState({
            name:"",
            dept:"",
            email:"",
            password:""

        });
        function handlechange(e) {
            const name=e.target.name
            const value=e.target.value
            setformdata({
                ...formdata,
                [name]:value
            });
            
        }
    
    function hogaya(e) {
        e.preventDefault();
       console.log(formdata);        
    }
    return(
        <>
           <h1> Employee Form </h1>
           <form onSubmit={hogaya}>
           <input 
           type='text'
           name='name'
           placeholder="Enter your name:"
           value={formdata.name}
           onChange={handlechange}/>
           <input 
           type='text'
           name='dept'
           placeholder="Enter your BRANCH:"
           value={formdata.dept}
           onChange={handlechange}
           />
           <input 
           type='email'
           name='email'
           placeholder="Enter your email:"
           value={formdata.email}
           onChange={handlechange}
           />
           <input 
           type='password'
           name='password'
            placeholder="Enter your your password:"
           value={formdata.password}
           onChange={handlechange}
          />
           <button type="submit">Register </button>

         </form>
        </>
    );
}
export default Employeeform;