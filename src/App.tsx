import "./App.css";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import WeCard from "./components/WeCard";

function App() {
  return (
    <>
      <div className="max-w-[72.5625rem] mx-auto px-4">
        <Navbar />
        <Banner />
        <Features />
        <AboutUs />
        <Service />
        <Testimonial />
        <Question />
        <WeCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
