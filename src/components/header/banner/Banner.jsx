import styled from "styled-components";

const BannerContainer = styled.section`
  box-sizing: border-box;
  width: 100%;
  font-family: var(--font-Roboto);
  color: ${(props) => props.theme.colors.secondaryWhite};
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10% 0;
  img {
    border-radius: 15px;
    width: 100%;
  }
  p {
    font-weight: 400;
    font-size: 46px;
  }
`;

const InformationBanner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  figure {
    width: 45%;
    max-height: fit-content;
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const InformationBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;
`;
const BannerSubtitle = styled.p`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 35px;
`;
const BannerDescription = styled.span`
  font-weight: 300;
  font-size: 16px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export default function Banner() {
  return (
    <>
      <BannerContainer>
        <InformationBanner>
          <InformationBox>
            <BannerTitle>
              <h1>Front End</h1>
            </BannerTitle>
            <BannerSubtitle>Challenge React</BannerSubtitle>
            <BannerDescription>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              sequi consequatur quis asperiores, cupiditate animi nulla quia,
              doloremque reiciendis ratione unde veniam, alias obcaecati optio
              laudantium. Incidunt omnis quia facilis?
            </BannerDescription>
          </InformationBox>
          <figure>
            <img src="/img/player.png" alt="Miniatura del video" />
          </figure>
        </InformationBanner>
      </BannerContainer>
    </>
  );
}
