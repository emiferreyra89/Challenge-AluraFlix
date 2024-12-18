import styled from "styled-components";

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 900px;
  background-image: url("/img/banner-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: var(--font-Roboto);
  color: ${(props) => props.theme.colors.secondaryWhite};
  img {
    border-radius: 15px;
  }
  p {
    font-weight: 400;
    font-size: 46px;
  }
`;
const OpacityBox = styled.div`
  position: absolute; /* Permite que el div se superponga al section */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Hace que ocupe las mismas dimensiones que el section */
  background-color: rgba(0, 0, 0, 0.1); /* Fondo negro con opacidad */
  display: flex; /* Para alinear los elementos */
  flex-direction: column;
  z-index: 1; /* Asegura que esté sobre el fondo */
`;
const InformationBox = styled.div`
  position: relative; /* Asegura que los elementos estén sobre la capa negra */
  z-index: 2; /* Eleva los elementos por encima de la capa opaca */
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 300px;
  div,
  figure {
    width: 45%;
  }
`;
const BannerTitle = styled.div`
  margin-bottom: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 80px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.blueLigth};
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
`;
const BannerSubtitle = styled.p`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 28px;
`;
const BannerDescription = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

export default function Banner() {
  return (
    <>
      <BannerContainer>
        <OpacityBox>
          <InformationBox>
            <div>
              <BannerTitle>
                <h1>Front End</h1>
              </BannerTitle>
              <BannerSubtitle>Challenge React</BannerSubtitle>
              <BannerDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat sequi consequatur quis asperiores, cupiditate animi
                nulla quia, doloremque reiciendis ratione unde veniam, alias
                obcaecati optio laudantium. Incidunt omnis quia facilis?
              </BannerDescription>
            </div>
            <figure>
              <img src="/img/player.png" alt="Miniatura del video" />
            </figure>
          </InformationBox>
        </OpacityBox>
      </BannerContainer>
    </>
  );
}
