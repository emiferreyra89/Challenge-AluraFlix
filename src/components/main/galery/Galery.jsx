import styled from "styled-components";
import CategorieBox from "./categorieBox/CategorieBox";
import { useState, useEffect } from "react";

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
`;

export default function Galery() {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    async function conectionData() {
      const categoriasResponse = await fetch("http://localhost:3000/categorias")
      const dataCategorias = await categoriasResponse.json()

      const videosResponse = await fetch("http://localhost:3000/videos")
      const dataVideos = await videosResponse.json()

      setCategorias(dataCategorias)
      setVideos(dataVideos)
    }

    conectionData()
  
  },[])

  return (
    <>
      <GaleryContainer>
        <CategorieBox data={{ categorias, videos }}></CategorieBox>
      </GaleryContainer>
    </>
  );
}

