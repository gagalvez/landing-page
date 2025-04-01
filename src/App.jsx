import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {

  return (
    <div className="bg-[url('/bg-img.jpg')] bg-cover bg-no-repeat bg-[center_10%] w-full h-[40vh] relative md:h-[70vh] ">
      <Navbar />
      <Content />
    </div>
  );
}

export default App
