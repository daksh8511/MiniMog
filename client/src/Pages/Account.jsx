import Direction from "../Components/Direction/Direction";
import { Link } from "react-router-dom";

const Account = () => {
  const submitForm = (e) => {
    e.preventDefault();
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
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-300 p-3 rounded"
            />
            <Link>Forgot Password?</Link>
            <Link className="bg-black text-white px-7 py-2 w-25 rounded">Sign In</Link>
          </form>
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl">New Customer</h2>
          <p className="text-gray-500">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <Link to={"/signup"} className="bg-black text-white px-7 py-2 rounded">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
