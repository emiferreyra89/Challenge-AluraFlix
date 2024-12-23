import styled from "styled-components";
import Banner from "./banner/Banner";
import NavBar from "./navBar/Nav";

const HeaderContainerModified = styled.header`
  width: 100%;
  height: 900px;
  background-image: url("/img/banner-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  @media (max-width: 1380px) {
    background-size: contain auto;
    height: auto;
  }
`;

const OpacityBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 18, 51, 0.56); /* Fondo negro con opacidad */
  display: flex;
  flex-direction: column;
`;

export default function Header() {
  return (
    <>
      <HeaderContainerModified>
        <OpacityBox>
           <NavBar />
         <Banner />
        </OpacityBox>
      </HeaderContainerModified>
    </>
  );
}
