
import Header from "../lib/components/Header"
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import HeroSection from "./HeroSection"
import Services from "./Services"
import SimpleFooter from "../lib/components/SimpleFooter"
import { heroImage } from "./utils/assets"
import { personalInfo } from "./utils/info"
import { navigation } from "./utils/website"
function App() {

  return (
    <div className="w-full min-h-screen">
        <Header
          links={navigation}
          logo='/logo.png'
        />
        <HeroSection heroImage={heroImage} name={personalInfo.name} title={personalInfo.title}/>
        <AboutMe />
        <Services/>
        <Contact />
        <SimpleFooter
          name={personalInfo.name}
          title={personalInfo.title}
          socials={personalInfo.socials}
        />
    </div>
  )
}

export default App
