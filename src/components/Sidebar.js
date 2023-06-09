import styled from "styled-components"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountTreeSharpIcon from '@mui/icons-material/AccountTreeSharp';
import ModeStandbySharpIcon from '@mui/icons-material/ModeStandbySharp';
import AddRoadSharpIcon from '@mui/icons-material/AddRoadSharp';
import TurnSharpRightSharpIcon from '@mui/icons-material/TurnSharpRightSharp';
function Sidebar() {
  return (
    <Container>
     <Box>
        <SearchSharpIcon/>
        <h3>Web dev</h3>
     </Box>
     <Box>
        <AddRoadSharpIcon/>
        <h3>App dev</h3>
     </Box>
     <Box>
        <TurnSharpRightSharpIcon/>
        <h3>DSA</h3>
     </Box>
     <Box>
        <ModeStandbySharpIcon/>
        <h3>Roadmap</h3>
     </Box>
     <Box>
        <AccountTreeSharpIcon/>
        <h3>Project</h3>
     </Box>
    </Container>
  )
}

const Container = styled.div`
    /* background-color: #eeeeee;
    position: sticky;
    top: 89px;
    left: 0;
    height: 88vh;
    width: 8%; */
    background-color: #eeeeee;
    position: fixed;
    top: 88px;
    left: 0px;
    width: 8%;
    height: 88vh;
`
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid gray;
    color: black;
    h3{
        margin: 0;
        font-weight: 400;
        padding: 4px;
    }
`
export default Sidebar
