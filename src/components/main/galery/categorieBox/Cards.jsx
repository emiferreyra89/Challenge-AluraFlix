import styled from "styled-components";

const CardContainer = styled.article`
  width: 440px;
  display: flex;
  flex-direction: column;
  color: var(--white-button);
  font-family: var(--font-Roboto);
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
`;
const CardIconsBox = styled.div`
  width: 440px;
  border-radius: 0px 0px 15px 15px;
  border-bottom: 5px solid ${(props) => props.theme.colors.blueLigth};
  border-left: 5px solid ${(props) => props.theme.colors.blueLigth};
  border-right: 5px solid ${(props) => props.theme.colors.blueLigth};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  position: absolute;
  top: 265px;
  figure {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  button {
    background: transparent;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    color: ${(props) => props.theme.colors.primaryWhite};
    border:none;
    cursor: pointer;
  }
  button:hover {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px 1px ${(props) => props.theme.colors.primaryWhite};
  }
`;

export default function Card() {
  return (
    <>
      <CardContainer class="card">
        <figure>
          <img src="/img/image-video-1.png" alt="Curso de Innovación - Video 1" />
        </figure>
        <CardIconsBox>
          <button aria-label="Eliminar video" onClick={()=>alert("HOLA...!!!")}>
            <img src="/icon-delete.png" alt="Borrar" /> Borrar
          </button>
          <button aria-label="Editar video">
            <img src="/icon-update.png" alt="Editar" /> Editar
          </button>
        </CardIconsBox>
      </CardContainer>
    </>
  );
}
