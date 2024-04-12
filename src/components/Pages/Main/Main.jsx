import NavBar from "../../NavBar/NavBar";
import Hero from "./Hero/Hero";
import Pets from "./Pets/Pets";
import SomeServices from "./SomeServices/SomeServices";
import QNA from "./QNA/QNA";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
import Render from "./Render/Render";

const Main = () => {
  return (
    <div className="bg-bgGreen">
      <NavBar />
      <Hero />
        <Render />
      <Pets />
      <SomeServices />
      <QNA />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Main;
