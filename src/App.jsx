import Navbar from "./components/Navbar";
import bgImg from "./assets/bg-img.jpg"
import Content from "./components/Content";

function App() {
  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 22%",
    backgroundSize: "cover",
    height: "70vh",
    position: "relative"
  };
  return (
    <div style={bgImage} className="overflow-hidden">
      <Navbar />
      <Content />
    </div>
  );
}

export default App
