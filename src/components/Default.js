import styled from "styled-components"
import img from "../assest/images/default.jpg"
import { Link } from "react-router-dom"

function Default() {
  return (
    <Container>
      <Box>
        <Image>
          <img src={img} alt="" />
        </Image>
        <Form>
            <h1>The Site is Under Constraction</h1>
            <Link to="/">Go to Home</Link>
        </Form>
      </Box>
    </Container>
  )
}
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #6674cc;

`
const Box = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  background-color: white;

`
const Image = styled.div`
  width: 50%;
   img{
    width: 100%;
   }

`
const Form = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;
    flex-direction: column;

`
export default Default