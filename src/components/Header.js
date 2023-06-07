import styled from "styled-components"
import logo from "../assest/images/logo.png"


function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Menu>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Couress</li>
            <li>Contect us</li>
        </ul>
      </Menu>
      <Join>
        <ul>
            <li>Login</li>
            <li>Singn Up</li>
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
