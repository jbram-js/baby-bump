import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
