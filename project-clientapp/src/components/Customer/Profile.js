import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProfileDetails from "./Profiledetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/profile.css";




function Profile({ auth: { user } }) {
    const [fields, updateFields] = useState({
      name: 'user.name',
      mobile_no: 'user.contatct_No',
      address: 'user.address'
    });
    for (const key in user) {
      console.log(`${key}: ${user[key]}`);
      if (key == 'name'){
        fields.name = user[key]
      }
      if (key == 'contatct_No')
        fields.mobile_no = user[key]
      if (key == 'address')
        fields.address = user[key]
  }
    return (
      
      <div className="container">
        <ProfileDetails fields={fields} updateFields={updateFields} />
      </div>
    );
  }

  Profile.propTypes = {
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(Profile);
  









