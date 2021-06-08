import React, { Fragment, useState, useEffect } from 'react'
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
// import { useToasts } from 'react-toast-notifications'

// import SellerForm from '../components/SellerForm'
// import * as actions from '../actions/users'
// import Popup from '../components/Popup'
// import AdminNav from '../components/AdminNav'
// import Footer from '../components/Footer'

const styles = (theme) => ({
  root: {
    '& .MuiTableCell-head': {
      fontSize: '1.5rem',
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
})

const AdminSellersList = ({ classes, ...props }) => {
//   const { addToast } = useToasts()
  const history = useHistory()
  const adminId = history.location.state

  const [currentId, setCurrentId] = useState(0)
  const [openPopup, setOpenPopup] = useState(false)

  const tempSeller = [{firstName: 'new1', lastName: '', address: '23', category: 're', email: '23gco,'}, {firstName: 'ffefdfe', lastName: 'dfsdfe', address: '23', category: 're', email: '23gco,'}]
//   useEffect(() => {
//     if (!history.location.state) {
//       history.push('/login')
//     }
//     props.fetchAllUsers()
//   }, [props, history.location.state])

//   const onDelete = (id) => {
//     if (window.confirm('Are you sure to delete this record?'))
//       props.deleteUser(id, () =>
//         addToast('Deleted successfully', { appearance: 'info' })
//       )
//   }

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
                    {tempSeller.map((record, index) => {
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
                      //}
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
export default AdminSellersList;

// const mapStateToProps = (state) => ({
//   userList: state.users.list,
// })

// const mapActionToProps = {
//   fetchAllUsers: actions.fetchAll,
//   deleteUser: actions.Delete,
// }

// export default connect(
//   mapStateToProps,
//   mapActionToProps
// )(withStyles(styles)(AdminSellersList))