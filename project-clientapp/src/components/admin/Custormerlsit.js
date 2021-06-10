import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Style/liststyle.css";

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
  FormControl,
} from "@material-ui/core";
import paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { getCustomers, deleteCustomer } from "../../Actions/admin";
import Spinner from "../layout/Spinner";

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
});

const AdminCustomersList = ({
  getCustomers,
  customers: { customers, customersloading },
}) => {
  //   const { addToast } = useToasts()
  const history = useHistory();
  const adminId = history.location.state;

  const [currentId, setCurrentId] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  const onDelete = async (id) => {
    console.log(id);
    const res = await deleteCustomer(id);
    console.log(res);
  }


  useEffect(async () => {
    getCustomers();
  }, [getCustomers, onDelete]);

  return (
    <div className="listtable">
      <Fragment>
        
        {customersloading ? (
          <Spinner />
        ) : (
          <section className="container">
            <Paper className={styles.paper} elevation={3}>
              <Grid>
                <Grid item xs={12}>
                  <TableContainer>
                    <Table>
                      <TableHead className={styles.root}>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Address</TableCell>
                          <TableCell>Contact Number</TableCell>
                          <TableCell>Email</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                        {customers.map((record, index) => {
                          
                          return (
                            <TableRow key={index} hover>
                              <TableCell>{record.name}</TableCell>
                              <TableCell>{record.address}</TableCell>
                              <TableCell>{record.contatct_No}</TableCell>
                              <TableCell>{record.email}</TableCell>
                              <TableCell>
                                <ButtonGroup variant="text">
                                  <Button>
                                    <EditIcon
                                      color="primary"
                                      onClick={() => {
                                        setCurrentId(record.userId);
                                        setOpenPopup(true);
                                      }}
                                    />
                                  </Button>
                                  <Button>
                                    <DeleteIcon
                                      color="secondary"
                                      onClick={() => {
                                        onDelete(record.customerId)
                                      }}
                                    />
                                  </Button>
                                </ButtonGroup>
                              </TableCell>
                            </TableRow>
                          );
                          //}
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                
              </Grid>
            </Paper>
          </section>
        )}

        
      </Fragment>
    </div>
  );
};

AdminCustomersList.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  customers: state.admin,
});
export default connect(mapStateToProps, { getCustomers })(AdminCustomersList);


