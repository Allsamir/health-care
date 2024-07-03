import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
