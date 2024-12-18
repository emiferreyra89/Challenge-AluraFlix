import styled from "styled-components";
import TagCategory from "./TagCategory";
import Card from "./Cards";

const CategorieBoxContainer = styled.section`
  margin-bottom: 190px;
`
const BoxCards = styled.div`
  display: grid;
  column-gap: auto;
  row-gap: 100px;
  grid-template-columns: repeat(4, auto);
  margin: 40px auto;
`

export default function CategorieBox() {  
  return (
    <>
      <CategorieBoxContainer>
        <TagCategory props={"Frontend"}></TagCategory>
        <BoxCards>
          <Card/>
          <Card/>
          <Card/>
        </BoxCards>
      </CategorieBoxContainer>
      <CategorieBoxContainer>
        <TagCategory props={"Backend"}></TagCategory>
        <BoxCards>
          <Card/>
          <Card/>
          <Card/>
        </BoxCards>
      </CategorieBoxContainer>
      <CategorieBoxContainer>
        <TagCategory props={"innovacion"}></TagCategory>
        <BoxCards>
          <Card/>
          <Card/>
          <Card/>
        </BoxCards>
      </CategorieBoxContainer>
    </>
  )
}