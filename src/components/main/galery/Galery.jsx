import styled from "styled-components";
import CategorieBox from "./categorieBox/CategorieBox";

const GaleryContainer = styled.section`
  width: 95%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
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