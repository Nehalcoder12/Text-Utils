
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';


function App() {
  return (
    <>
    
    <Navbar title="Text-Utils" contact="contact" about="aboutme"/>
    <div className="container my-3"><Textform heading="Enter Text To Analyze" /></div>
    <About/>
   
    </>
    
   
  );
}

export default App;
