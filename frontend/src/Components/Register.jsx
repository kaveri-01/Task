import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register (){
    const [userData, setUserData] = useState({name:"", email:"", number:"",password:""});
    const router = useNavigate();
    
    function handleData(e){
        const name = e.target.name
        const value = e.target.value
        setUserData({...userData,[name]:value})
    }
    async function handleSubmit(e){
        e.preventDefault();
        if(userData.name && userData.email && userData.number && userData.password){
            const response = true;
            if (response){
                router('/login')
                alert("Registeration done!")
                router('/login')
            }
        } else {
          alert  ("please fill all the data")
          
        }
    }
    return(
        <div className="border-2 border-gray-500 w-56 m-auto mt-10 h-96 rounded-md ">
            <h1 className="text-2xl text-center mt-7">REGISTER</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
         <lable className="ml-3">Name</lable> <br/>
         <input className="border-2 border-gray-500 rounded-sm outline-none ml-3 bg-black" type="text" name='name' onChange={(e)=> handleData(e)}></input><br/>
         <lable className="ml-3">Email</lable> <br/>
         <input className="border-2 border-gray-500 rounded-sm outline-none ml-3" type="email" name='email' onChange={(e)=> handleData(e)} ></input><br/>
         <lable className="ml-3">Number</lable> <br/>
         <input className="border-2 border-gray-500 rounded-sm outline-none ml-3" type="number" name='numbeer' onChange={(e)=> handleData(e)} ></input><br/>
         <lable className="ml-3">Password</lable> <br/>
         <input className="border-2 border-gray-500 rounded-sm outline-none ml-3" type="password" name='password'  onChange={(e)=> handleData(e)}  ></input><br/>
         <input className="mt-7 ml-20 w-16 rounded-sm bg-orange-600" type="submit" value='Register'></input>

            </form>
        </div>
    )

}
export default Register