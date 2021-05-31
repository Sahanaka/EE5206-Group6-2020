import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = event => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data
    });
  };

  cancelOnClick = event => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                form={form_id}
              >
                Save
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.cancelOnClick}
                style={{ marginLeft: "8px" }}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={this.editOnClick}
            >
              Edit
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <label type="text" name="name" className="form-control">
              {this?.props?.fields?.name}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <label type="text" name="brand_name" className="form-control">
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.mobile_no}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="mobile_no"
              className="form-control"
              placeholder="Mobile No"
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <h2>Profile</h2>
        {this._renderAction()}
        <Form id={form_id}>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
        </Form>
        {/* <h4>Current value</h4> */}
        <div>
          {/* <pre>
            <code>{JSON.stringify(this.props.fields, null, 2)}</code>
          </pre> */}
        </div>
      </React.Fragment>
    );
  }
}

const ProfileDetails = withFormik({
  mapPropsToStatus: props => {
    return {
      edit: props?.edit || false
    };
  },
  mapPropsToValues: props => {
    return {
      name: props.fields.name,
      email: props.fields.email,
      mobile_no: props.fields.mobile_no
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false
    });
  }
})(MaintenanceForm);

export default ProfileDetails;
