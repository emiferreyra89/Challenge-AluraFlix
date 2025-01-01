import styled from "styled-components";
import Header from "../components/header/Header.jsx";
import Galery from "../components/main/galery/Galery.jsx";
import { useMediaQuery } from "@mui/material";
import FormEditVideo from "../components/main/form/FormEditVideo.jsx";
import { useData } from "../context/DataContext.jsx";

const MainContainer = styled.main`
  margin: 150px 0px;
`;

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const {videoCardEdit} = useData();  

  return !isMobile ? (
    <>
      {videoCardEdit ? <FormEditVideo/> : "" }
      <Header />
      <MainContainer>
        <Galery />
      </MainContainer>
    </>
  ) : (
    <>
      <FormEditVideo />
      <MainContainer>
        <Galery />
      </MainContainer>
    </>
  );
}
