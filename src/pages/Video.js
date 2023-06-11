import Header from "../components/Header"
import styled from "styled-components"
import Img from '../assest/images/thumbnail.jpg'

function Video() {
  return (
    <>
      <Header/>
      <Container>
        <Wrraper>
            <Details>
                <h1>Data Structures & Algorithms BootCamp @Supreme Batch</h1>
                <p>A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.</p>
                <Rate>5 start</Rate>
                <Language>Hindi</Language>
                <Lacture>72 lacture</Lacture>
            </Details>
            <ThaumbNail>
                <VideoCart>
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <Buttons>
                        <button>Play</button>                
                        <button>Add to my Space</button>    
                    </Buttons>
                </VideoCart>
            </ThaumbNail>

        </Wrraper>
        <Wrraper2>

        <nav>
            <ul>
                <li>Overview</li>
                <li>Course Content</li>
                <li>Instructor</li>
                <li>FAQs</li>
            </ul>
        </nav>
        </Wrraper2>
      </Container>
    </>
  )
}

const Container = styled.div`

    margin-top: 80px;
    padding-top: 80px;

`
const Wrraper = styled.div`
    display: flex;
    padding: 0px 50px;
    margin-bottom: 80px;
`
const Details = styled.div`
    width: 50%;

`
const Rate = styled.div`

`
const Language = styled.div`

`
const Lacture = styled.div`

`
const ThaumbNail = styled.div`
    width: 50%;

`
const VideoCart = styled.div`
    display: flex;
    
    align-items: center;
    flex-direction: column;
    width: 60%;
    height: 550px;
    border-radius: 20px ;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 1px solid black;
    img{
        width: 400px;
        border-radius: 20px;
    }

`
const Buttons = styled.div`

`
const Wrraper2 = styled.div`
    width: 80%;
    margin: auto;
    nav{
        border: 1px solid black;
        padding: 20px 40px;
        border-radius: 20px;
        font-size: 1.2rem;
        ul{
            display: flex;
            justify-content: space-between;
        }
    }
`

export default Video
