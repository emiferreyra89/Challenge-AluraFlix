import styled from "styled-components";
import Header from "../components/header/Header.jsx"
import Galery from "../components/main/galery/Galery.jsx";
import { useMediaQuery } from "@mui/material";

const MainContainer = styled.main`
  /* height: 100%;
  width: 100%; */
  margin: 150px 0px;
`;

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return !isMobile ?
  (
    <>
      <Header />
      <MainContainer>
        <Galery />
      </MainContainer>
    </>
  ) : 
  (
    <MainContainer>
        <Galery />
      </MainContainer>
  )
}
