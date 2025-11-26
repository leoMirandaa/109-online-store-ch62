import { BrowserRouter, Routes, Route} from 'react-router-dom'

import About from "./pages/About"
import Catalog from "./pages/Catalog";
import Home from "./pages/Home"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/catalog' element={<Catalog/>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
