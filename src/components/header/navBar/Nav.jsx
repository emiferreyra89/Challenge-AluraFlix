import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
position: relative; /* Asegura que los elementos estén sobre la capa negra */
z-index: 3;
  width: 100%;
  height: 125px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondaryBlack};
  box-shadow: 0px 5px 30px 0px rgba(34, 113, 209, 0.7);
  border-bottom: ${(props) => props.theme.colors.primaryBlue};
  figure {
    display: flex;
    align-items: center;
  }
`;

const Lista = styled.ul`
  display: flex;
  gap: 25px;
`;

const Buttons = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 54px;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 5px 0;
    font-family: ${(props) => props.theme.fonts.sourceSans};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  a:hover {
    color: #2271d1;
    border: none;
    background-color: #000;
    box-shadow: inset 0px 0px 10px 5px #2271d1;
  }
`;

export default function NavBar() {
  return (
    <>
        <NavContainer>
          <figure>
            <img src="/img/logo-alurafix.png" alt="Logo Alurafix" />
          </figure>
          <Lista>
            <Buttons>
              <Link to="/">Home</Link>
            </Buttons>
            <Buttons>
              <Link to="/form">Nuevo Video</Link>
            </Buttons>
          </Lista>
        </NavContainer>
    </>
  );
}
