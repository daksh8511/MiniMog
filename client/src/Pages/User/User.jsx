import { useState } from "react";
import ManageAddress from "../../Components/ManageAddress/ManageAddress";
import PersonalInformation from "../../Components/PersonalInformation/PersonalInformation";

const User = () => {

  const [tabActive, setTabActive] = useState('personal information')

  return (
    <div className="gap-5 min-md:flex">
      {/* LEFT SIDE */}
      <div className="w-4/4 min-md:w-1/4">
        <div className="shadow-sm p-2">
          <span>Hello,</span>
          <h2>Daksh Sathwara</h2>
        </div>
        <ul className="p-2 shadow-sm mt-5 *:my-2">
          <li className={tabActive == 'personal information' ? 'hover:border-l-2 border-l-2 hover:ps-1 ps-1' : 'cursor-pointer'} onClick={() => setTabActive('personal information')}>Personal Information</li>
          <li className={tabActive == 'manage address' ? 'hover:border-l border-l-2 ps-1' : 'cursor-pointer'} onClick={() => setTabActive('manage address')}>Manage Address</li>
        </ul>
      </div>
      <div className="w-4/4 min-md:w-3/4">
        <div className={tabActive == 'personal information' ? 'block' : 'hidden'}>
          <PersonalInformation />
        </div>
        <div className={tabActive == 'manage address' ? 'block' : 'hidden'}>
          <ManageAddress />
        </div>
      </div>
    </div>
  );
};

export default User;
