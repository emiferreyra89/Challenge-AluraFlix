/* eslint-disable react/prop-types */
import styled from "styled-components";
import TagCategory from "./TagCategory";
import Card from "./Cards";

const CategorieBoxContainer = styled.section`
  /* margin-bottom: 150px; */
  width: 100%;
`;
const BoxCards = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 100px;
  grid-template-columns: repeat(3, auto);
  margin: 40px auto;

  @media (max-width: 1439px) {
    display: flex;
    overflow-x: auto; /* Habilita el scroll horizontal */
    scroll-behavior: smooth; /* Opcional: scroll suave al navegar */
    white-space: nowrap; /* Previene que los elementos se rompan en nuevas líneas */
    width: 100%; /* Ajusta el ancho al contenedor padre */
    box-sizing: border-box; /* Asegura que el padding no cause desbordamiento */
    gap: 25px;
  }
`;

export default function CategorieBox(props) {
  const { categorias, videos } = props.data;

  return (
    <>
      {categorias.map((categoria, index) => (
        <>
          <CategorieBoxContainer key={index}>
            <TagCategory categoria={categoria} />
            <BoxCards>
              {videos.map((video, index) =>
                video.categoria.toLowerCase() === categoria.categoria.toLowerCase() ? (
                  <>
                    <Card data={{video,categoria}} key={index} />
                  </>
                ) : (
                  ""
                )
              )}
            </BoxCards>
          </CategorieBoxContainer>
        </>
      ))}
    </>
  );
}
