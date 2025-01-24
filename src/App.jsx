import { Route, Routes } from "react-router-dom";
import Cover from "./pages/cover";
import FloatingAudioPlayer from "./componen/audio";
import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AudioProvider } from "./context/Adiocontext";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <AudioProvider>
      <div className="main_app">
        <Cover />
        <Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
        <FloatingAudioPlayer />
      </div>
    </AudioProvider>
  );
}

export default App;
