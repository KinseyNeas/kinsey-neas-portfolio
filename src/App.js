import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from "./resume/Resume_KinseyNeas.pdf";
import Experience from './components/Resume';
import Contact from './components/Contact';

function App() {
return (
    <>
      <head><title>Kinsey Neas</title></head>   
      <div className="start"><Header /></div>
      <div id="about" className="px-10"><About /></div>
      <div id="contact"><Contact /></div>
      <div id="work"><Portfolio /></div>
      {/*<div><object data={Resume} type="application/pdf" width="100%" height="1200px"/></div>*/}
      <div id="resume"><Experience /></div>
      <div id="contact"><Contact /></div>
      <div className="footer"></div>

    </>
  );
}

export default App;
