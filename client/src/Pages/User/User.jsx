import React, { use, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const User = () => {
//   const [user, setUser] = useState([]);

//   const fetchData = async () => {
//     const response = await fetch("http://127.0.0.1:4000/api/users/getUser");
//     const final = await response.json();
//     setUser(final.users);
//   };

//   const location = useLocation();

//   const filteruser = user.filter(
//     (fil) => fil.email == location.pathname.slice(6)
//   );

//   console.log(filteruser);

//   useEffect(() => {
//     fetchData();
//   }, []);

  return <div>
    <div>
        <h2 className="text-center text-4xl">Hello, User</h2>

        <div>
            img
        </div>
    </div>
  </div>;
};

export default User;
