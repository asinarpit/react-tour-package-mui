import { Container, Divider, Stack} from '@mui/material';
import './App.css';
import Destination from './Destination';
import data from "./data.json"

function App() {
  return (
    <Container maxWidth={"lg"} style={{marginTop:"2rem",marginBottom:"2rem"}} >
      <Stack direction="column" divider={<Divider orientation='horizontal' flexItem></Divider>} spacing={2}>
      {
        data.map((item)=>(
          
            <Destination key={item.packageId} data={item}/>

        ))

      }
</Stack>

    </Container>
      
      
      
      


      
  );
}

export default App;
