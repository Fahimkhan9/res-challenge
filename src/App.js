import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import StayProject from "./components/StayProject/StayProject";
import Achievement from "./components/Achievement/Achievement";
import Pricing from "./components/Pricing/Pricing";
import EmailForm from "./components/EmailForm/EmailForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <WhatWeDo />
      <StayProject />
      <Achievement />
      <Pricing />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;
