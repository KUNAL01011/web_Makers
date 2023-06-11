import styled from "styled-components"
import img from "../assest/images/DIDI S PNG 3D.png"
import { Link } from "react-router-dom"

function SignIn() {
  return (
    <Container>
      <Box>
        <Image>
          <img src={img} alt="" />
        </Image>
        <Form>
          <h1>WelCome back</h1>
          <span>Sign in to your account</span>
          <form>
            <label>Email or Mobial No</label>
            <input type="Email" placeholder="Enter your Email/Mobial No" />
            <label>Password</label>
            <input type="Password" placeholder="Enter your Password" />
            <button>Sign In</button>
          </form>
          <hr />
          <div>
            <p>You don't have an account?<Link to = "/register">Register</Link></p>
          </div>
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
  width: 50%;
  >h1{
    margin-bottom: 0;
    text-align: center;
  }
  span{
    display: block;
    text-align: center;
    margin-bottom: 30px;
  }
  form{
    display: flex;
    flex-direction: column;
    margin-right: 80px;
  }
  input{
    margin-bottom: 20px;
    font-size: 16px;
    height: 35px;
  }
  button{
    height: 35px;
    font-size: 16px;
    background-color: black;
    color: white;
  }
  hr{
    margin-right: 80px;
  }
  div{
    margin-right: 80px;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
  }

`

export default SignIn
