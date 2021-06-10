import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class OrderAccept extends Component {

    
    render() {
      return(
      
        <div>
        <title>Bootstrap Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\n    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n    .row.content {height: 1500px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n    \n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n    \n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height: auto;} \n    }\n  " }} />
        <div className="container-fluid">


          <style dangerouslySetInnerHTML={{__html: "\nbody {\n  background-color: lightgray;\n}\n" }} />
          <div className="row content">
            
            <div className="col-sm-3 sidenav">
            <a className="list-group-item">
              <h4 className="list-group-item-heading">Date</h4>
              <p className="list-group-item-text">Details</p>
            </a>
            <a className="list-group-item">
              <h4 className="list-group-item-heading">Location</h4> 
            </a>
            
            </div>

            <div className="col-sm-9">
            <ul className="pager">
            <li className="previous"><a href="#">Previous</a></li>
            <li className="next"><a href="#">Next</a></li>
            </ul>

              
            <h1 style={{backgroundColor: 'powderblue'}}>Order 01 Details</h1>
          <div className="list-group">
           <a  className="list-group-item">
              <h4 className="list-group-item-heading">Customer Name</h4>
              <p className="list-group-item-text">Details</p>
            </a>
            <a className="list-group-item">
              <h4 className="list-group-item-heading">Address</h4>
              <p className="list-group-item-text">Details</p>
            </a>
            <a  className="list-group-item">
              <h4 className="list-group-item-heading">Order List </h4>
              <p className="list-group-item-text">Details</p>
            </a>
            <a  className="list-group-item">
              <h4 className="list-group-item-heading">Email Address</h4>
              <p className="list-group-item-text">Details</p>
            </a>
            <a className="list-group-item">
              <h4 className="list-group-item-heading">Payment Method</h4>
              <p className="list-group-item-text">Details</p>
            </a>
                       
          
          <a href="#" className="btn btn-info" role="button">Order Approved</a>
          <a href="#" className="btn btn-info" role="button">Order Canceled</a>         

          </div>
        </div>
        </div>
        </div>
        </div>
          
      );
    }
  }

  export default OrderAccept;

