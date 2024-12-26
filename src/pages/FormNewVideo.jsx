import { useMediaQuery } from "@mui/material";
import NavBar from "../components/header/navBar/Nav";
import FormVideo from "../components/main/form/FormVideo";

export default function FormNewVideo() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return !isMobile ? (
    <>
      <NavBar />
      <FormVideo />
    </>
  ) : (
    <FormVideo />
  );
}
