import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const response = await fetch("http://127.0.0.1:4000/api/users/getUser");
    const final = await response.json();
    setUser(final.users);
  };

  const location = useLocation();

  const navigation = useNavigate()

  const filterUser = user.filter(
    (fil) => fil.email == location.pathname.slice(6)
  );

  const handleDeleteAccount = async (email) => {
    const response = await fetch("http://127.0.0.1:4000/api/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    localStorage.removeItem('login')
    localStorage.removeItem('isLogin')
    navigation('/')
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('login')
    localStorage.setItem('isLogin', JSON.stringify(false))
    navigation('/')
  }

  const becomeASeller = async() => {
    const getEmail = JSON.parse(localStorage.getItem('login'))
    const response = await fetch('http://127.0.0.1:4000/api/users/seller',{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        email : getEmail,
      })
    })

    const data = await response.json()
    console.log(data)
    navigation('/adding')
  }

  if (user.length == 0) {
    return "No User Are Login";
  }

  return (
    <div>
      <div className="shadow-sm p-3">
        <div>
          <h2>Personal Information</h2>
          <div className="flex gap-3 mt-2">
            <h2 className="border border-gray-300 pe-10 ps-2 py-1">
              {filterUser[0].fname}
            </h2>
            <h2 className="border border-gray-300 pe-10 ps-2 py-1">
              {filterUser[0].lname}
            </h2>
          </div>
        </div>
        <div className="mt-4">
          <h2>Email Address</h2>
          <div className="flex mt-2">
            <h2 className="border border-gray-300 pe-10 ps-2 py-1">
              {filterUser[0].email}
            </h2>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-left">
          <Link onClick={() => {becomeASeller()}} className="text-left my-2 cursor-pointer">Become A Seller</Link>
          <button onClick={handleLogout} className="text-left cursor-pointer">Logout</button>
          <button
            className="text-red-600 text-left cursor-pointer"
            onClick={() => handleDeleteAccount(location.pathname.slice(6))}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
