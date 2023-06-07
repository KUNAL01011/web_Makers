import styled from "styled-components"
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Image from '../../assest/images/ALPHA 3D 2.png'

function HeroSection() {
    const [text] = useTypewriter({
        words: ['Ansh', 'Sexena'],
        loop: {},
    })
  return (
    <Container>
          <HeroTextSection>
            <Text>Learn with <span>{text}</span><Cursor /></Text> 
            <h3>Start Where You're, We'll Take You Where You Want To Go !</h3>
            <p>"YOUR GROWTH. OUR PASSION"</p>
          </HeroTextSection>
          <HeroImgSection>
            <img src={Image} alt="" />
          </HeroImgSection>
    </Container>
  )
}

const Container = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`
const HeroTextSection = styled.div`
  width: 50%;
  font-size: 2rem;
  h2{
    font-weight: 200;
    font-style: normal;
  }
  p{
    font-size: 1.5rem;
  }

`
const Text = styled.div`
  font-size: 4rem;
  font-weight: 400;
 
`
const HeroImgSection = styled.div`
  max-width: 50%;
  img{
    width: 700px;
  }
`

export default HeroSection
