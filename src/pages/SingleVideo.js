import styled from "styled-components"
import Header from "../components/Header"
import img from '../assest/images/main-image.png'
import Footer from '../components/Footer'

function SingleVideo() {
  return (
    <>
    <Container>
      <Header/>
      <Image>
        <img src={img} alt="" />
        {/* <div>
          <span>Free</span>
          <button>Play</button>
          <h3>This Course include</h3>
          <ul>
            <li>No Pre-requisite Required</li>
            <li>150+ hours On-Demand Video</li>
            <li>DSA - Beginner to Advanced</li>
            <li>DSA - Beginner to Advanced</li>
            <li>DSA - Beginner to Advanced</li>
          </ul>
        </div> */}
      </Image>
      <Details>
        <h1>Web development</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione similique voluptatibus accusantium. Quam error, vel iure alias illo aliquam expedita fugiat, modi quae reiciendis animi quis placeat non repellendus?</p>
        <div>
          <h3>About this Course</h3>
          <ul>
            <li>Language</li>
            <li>Hindi</li>
          </ul>
          <ul>
            <li>Lacture</li>
            <li>72</li>
          </ul>
          <ul>
            <li>Channel</li>
            <li>Code Help</li>
          </ul>
          <ul>
            <li>Rate</li>
            <li>4.5 star</li>
          </ul>
          <ul>
            <li>Views</li>
            <li>1 millen</li>
          </ul>
        </div>
        <button>Play</button>
      </Details>
      
    </Container>
    <Wrraper>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Course Contant</li>
            <li>Instractor</li>
            <li>FAQs</li>
          </ul>
        </nav>

        <Overview>
          <h1>What you will learn</h1>
          <div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere ipsum quia perspiciatis quae adipisci fugit odit maiores culpa inventore officia tenetur voluptas aperiam libero esse animi, alias voluptatibus impedit.</div>
          </div>
        </Overview>
        <CourseContant>
        <h1>What you will learn</h1>
          <div>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iure placeat autem quis aut quod accusantium minus blanditiis necessitatibus suscipit natus nisi temporibus asperiores quae itaque obcaecati, et molestiae nemo.</div>
          </div>
        </CourseContant>
        <Instractor></Instractor>
        <FAQs></FAQs>
      </Wrraper>
      <Footer/>
   </>
  )
}
const Container = styled.div`
    margin-top: 150px;
    display: flex;
    margin-left: 150px;
    margin-right: 150px;
    gap: 80px;


`
const Image = styled.div`
img{
  width: 100%;
}

`
const Details = styled.div`
width: 50%;
div{
  margin-bottom: 20px;
}
ul{
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
button{
  width: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
  height: 30px;
  font-size: 1rem;
}
`
const Wrraper = styled.div`
margin-top: 80px;
nav{
  border: 1px solid gray;
  width: 80%;
  margin: auto;
  background-color: #6674cc1A;
  >ul{
    display: flex;
    padding:5px 30px ;
    justify-content: space-between;
    font-size: 1.2rem;
  }
}

`
const Overview = styled.div`
width: 80%;
margin: auto;
h1{
  margin-top: 90px;
}
div{
  padding: 0px 30px;
}



`
const CourseContant = styled.div`
width: 80%;
margin: auto;
h1{
  margin-top: 90px;
}
div{
  padding: 0px 30px;
}

`
const Instractor = styled.div`

`
const FAQs = styled.div`

`
export default SingleVideo
