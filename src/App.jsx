import "./App.css";
import Header from "./Components/Header/Header";
import Estrellado from "./Components/Estrellado/Estrellado";
import Rutas from "./Components/Rutas/Rutas";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Estrellado/>
        <Rutas/>
      </BrowserRouter>
    </>
  );
}

export default App;
