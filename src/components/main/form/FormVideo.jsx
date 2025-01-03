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
import { useState } from "react";
import { useData } from "../../../context/DataContext";

const MainContainer = styled.main`
  height: 100%;
`;

const TitleCrearTarjeta = styled.p`
  border-top: 0.5px solid #999;
  border-bottom: 0.5px solid #999;
  padding: 10px 0px;
  margin: 30px 0px;
  font-size: 26px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`;

export default function FormVideo() {
  const { categorias, setVideos, formClean } = useData();
  const [formValues, setFormValues] = useState({
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  });

  function changeValueInput(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function formSubmit(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      const apiVideos = await fetch("http://localhost:3000/videos");
      const allVideos = await apiVideos.json();
      setVideos(allVideos);
      formClean(setFormValues);
      alert("Se ha creado un nuevo video.. FELICITACIONES..!!!!");
    }
  }

  return (
    <>
      <MainContainer>
        <Container
          sx={{
            maxWidth: "lg",
            margin: "50px auto",
            padding: 3,
            borderRadius: 2,
            color: "#fff",
          }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "40px" }}>
            NUEVO VIDEO
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", marginBottom: 2 }}>
            COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
          </Typography>
          <TitleCrearTarjeta>Crear Tarjeta</TitleCrearTarjeta>
          <Form>
            {/* Título */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Titulo</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el título"
                name="titulo"
                value={formValues.titulo}
                onChange={changeValueInput}
                InputLabel="Titulo"
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                }}
              />
            </Box>
            {/* Categoría */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Categoría</InputLabel>
              <FormControl fullWidth margin="normal" variant="outlined">
                <Select
                  name="categoria"
                  value={formValues.categoria}
                  onChange={changeValueInput}
                  displayEmpty
                  sx={{
                    width: "90%",
                    color: "#fff",
                    svg: { color: "#fff" },
                    fieldset: { borderColor: "#666", borderRadius: "10px" },
                  }}>
                  <MenuItem value="">
                    <em>Seleccione una categoría</em>
                  </MenuItem>
                  {categorias.map((cat, index) => (
                    <MenuItem key={index} value={cat.nombre}>
                      {cat.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* Imagen */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Imagen</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el enlace de la imagen"
                name="imagen"
                value={formValues.imagen}
                onChange={changeValueInput}
                error=""
                helperText=""
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                }}
              />
            </Box>
            {/* Video */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Video</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Ingrese el enlace del video"
                name="video"
                value={formValues.video}
                onChange={changeValueInput}
                sx={{
                  width: "90%",
                  input: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                }}
              />
            </Box>
            {/* Descripción */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                marginTop: "30px",
              }}>
              <InputLabel sx={{ color: "#fff" }}>Descripcion</InputLabel>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="¿De qué se trata este video?"
                name="descripcion"
                value={formValues.descripcion}
                onChange={changeValueInput}
                multiline
                rows={4}
                sx={{
                  width: "90%",
                  textarea: { color: "#fff" },
                  label: { color: "#999" },
                  fieldset: { borderColor: "#666", borderRadius: "10px" },
                }}
              />
            </Box>
            {/* Botones */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                marginTop: "30px",
                gap: 5,
                "@media (max-width: 767px)": {
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}>
              <Button
                type="submit"
                variant="outlined"
                onClick={formSubmit}
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
                  formClean(setFormValues);
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
