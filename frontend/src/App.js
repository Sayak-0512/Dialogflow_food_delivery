import { useEffect,useState } from "react";
import axios from 'axios';
import { createTheme, ThemeProvider, Typography, Grid} from '@mui/material'
import { Box} from "@mui/system";  
import Card from "./Components/CardCustom"

const API_ENDPOINT = process.env.NODE_ENV==='production'? "https://dialogflowfood.herokuapp.com/": "http://localhost:3001/";
const theme=createTheme({
  palette: {
    primary: {
      main: "#002a4d"
    }
  }
})
function App() {
  const [intentList, setintentList] = useState([]);
  useEffect( ()=>{
   axios.get(`${API_ENDPOINT}get_intent_list`)
    .then(res => {
      setintentList(res.data[0])
    })
    .catch(err => {
      console.log(err);
    })
    
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box  sx={{
        boxShadow: '0 8px 6px -6px #999',
        display: 'flex',
        backgroundColor: 'primary.light',
        justifyContent: 'center'
         }}>
          <Typography color="common.white" variant="h2" component="h2">
            Intent List
          </Typography>
        </Box>
        <Box sx={{
          backgroundImage: "url('http://i.imgur.com/TnNwdvV.png')",
          height: "100%",
          padding: "40px"
         }}>
         <Grid container spacing={2}>
            {intentList.map((eachIntent,index)=>
              <Card key={index} intent_name={eachIntent.name} intent_display_name={eachIntent.displayName} intent_action={eachIntent.action}/> 
            )}
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
