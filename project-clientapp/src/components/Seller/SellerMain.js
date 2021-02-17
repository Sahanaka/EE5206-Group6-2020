import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import Checkbox from '@material-ui/core/Checkbox';
import { Line } from 'react-chartjs-2';
import { BorderColor } from "@material-ui/icons";
import { Bar } from 'react-chartjs-2';
import './style1.css'





const useStyles = makeStyles((theme) => ({
  appBar1: {
    backgroundColor: "#fff",
  },
  
  blogsContainer1: {
    paddingTop: theme.spacing(3),
    justifyContent: "center",
  },
  blogTitle1: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card1: {
    maxWidth: "100%",
  },
  
  
  
  paginationContainer1: {
    display: "flex",
    justifyContent: "center",
  },
}));

function SellerMain() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const databar = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May','June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label:'Sales in 2020 (LKR)',
        data:[3,2,5,4,6,6,8,9,1,3,4,1],
        borderColor:['rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)'],
        backgroundColor:['rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)'],
        pointBackgroundColor:'rgba(255, 99, 132, 1)',
        pointBorderColor:'rgba(255, 99, 132, 1)'
      }
    ]
  }
  const optionsbar = {
    scales:{
      yAxes:[
        {
          ticks:{
            min:0,
            max:10,
            stepsize:1
          }
        }
      ] 
    }
  }

  const dataline = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May','June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label:'Earning in 2020 (LKR)',
        data:[3,2,5,4,6,6,8,9,1,3,4,5],
        borderColor:['rgba(54, 162, 235, 0.5)'],
        backgroundColor:['rgba(54, 162, 235, 0.5)'],
        pointBackgroundColor:'rgba(54, 162, 235, 0.5)',
        pointBorderColor:'rgba(54, 162, 235, 0.5)'
      }
    ]
  }
  const optionsline = {
    scales:{
      yAxes:[
        {
          ticks:{
            min:0,
            max:10,
            stepsize:1
          }
        }
      ] 
    }
  }


      return(
      <div className="back">
      
      <Container maxWidth="lg" className={classes.blogsContainer1}>
        <Typography variant="h3" className={classes.blogTitle1}>
        <div className="ABC" >ABC Store</div>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  <div className="centerclass" >Total Sales</div>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textprimary"
                    component="p"
                  >
                   <div className="centerclass" >400</div>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                  <div className="centerclass" >0.12% (30 days)</div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  <div className="centerclass" >No of Orders</div>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textprimary"
                    component="p"
                  >
                   <div className="centerclass" >455</div>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <div className="centerclass" >0.42% (30 days)</div>
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    <div className="centerclass" >Earning</div>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textprimary"
                    component="p"
                  >
                   <div className="centerclass" > 32541</div>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <div className="centerclass" >64% (30 days)</div>
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  <div><b>
                    Sales Details
                    </b></div>
                  </Typography>
                  <Bar data={databar} options={optionsbar} />
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={15} sm={12} md={6}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  <div><b>
                    Earning Statistics
                    </b></div>
                  </Typography>
                  <Line data={dataline} options={optionsline} />
                  
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={15} sm={12} md={6}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                  <div><b>
                    Top Selling Products
                    </b></div>
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
          <Grid item xs={15} sm={12} md={6}>
            <Card className={classes.card1}>
              <CardActionArea>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    <div><b>
                    TO DO List
                    </b></div>
                  </Typography>
                  <Typography>
                  
                  </Typography>

                </CardContent>
              </CardActionArea>
              
            </Card>
          </Grid>
        </Grid>
        
        
      </Container>
    </div>
      );
    }
  

  export default SellerMain;
