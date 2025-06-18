import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const ManageAddress = () => {
  const [addressBox, setAddressBox] = useState(false);
  const [address, setAddress] = useState("");

  const [userAllAddress, setUserAllAddress] = useState([]);

  const location = useLocation();

  const handleAddress = async () => {
    console.log(address);
    const response = await fetch(
      "http://127.0.0.1:4000/api/address/addAddress",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: location.pathname.slice(6),
          address,
        }),
      }
    );

    const data = await response.json();

    setAddressBox(false)
  };

  const fetchAddress = async () => {
    const response = await fetch(
      `http://127.0.0.1:4000/api/address/getAddress?email=${location.pathname.slice(
        6
      )}`
    );
    const final = await response.json();
    setUserAllAddress(final.user);
  };


  useEffect(() => {
    fetchAddress();
  }, [userAllAddress]);

  return (
    <div>
      <div className="shadow-sm p-3">
        <div>
          <button
            onClick={() => setAddressBox(true)}
            className="flex items-center gap-1 hover:text-blue-500 cursor-pointer"
          >
            <FaPlus />
            ADD A NEW ADDRESS
          </button>

          <div className={addressBox ? "block" : "hidden"}>
            <textarea
              name=""
              id=""
              placeholder="Address (Full Address)"
              className="border p-2 border-gray-400 block"
              cols={50}
              rows={4}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleAddress}
                className="bg-black text-white px-7 py-1 mt-2"
              >
                Save
              </button>
              <button onClick={() => setAddressBox(false)}>Cancel</button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6 border-b border-gray-300 pb-3">
            <h2 className="text-center">Address</h2>
          </div>
          {userAllAddress.length == 0 ? (
            <h2 className="mt-5">Address Are Not Added!</h2>
          ) : (
            userAllAddress[0].addresses.map((users, i) => {
              return (
                <div key={i} className="flex items-center justify-between py-2">
                  <p>{users}</p>
                  <button className="bg-red-500 text-white px-7 py-2">Remove</button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
