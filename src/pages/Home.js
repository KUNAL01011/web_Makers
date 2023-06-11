import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HeroSection from "../PageContent/HomePage/HeroSection";
import CardSection from "../PageContent/HomePage/CardSection";
import InstructorSection from "../PageContent/HomePage/InstructorSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Section1><HeroSection /></Section1>
      <Banner />
      <Section2><CardSection /></Section2>
      <hr />
      <Section3><InstructorSection /></Section3>
      <Footer></Footer>
    </>
  );
}

const Section1 = styled.div`
  margin-top: 80px;
`;
const Section2 = styled.div`
  margin-top: 80px;
  padding-bottom: 80px;
  background-color: #f7f8fc;
`;
const Section3 = styled.div`
  margin-top: 80px;
`;
