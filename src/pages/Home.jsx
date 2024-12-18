import styled from "styled-components";
// import Banner from "./banner/Banner";
// import Galery from "./galery/Galery";
import Banner from "../components/main/banner/Banner.jsx";
import Galery from "../components/main/galery/Galery.jsx";
//import Main from "../components/main/Main.jsx";

const MainContainer = styled.main`
  height: 100%;
`

export default function Home() {
  return (
    <>
    <MainContainer>
      <Banner />
      <Galery />
    </MainContainer>
    </>
  );
}
