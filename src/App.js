import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import image1 from "./components/images/image1.png";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={image1} />
        <div className="body">
          <Info />
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
