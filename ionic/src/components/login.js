import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import ioniclogo from '../assets/download.jpeg'
import { collapseClasses } from '@mui/material';
import { fontSize } from '@mui/system';

const useStyles = makeStyles({
    root: {
              paddingTop:"140px",
              margin:"auto"
    },
    iconText:{
      // border:"1px solid white",
      width:"200px",
      margin:"auto",
      padding:"9px 0px"
      
    },
    image1:{
              width:"100%",
              height:"100%",
              objectFit: "contain",
              verticalAlign: "middle",
    },
    main:{
              margin:"auto",
              // border:"1px solid white",
              width:"326px",
              borderRadius:"8px",
              backgroundColor:"white",
              boxShadow:"#ec7346 0px 0px 5px 0px",
    },
    blackBox:{
      borderTopRightRadius:"8px",
      borderTopLeftRadius:"8px",
      // boxShadow:"#ec7346 0px 0px 5px 0px", 
      backgroundColor: "black",
      // height:'125px',
      width:"100%",
      margin:"auto",
    },
    whiteBox:{
      borderBottomRightRadius:"8px",
      borderBottomLeftRadius:"8px",
      // backgroundColor: "white",
      
      minHeight:'302px',
      width:"100%",
     margin:"auto"
    },
    loginHeading:{
      fontFamily:"sans-serif",
      fontSize:"13px",
      textTransform:"uppercase",
      color:"rgb(236, 115, 70)",
      textAlign: "center",
      marginTop:'15px',
      fontWeight:"bold",
    },
    inputFields:{
      border:"1px solid black",
      width:"62.5%",
      margin:"auto"
    },
    emailInput:{
      marign:"auto",
      maxWidth:"100%"
    }
  
  });

function Login() {
    const classes = useStyles();

  return (
      <Box style={{width:"100%",height:"100vh" ,backgroundColor:"rgb(85, 85, 85)"}}>
      <Container className={classes.root} component="main" maxWidth="xs">
       <Box className={classes.main}> 
   <Box className={classes.blackBox}>
     <Grid className={classes.iconText}>
       <img src ={ioniclogo} className={classes.image1} />
     </Grid>
    </Box>
   <Box className={classes.whiteBox}>
     <Grid>
       <p className={classes.loginHeading}>LOG IN</p>
     </Grid>
     <Grid  className={classes.inputFields}>
       <Grid classesName={classes.emailInput}  >
        <input type="email"/>
       </Grid>
     </Grid>
  </Box>
   </Box>
   </Container>
   </Box>
    
  )
}

export default Login