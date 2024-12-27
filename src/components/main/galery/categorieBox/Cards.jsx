/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardContainer = styled.article`
  width: 440px;
  height: 380px;
  display: flex;
  flex-direction: column;
  color: var(--white-button);
  font-family: var(--font-Roboto);
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  flex: 0 0 auto;
  figure {
    width: 100%;
  }
  img {
    width: 100%;
  }
  @media (max-width: 767px) {
    width: 320px;
    height: 320px;
    figure {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
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
    border: none;
    cursor: pointer;
  }
  button:hover {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px 1px
      ${(props) => props.theme.colors.primaryWhite};
  }
  @media (max-width: 767px) {
    width: 320px;
    top: 195px;
  }
`;

export default function Card(props) {
  const {video, categoria} = props.data;

  return (
    <>
      <CardContainer class="card">
        <figure>
          <img src={`${video.imagen}`} alt={`${video.titulo}`} />
        </figure>
        <CardIconsBox style={{ borderColor: `${categoria.color}` }}>
          <button
            aria-label="Eliminar video"
            onClick={() => alert("HOLA...!!!")}>
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
