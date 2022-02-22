import React from 'react'; 
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
    root: {
     
    },
  
  });

function Login() {
    const classes = useStyles();

  return (
      <div style={{width:"100%",height:"100vh" ,backgroundColor:"rgb(85, 85, 85)"}}>
      <Container style ={{border:"1px solid red", }} component="main" maxWidth="xs">
   <Box style={{
           borderTopRightRadius:"35px",
           borderTopLeftRadius:"35px",
        //    border:"1px solid #ec6346",
           //  border:"1px solid green",
          boxShadow:"#ec7346 0px 0px 5px 0px", 
           backgroundColor: "black",
           height:'125px',
           width:"326px",
          }}>
    
  
    

   </Box>
   <Box style={{
           borderBottomRightRadius:"35px",
           borderBottomLeftRadius:"35px",
            //  border:"1px solid #ec6346",
           backgroundColor: "white",
           boxShadow:"#ec7346 0px 0px 5px 0px", 

           height:'302px',
           width:"326px",
          }}>
    
  
    

   </Box>
   </Container>
   </div>
    
  )
}

export default Login