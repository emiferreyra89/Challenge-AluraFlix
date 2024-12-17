import styled from "styled-components";

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
export default function Footer() {
  return (
    <>
      <FooterContainer>
        <figure>
          <img src="/img/logo-alurafix.png" alt="Logo Alurafix" />
        </figure>
        <p>© 2024 Alurafix. Todos los derechos reservados.</p>
      </FooterContainer>
    </>
  );
}
