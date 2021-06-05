import React, { useState } from "react";
import ProfileDetails from "./Profiledetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/profile.css";




function Profile() {
    const [fields, updateFields] = useState({
      name: "Admin",
      email: "admin@example.com",
      mobile_no: "012345678"
    });
  
    return (
      <div className="container">
        <ProfileDetails fields={fields} updateFields={updateFields} />
      </div>
    );
  }
  
  export default Profile;









