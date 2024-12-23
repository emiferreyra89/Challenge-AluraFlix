import styled from "styled-components";
import CategorieBox from "./categorieBox/CategorieBox";

const GaleryContainer = styled.section`
  width: 100%;
  margin: 50px 0px;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  @media (max-width: 1439px) {
    width: 100vw;
  }
`

export default function Galery() {
  return (
    <>
      <GaleryContainer>
        <CategorieBox>
        </CategorieBox>
      </GaleryContainer>
    </>
  )
}