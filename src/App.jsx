import './App.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';
import Stats from "./components/Stats/Stats";
import WorkProcess from './components/WorkProcess/WorkProcess';
import Services from "./components/Services/Services";
import IndustrySection from './components/IndustrySection';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
import MoveUp from './components/MoveUp/MoveUp';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="holder">
      <Header />
      <Chat />
      <MoveUp />
      <Services />
      <IndustrySection />
      <Stats />
      <WorkProcess />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
