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
const categorias = [
  {
    id:"1",
    categoria:"frontend",
    color:"#6BD1FF"
  },
  {
    id:"2",
    categoria:"backend",
    color:"#00C86F"
  },
  {
    id:"3",
    categoria:"innovacion y gestion",
    color:"#FFBA05"
  }
];
const videos = [
  {
    id:"1",
    titulo:"Conoce el mundo Front",
    categoria:"frontend",
    imagen:"/img/image-video-front_1.png",
    video:"",
    descripcion:"Navega en el fascinante mundo de la programacion web desde su enfoque FrontEnd"
  },
  {
    id:"2",
    titulo:"Conoce el mundo Back",
    categoria:"backend",
    imagen:"/img/image-video-back_1.png",
    video:"",
    descripcion:"Navega en el fascinante mundo de la programacion web desde su enfoque BackEnd"
  },
  {
    id:"3",
    titulo:"Estrategias para innovar y gestionar",
    categoria:"innovacion y gestion",
    imagen:"/img/image-video-inov_gest_1.png",
    video:"",
    descripcion:"Navega en el fascinante mundo de la innovacion y gestion de servicios Webs"
  },
  {
    id:"4",
    titulo:"Conoce el mundo Back",
    categoria:"backend",
    imagen:"/img/image-video-back_2.png",
    video:"",
    descripcion:"Navega en el fascinante mundo de la programacion web desde su enfoque BackEnd"
  }
];

export default function Galery() {
  return (
    <>
      <GaleryContainer>
        <CategorieBox data={{categorias, videos}}>
        </CategorieBox>
      </GaleryContainer>
    </>
  )
}