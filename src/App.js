import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import HomeSection from "./components/HomeSection";
import Facilities from "./components/Facilities";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <HomeSection />
      <Facilities />
    </div>
  );
}

export default App;
