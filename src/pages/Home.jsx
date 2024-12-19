import styled from "styled-components";
import Galery from "../components/main/galery/Galery.jsx";
import Header from "../components/header/Header.jsx";

const MainContainer = styled.main`
  height: 100%;
`;

export default function Home() {
  return (
    <>
      <MainContainer>
        <Header />
        <Galery />
      </MainContainer>
    </>
  );
}
