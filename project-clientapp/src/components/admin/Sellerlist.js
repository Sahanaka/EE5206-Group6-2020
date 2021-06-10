import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import "./Style/liststyle.css"

import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
} from '@material-ui/core'
import paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import { getSellers, getCustomers } from "../../Actions/admin";
import Spinner from "../layout/Spinner";

const styles = (theme) => ({
  root: {
    '& .MuiTableCell-head': {
      fontSize: '1.25rem',
      color:'primery',
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
})

const AdminSellersList = ({ classes, sellers: { customers, sellers, sellersloading } }) => {
//   const { addToast } = useToasts()
  const history = useHistory()
  const adminId = history.location.state

  const [currentId, setCurrentId] = useState(0)
  const [openPopup, setOpenPopup] = useState(false)

  const tempSeller = [{firstName: 'sh', lastName: 'sdf', address: '23', category: 're', email: '23gco,'}, {firstName: 'sh', lastName: 'sdf', address: '23', category: 're', email: '23gco,'}]


  useEffect(async () => {
    getSellers();
    getCustomers();
    console.log("sere", sellers)
  }, [getSellers]);

  return (
    <div className="listtable">
      <Fragment>
      {/* <AdminNav {...{ adminId }} /> */}
      <section className='container'>
        <Paper className={styles.paper} elevation={3}>
          <Grid>
            <Grid item xs={12}>
              <TableContainer>
                <Table>
                  <TableHead className={styles.root}>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Category</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {props.userList.map((record, index) => { */}
                      {customers.map((record, index) => {
                      // if (record.userType === 'Seller') {
                        return (
                          <TableRow key={index} hover>
                            <TableCell>{record.firstName}</TableCell>
                            <TableCell>{record.lastName}</TableCell>
                            <TableCell>{record.address}</TableCell>
                            <TableCell>{record.category}</TableCell>
                            <TableCell>{record.email}</TableCell>
                            <TableCell>
                              <ButtonGroup variant='text'>
                                <Button>
                                  <EditIcon
                                    color='primary'
                                    onClick={() => {
                                      setCurrentId(record.userId)
                                      setOpenPopup(true)
                                    }}
                                  />
                                </Button>
                                <Button>
                                  <DeleteIcon
                                    color='secondary'
                                    // onClick={() => {
                                    //   onDelete(record.userId)
                                    // }}
                                  />
                                </Button>
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        )
                     // }
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            {/* <Popup
              title='Edit Seller Details'
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <SellerForm {...{ currentId, setCurrentId, setOpenPopup }} />
            </Popup> */}
          </Grid>
        </Paper>
      </section>
      {/* <Footer /> */}
    </Fragment>

    </div>
    
  )
}

AdminSellersList.propTypes = {
  getSellers: PropTypes.func.isRequired,
  sellers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sellers: state.admin,
});
export default connect(mapStateToProps, { getSellers })(AdminSellersList);
