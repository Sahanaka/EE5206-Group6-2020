import React, {useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import myStyles from "./style";

const Item = ({ item }) => {
  const classes = myStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                AvailabeAmount:
                {item.availabeAmount}
              </Typography>
              <br />
              Price:{item.price}
              <br />
              Discount:{item.discount}
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  className={classes.primary}
                  onClick={handleClick}
                >
                  Buy
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Need Delivary</MenuItem>
                  <MenuItem onClick={handleClose}>Not need Delivary</MenuItem>
                </Menu>
              </div>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default Item;
