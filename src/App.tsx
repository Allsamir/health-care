import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <>
      <div className="max-w-[72.5625rem] mx-auto px-4">
        <Navbar />
        <Banner />
        <Features />
        <AboutUs />
        <Service />
      </div>
    </>
  );
}

export default App;
