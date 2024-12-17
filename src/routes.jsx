import GlobalStyles from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FormNewVideo from "./pages/FormNewVideo.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

export default function AppRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<FormNewVideo />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </ThemeProvider>
  );
}
