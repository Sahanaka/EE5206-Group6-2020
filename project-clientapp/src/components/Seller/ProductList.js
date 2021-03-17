import React, { useState, useEffect } from "react";
import ShopCategoryList from "./ShopCategoryList";
import axios from "axios";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshProductList();
  }, []);

  const productAPI = (url = "https://localhost:5001/api/Seller/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshProductList() {
    productAPI()
      .fetchAll()

      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("ProductId") == "0")
      productAPI()
        .create(formData)

        .then((res) => {
          onSuccess();
          refreshProductList();
        })
        .catch((err) => console.log(err));
    else
      productAPI()
        .update(formData.get("ProductId"), formData)
        .then((res) => {
          onSuccess();
          refreshProductList();
        })
        .catch((err) => console.log(err));
  };
  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };
  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      productAPI()
        .delete(id)
        .then((res) => refreshProductList())
        .catch((err) => console.log(err));
  };

  const imageCard = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSource} className="card-img-top rounded-circle" />
      <div className="card-body">
        <h5 style={{ fontWeight: "bold" }}>{data.title}</h5>
        <span>LKR : {data.price}.00/=</span> <br />
        <span>Quantity : {data.quantity} </span> <br />
        <span>Availabe Amount : {data.availabeAmount}</span> <br />
        <span>Size : {data.size}</span> <br />
        <span>Discount : {data.discount}</span> <br />
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.productId))}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron jumbotron-fluid py-4">
          <div className="container text-center">
            <h1 className="display-4">Catogory XXXXX</h1>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <ShopCategoryList addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </div>

      <div className="col-md-8">
        <table>
          <tbody>
            {
              //tr > 4 td
              [...Array(Math.ceil(productList.length / 4))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCard(productList[4 * i])}</td>
                  <td>
                    {productList[4 * i + 1]
                      ? imageCard(productList[4 * i + 1])
                      : null}
                  </td>
                  <td>
                    {productList[4 * i + 2]
                      ? imageCard(productList[4 * i + 2])
                      : null}
                  </td>
                  <td>
                    {productList[4 * i + 3]
                      ? imageCard(productList[4 * i + 3])
                      : null}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
