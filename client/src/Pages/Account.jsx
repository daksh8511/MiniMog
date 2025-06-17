import { useEffect, useState } from "react";
import Direction from "../Components/Direction/Direction";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault();

    if(!email || !password){
      return alert("Enter Email or Password")
    }

   try {
    const response = await fetch('http://127.0.0.1:4000/api/users/signin',{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email, password})
    })

    const data = await response.json()

    if(data.message == "User Not Registered"){
      return alert("User Not Registered")
    }

    if(data.message == "password not matched"){
      return alert("Password not matched!");
    };

    if(data.message == "Login Successfully"){
      alert("Log In Successfully")

      localStorage.setItem('login', JSON.stringify(email))
      navigation('/')
    }

   } catch (error) {
    console.log(error)
   }
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-4xl">Log In</h2>
      <div className="my-5">
        <Direction />
      </div>
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-4 items-center">
        <div>
          <h2 className="text-3xl mb-4">Log In</h2>
          <form action="" onSubmit={submitForm} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-300 p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-300 p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link>Forgot Password?</Link>
            <button
              type="submit"
              className="bg-black text-white py-2 px-7 rounded w-25"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl">New Customer</h2>
          <p className="text-gray-500">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <Link
            to={"/signup"}
            className="bg-black text-white px-7 py-2 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
