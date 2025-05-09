import Header from "./components/Header";
import AboutSection from "./home/sections/about";
import ExperiencesSection from "./home/sections/experiencies";
import TechStack from "./home/sections/tech_stack";

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <ExperiencesSection />
      <TechStack />
    </>
  );
}
