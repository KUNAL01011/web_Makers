import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Fillters from "../components/Fillters";
import Tags from "../components/Tags";
import CardWrraper from "../PageContent/coursesPage/CardWrraper";
import Footer from "../components/Footer";

function Courses() {
  return (
    <>
      <Header></Header>
      <Side />
      <BigContainer>
        <Container>
          <Search></Search>
          <Fillters />
        </Container>
        <Content>
          <Tags></Tags>
          <CardWrraper/>
        </Content>
        <Footer />
      </BigContainer>
    </>
  );
}

const BigContainer = styled.div`
  margin-top: 88px;
  margin-left: 121px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 9px grey;
`;
const Side = styled(Sidebar)`
  border: 1px solid black;
`;
const Search = styled(SearchBar)``;

const Content = styled.div``;

export default Courses;
