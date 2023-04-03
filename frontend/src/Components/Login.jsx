import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

function Login() {
  const { state, login } = useContext(AuthContext);
  console.log(state, " state here");
  const [userData, serUserData] = useState({ email: "", password: "" });
  const router = useNavigate();
  function handleData(e) {
    const name = e.target.name;
    const value = e.target.value;
    serUserData({ ...userData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userData.email && userData.password) {
      // const response =  axios.post("/login", {userData} )
      const response = true;
      if (response) {
        login(userData);
        alert("Login Successfull!");
        router("/");
      }
    } else {
      alert("Please fill all fields.");
    }
  }
  return (
    <div className="mt-10 border-2 border-gray-500 rounded-md w-52 m-auto h-80">
      <h1 className="text-center mt-8 font-bold mb-4 text-2xl">Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="ml-1 mt-4 ">Email</label>
        <input
          className="border-2 border-gray-400 outline-none rounded-sm ml-1 mb-5 mt-2"
          type="email"
          name="email"
          onChange={(e) => handleData(e)}
        ></input>
        <label className="mt-5">Password</label>
        <input
          className="border-2 border-gray-400 outline-none rounded-sm ml-1 mb-5 mt-2"
          type="password"
          name="password"
          onChange={(e) => handleData(e)}
        ></input>
        <input
          className="mt-2 ml-14 w-20 bg-orange-600 rounded-md cursor-pointer"
          type="submit"
          value="Login"
        ></input>
      </form>
    </div>
  );
}
export default Login;
