import useStyle from "./stylesheet";
import WelcomeSection from "./views/welcomeSection";
import AboutSection from "./views/aboutSection";
import AreaSection from "./views/areaSection";
import ContactSection from "./views/contactSection";
const Home = () => {
  const classes = useStyle();
  return (
    <div>
      <WelcomeSection />
      <AboutSection />
      <AreaSection />
      <ContactSection />
    </div>
  );
};

export default Home;
