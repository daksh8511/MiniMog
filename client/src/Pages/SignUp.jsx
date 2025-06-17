import { useState } from "react";
import Direction from "../Components/Direction/Direction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigation = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !password || !rePassword) {
      alert("Please Try Again!");
      return;
    }

    if (password !== rePassword) {
      alert("Password Are Not Match");
      return;
    }

    fetch("http://127.0.0.1:4000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        rePassword: rePassword,
      }),
    })
      .then((succ) => alert("User Login Successfully"))
      .catch((err) => console.log(err));

    localStorage.setItem("email", JSON.stringify(email))

    navigation("/otp");
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-4xl">Sign Up</h2>
      <div className="my-5">
        <Direction />
      </div>
      <div>
        <h2 className="text-center mb-5 text-2xl">Sign Up</h2>

        <form
          action=""
          onSubmit={submitForm}
          className="flex flex-col justify-center w-100 pr-2 min-md:pr-0  m-auto space-y-4"
        >
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-300 p-2 rounded"
            required
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-300 p-2 rounded"
            required
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-300 p-2 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-300 p-2 rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-Password"
            className="bg-gray-300 p-2 rounded"
            required
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <p className="text-gray-400">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <button type="submit" className="p-2 bg-black text-white cursor-pointer">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
