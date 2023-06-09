import styled from "styled-components"
import logo from "../assest/images/logo.png"

function Footer() {
  return (
    <Container>
      <footer>
        <Contant>
            <Main>
                <Brand>
                    <img src={logo} alt="" />
                    <p>The Unlimited guide for ace sde</p>
                </Brand>
                <Menu>
                    <p>Menu</p>
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                </Menu>
                <Services>
                    <p>Services</p>
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                    <br />
                    <span>About</span>
                </Services>
                <Line>
                </Line>
                <Contact>
                    <p>Email</p>
                    <span>kunal39@gmail.com</span>
                </Contact>
            </Main>
            <Section>
                <CopyRight>Copyright © 2023 WebMakers. All Rights Reserved.</CopyRight>
            </Section>
        </Contant>
      </footer>
    </Container>
  )
}

const Container = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    background-color: #6674cc;
`
const Contant = styled.div`
   


`
const Main = styled.div`
    display: flex;
    justify-content: space-around;

`
const Brand = styled.div`
margin-top: 40px;
    img{
        width: 200px;
    }

`
const Menu = styled.div`
margin-top: 40px;

`
const Services = styled.div`
margin-top: 40px;

`
const Line = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    border: 1px solid white;
    height: 250px;

`
const Contact = styled.div`
margin-top: 40px;

`
const Section = styled.div`
    border-top: 1px solid white ;
`
const CopyRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`

export default Footer
