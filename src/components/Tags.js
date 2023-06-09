import styled from "styled-components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Tags() {
  return (
    <>
    
    <Container>
      <span>
        HTML
      </span>
      <span>
        Css
      </span>
      <span>
        Java 
      </span>
      <span>
        C++
      </span>
      <span>
        <Wrraper>
            More
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </Wrraper>
      </span>
      
    </Container>
    <hr />
    </>
  )
}

const Container = styled.div`
    display: flex;
    height: fit-content;
    padding: 50px 238px 50px 216px;
    gap: 37px;
    span{
        border: 1px solid grey;
        border-radius: 24px;
        font-size: 1rem;
        padding: 7px 45px;
    }
`
const Wrraper = styled.div`
    display: flex;
`

export default Tags
