import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SellerMain from "./SellerMain"

const defaultImageSource = "/img/images.png";

const initialFieldValues = {
  ProductId: 0,
  Title: "",
  Price: "",
  AvailabeAmount: "",
  Discount: "",
  Size: "",
  Quantity: "",
  Image: "",
  ImageSource: defaultImageSource,
  ImageData: null,
  ShopProductId: 1,
  CategoryProductId: 1,
};

const ShopCategoryList = (props) => {
  console.log('shopproductlist', props.sellerId)
  const { addOrEdit, recordForEdit, sellerId } = props;
  const [sId, setsId] = useState(JSON.parse(atob(localStorage.token.split('.')[1])))
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("dddddddddddddddddd");
    if (recordForEdit != null) {
      console.log(recordForEdit);
      setValues(recordForEdit);
    }
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let ImageData = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          ImageData,
          ImageSource: x.target.result,
        });
      };
      reader.readAsDataURL(ImageData);
    } else {
      setValues({
        ...values,
        ImageData: null,
        ImageSource: defaultImageSource,
      });
    }
  };
  console.log("siidi", sId)
  const validate = () => {
    let temp = {};
    temp.Title = values.Title == "" ? false : true;
    temp.ImageSource = values.ImageSource == defaultImageSource ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      var ShopProductId = sId.id; // need to fetch forenkey ID
      var CategoryProductId = 1; // need to fetch forenkey ID
      const formData = new FormData();
      formData.append("ProductId", values.ProductId);
      formData.append("Title", values.Title);
      formData.append("Price", values.Price);
      formData.append("AvailabeAmount", values.AvailabeAmount);
      formData.append("Discount", values.Discount);
      formData.append("Size", values.Size);
      formData.append("Quantity", values.Quantity);
      formData.append("Image", values.Image);
      formData.append("ImageData", values.ImageData);
      formData.append("ShopProductId", ShopProductId);
      formData.append("CategoryProductId", CategoryProductId);

      console.log('rtrt', formData)

      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  return (
    <>
      <div className="container text-center">
        <p className="lead">Add New Product</p>
      </div>
      <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
        <div className="card">
          <img src={values.ImageSource} className="card-img-top" />
          <div className="card-body">
            <div className="form-group">
              <input
                type="file"
                accept="image/*"
                className={"form-control-file" + applyErrorClass("ImageSource")}
                onChange={showPreview}
                id="image-uploader"
              />
            </div>

            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("Title")}
                placeholder="Product Title"
                name="Title"
                value={values.Title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("Price")}
                placeholder="Price"
                name="Price"
                value={values.Price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("AvailabeAmount")}
                placeholder="AvailabeAmount"
                name="AvailabeAmount"
                value={values.AvailabeAmount}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Discount"
                name="Discount"
                value={values.Discount}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="Size"
                name="Size"
                value={values.Size}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("Quantity")}
                placeholder="Quantity"
                name="Quantity"
                value={values.Quantity}
                onChange={handleInputChange}
              />
            </div>
         
            <div className="form-group text-center">
              <button type="submit" className="btn btn-light">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

// ShopCategoryList.propTypes = {
//   user: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   user: state.auth.user
// });

export default ShopCategoryList;
