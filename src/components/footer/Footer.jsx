import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const FooterContainer = styled.footer`
  box-shadow: 0px 5px 30px 0px rgba(34, 113, 209, 0.7);
  background-color: ${(props) => props.theme.colors.secondaryBlackc};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 125px;
  padding: 10px 0px;
  border-top: 4px solid ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.primaryWhite};
`;

const NavMobile = styled.nav`
  display: flex;
  width: 80%;
`;

const ListaMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const ButtonHome = styled.li`
  a {
    text-decoration: none;
    color: #2271d1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 54px;
    background-color: transparent;
    border: 2px solid #2271d1;
    border-radius: 50px;
    padding: 5px 0;
    font-family: ${(props) => props.theme.fonts.sourceSans};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    gap: 15px;
  }
  a:hover {
    color: #2271d1;
    border: none;
    background-color: #000;
    box-shadow: inset 0px 0px 10px 5px #2271d1;
  }
`;

const ButtonAdd = styled.div`
  background-color: transparent;
`;

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  
  return !isMobile ? 
      (<FooterContainer>
        <figure>
          <img src="/img/logo-alurafix.png" alt="Logo Alurafix" />
        </figure>
        <p>© 2024 Alurafix. Todos los derechos reservados.</p>
      </FooterContainer>)
      :
      (<FooterContainer>
        <NavMobile>
          <ListaMobile>
            <ButtonHome>
              <Link to="/"><img src="/icon-home-mobile.png" alt="Icono Home" />Home</Link>
            </ButtonHome>
            <ButtonAdd>
              <Link to="/form"><img src="/icon-add-video.png" alt="Icono agregar video" /></Link>
            </ButtonAdd>
          </ListaMobile>
        </NavMobile>
      </FooterContainer>)
    }
