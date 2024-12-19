import styled from "styled-components";
import Banner from "./banner/Banner";
import NavBar from "./navBar/Nav";

const HeaderContainerModified = styled.header`
  position: relative; /*Asegura que los elementos estén sobre la capa negra */
  z-index: 0; /* Eleva los elementos por encima de la capa opaca */
  width: 100%;
  height: 800px;
  background-image: url("/img/banner-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

export default function Header() {
  return (
    <>
      <HeaderContainerModified>
        <NavBar />
        <Banner />
      </HeaderContainerModified>
    </>
  );
}
