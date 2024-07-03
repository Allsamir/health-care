import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[72.5625rem] mx-auto px-4">
        <Navbar />
        <Banner />
        <Features />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
