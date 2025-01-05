import styled from "styled-components";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useData } from "../../../context/DataContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const MainContainer = styled.main`
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

const ButonClose = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 200, 255, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`;

export default function CardEdit() {
  const {
    categorias,
    videoCardEdit,
    setVideoCardEdit,
    videos,
    setVideos,
    formClean,
    checkFormErrors,
    validationBlur,
    changeValueInput,
    changeFileInput,
  } = useData();

  const [formEditValues, setFormEditValues] = useState({
    titulo: videoCardEdit.titulo,
    categoria: videoCardEdit.categoria,
    imagen: videoCardEdit.imagen,
    video: videoCardEdit.video,
    descripcion: videoCardEdit.descripcion,
  });
  const [formEditErrors, setFormEditErrors] = useState({});

  function cutFileName(path) {
    return path.split("/").pop();
  }

  async function formEditSubmit(event) {
    event.preventDefault();
    const errors = checkFormErrors(formEditValues);
    setFormEditErrors(errors);

    if (Object.keys(errors).length > 0) {
      toast.error("Por favor, verifica todos los campos antes de continuar.", {
        theme: "dark",
      });
      return;
    }

    const { imagen } = formEditValues;
    formEditValues.imagen = `/img/${imagen}`;

    try {
      const response = await fetch(
        `http://localhost:3000/videos/${videoCardEdit.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formEditValues),
        }
      );

      if (response.ok) {
        const updatedCard = await response.json();
        const newList = videos.map((video) => {
          return video.id === updatedCard.id ? updatedCard : video;
        });
        setVideos(newList);
        toast.success("Se ha editado video.. FELICITACIONES..!!!!", {
          theme: "colored",
        });
      } else {
        throw new Error("Error al editar la Tarjeta");
      }

      setVideoCardEdit(false);
    } catch (error) {
      console.error(error.message);
      toast.error(
        "Error al procesar la solicitud, no se ha podido editar el registro.",
        { theme: "dark" }
      );
    }
  }

  return (
    <>
      <MainContainer>
        <Container
          sx={{
            maxWidth: "lg",
            margin: "0 auto",
            padding: 3,
            borderRadius: 2,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "90%",
              marginTop: "10px",
              margin: "auto",
            }}>
            <ButonClose
              onClick={() => {
                setVideoCardEdit(false);
              }}>
              <img src="/icon-close-form.png" alt="Icono Cerrar Formulario" />
            </ButonClose>
          </Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: "60px",
              color: "#2271D1",
              width: "90%",
              margin: "auto",
            }}>
            EDITAR CARD:
          </Typography>
          <ToastContainer
            position="top-center"
            autoClose="3000"
            closeOnClick={true}
            style={{ fontSize: "24px", textAlign: "center" }}
          />
          <Form>
            {/* Título */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Titulo</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el título"
                name="titulo"
                InputLabel="Titulo"
                value={formEditValues.titulo}
                onChange={(e) => {
                  changeValueInput(e, formEditValues, setFormEditValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formEditErrors, setFormEditErrors);
                }}
                error={Boolean(formEditErrors.titulo)}
                helperText={
                  formEditErrors.titulo
                    ? formEditErrors.titulo // Muestra el mensaje de error si existe
                    : formEditValues.titulo.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formEditErrors.titulo
                      ? "red" // Color rojo para mensajes de error
                      : formEditValues.titulo.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Categoría */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Categoría</InputLabel>
              <FormControl
                fullWidth
                margin="normal"
                variant="outlined"
                error={Boolean(formEditErrors.categoria)}>
                <Select
                  name="categoria"
                  value={formEditValues.categoria.toLowerCase()}
                  onChange={(e) => {
                    changeValueInput(e, formEditValues, setFormEditValues);
                  }}
                  onBlur={(e) => {
                    validationBlur(e, formEditErrors, setFormEditErrors);
                  }}
                  displayEmpty
                  sx={{
                    width: "90%",
                    color: "#fff",
                    svg: { color: "#fff" },
                    fieldset: { borderColor: "#666", borderRadius: "10px" },
                  }}>
                  {categorias.map((cat, index) => (
                    <MenuItem key={index} value={cat.nombre.toLowerCase()}>
                      {cat.nombre}
                    </MenuItem>
                  ))}
                </Select>
                {formEditErrors.categoria ? (
                  <>
                    <Typography
                      sx={{
                        color: "red",
                        marginTop: "5px",
                        fontStyle: "italic",
                        fontSize: "12px",
                      }}>
                      {formEditErrors.categoria}
                    </Typography>
                  </>
                ) : formEditValues.categoria.trim() ? (
                  <>
                    <Typography
                      sx={{
                        color: "green",
                        marginTop: "5px",
                        fontStyle: "italic",
                        fontSize: "12px",
                      }}>
                      {"Correcto"}
                    </Typography>
                  </>
                ) : (
                  ""
                )}
              </FormControl>
            </Box>
            {/* Imagen */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Imagen</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el enlace de la imagen"
                name="imagen"
                value={cutFileName(formEditValues.imagen)}
                onChange={(e) => {
                  changeValueInput(e, formEditValues, setFormEditValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formEditErrors, setFormEditErrors);
                }}
                error={Boolean(formEditErrors.imagen)}
                helperText={
                  formEditErrors.imagen
                    ? formEditErrors.imagen // Muestra el mensaje de error si existe
                    : formEditValues.imagen.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formEditErrors.imagen
                      ? "red" // Color rojo para mensajes de error
                      : formEditValues.imagen.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  changeFileInput(e, formEditValues, setFormEditValues);
                }}
                style={{ color: "#666", width: "90%" }}
              />
            </Box>
            {/* Video */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Video</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el enlace del video"
                name="video"
                value={formEditValues.video}
                onChange={(e) => {
                  changeValueInput(e, formEditValues, setFormEditValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formEditErrors, setFormEditErrors);
                }}
                error={Boolean(formEditErrors.video)}
                helperText={
                  formEditErrors.video
                    ? formEditErrors.video // Muestra el mensaje de error si existe
                    : formEditValues.video.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formEditErrors.video
                      ? "red" // Color rojo para mensajes de error
                      : formEditValues.video.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Descripción */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                marginTop: "10px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Descripcion</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="¿De qué se trata este video?"
                name="descripcion"
                value={formEditValues.descripcion}
                onChange={(e) => {
                  changeValueInput(e, formEditValues, setFormEditValues);
                }}
                onBlur={(e) => {
                  validationBlur(e, formEditErrors, setFormEditErrors);
                }}
                multiline
                rows={4}
                error={Boolean(formEditErrors.descripcion)}
                helperText={
                  formEditErrors.descripcion
                    ? formEditErrors.descripcion // Muestra el mensaje de error si existe
                    : formEditValues.descripcion.trim() // Si el campo tiene un valor válido
                    ? "Correcto"
                    : "" // Si el campo está vacío
                }
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  textarea: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                  "& .MuiFormHelperText-root": {
                    fontStyle: "italic",
                    color: formEditErrors.descripcion
                      ? "red" // Color rojo para mensajes de error
                      : formEditValues.descripcion.trim()
                      ? "green" // Color verde para la leyenda "CORRECTO"
                      : "inherit", // Color por defecto si no hay texto
                  },
                }}
              />
            </Box>
            {/* Botones */}
            <Box
              sx={{
                width: "90%",
                display: "flex",
                marginTop: "10px",
                justifyContent: "space-between",
                "@media (max-width: 767px)": {
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                },
              }}>
              <Button
                type="submit"
                variant="outlined"
                onClick={formEditSubmit}
                sx={{
                  width: "180px",
                  padding: "8px",
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#2271d1",
                    border: "none",
                    backgroundColor: "#000",
                    boxShadow: "inset 0px 0px 10px 5px #2271d1",
                  },
                }}>
                GUARDAR
              </Button>
              <Button
                onClick={() => {
                  formClean(setFormEditValues);
                }}
                type="reset"
                variant="outlined"
                sx={{
                  width: "180px",
                  padding: "8px",
                  borderColor: "#fff",
                  color: "#fff",
                  borderRadius: "10px",
                  "&:hover": {
                    color: "#2271d1",
                    border: "none",
                    backgroundColor: "#000",
                    boxShadow: "inset 0px 0px 10px 5px #2271d1",
                  },
                }}>
                LIMPIAR
              </Button>
            </Box>
          </Form>
        </Container>
      </MainContainer>
    </>
  );
}
