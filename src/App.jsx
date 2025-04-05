import Navbar from "./components/Navbar";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Actions from "./components/Actions";

function App() {

  return (
    <div className="bg-[url('/bg-img.jpg')] bg-cover bg-no-repeat bg-[center_10%] w-full h-[40vh] relative md:h-[70vh]">
      <Navbar />
      <Content />
      <SearchBar />
      <Cards />
      <Contact />
      <Actions />
      <Footer />
    </div>
  );
}

export default App
