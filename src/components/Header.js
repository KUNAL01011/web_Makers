import styled from "styled-components"
import logo from "../assest/images/logo.png"
import { Link } from "react-router-dom"


function Header() {
  return (
    <Container>
      <Logo>
        <Link to= '/'>
        <img src={logo} alt="logo" />
        </Link>
      </Logo>
      <Menu>
        <ul>
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/about">About</Link></li>
            <li><Link to= "/courses">Courses</Link></li>
            <li><Link to= "/contact">Contact us</Link></li>
        </ul>
      </Menu>
      <Join>
        <ul>
            <li><Link to= '/signin'>Login </Link></li>     
            <li><Link to= '/register'>Singn Up</Link></li>
        </ul>
      </Join>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    background-color: white;
    z-index: 99;
    box-shadow: 1px 2px 9px grey;
`
const Logo = styled.div`
    padding-left: 20px;
    img{
        width: 202px;
        border-radius: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

`
const Menu = styled.div`
    display: flex;
    align-items: center;
    ul{
        display: flex;
        gap: 20px;
        font-size: 1.2rem;
    }
`
const Join = styled.div`
    display: flex;
    align-items: center;
    ul{
        display: flex;
        gap: 20px;
        font-size: 1.2rem;
    }
    
    padding-right: 20px;
`

export default Header
