import AddHobby from "../components/AddHobby";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hobby from "../components/Hobby";
import JoinCommunity from "../components/JoinCommunity";
import NavigationBar from "../components/NavigationBar";
import SignInWithPopup from "../components/SignInWithPopup";
import Testimonials from "../components/Testimonials";

const Main = () => {
  return (
    <div className="c-container mx-auto ">
      <NavigationBar />
      <Hero />
      <Hobby />
      <AddHobby />
      <Testimonials />
      <JoinCommunity />
      <Footer />
     <BackToTop /> 
     <SignInWithPopup />
    </div>
  );
};

export default Main;
