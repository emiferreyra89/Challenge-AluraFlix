import { createContext, useContext, useEffect, useState } from "react";
//import CardEdit from "../components/main/form/CardEdit";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [videoCardEdit, setVideoCardEdit] = useState(false);

  useEffect(() => {
    async function conectionData() {
      const categoriasResponse = await fetch(
        "http://localhost:3000/categorias"
      );
      const dataCategorias = await categoriasResponse.json();

      const videosResponse = await fetch("http://localhost:3000/videos");
      const dataVideos = await videosResponse.json();

      setCategorias(dataCategorias);
      setVideos(dataVideos);
    }

    conectionData();
  }, []);

  async function deleteCards(id) {
    if (confirm("Deseas eliminar la tarjeta..???")) {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.id !== id)
        );
      } else {
        console.error("Error al eliminar el video:", response.status);
      }
    }
  }

  function formClean(setParams) {
    setParams({
      titulo: "",
      categoria: "",
      imagen: "",
      video: "",
      descripcion: "",
    });
  }

  return (
    <DataContext.Provider
      value={{
        categorias,
        videos,
        setVideos,
        videoCardEdit,
        setVideoCardEdit,
        deleteCards,
        formClean,
      }}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  return useContext(DataContext);
};
