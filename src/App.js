import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import GetStarted from './Components/GetStarted';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <GetStarted />
      <Feature/>
      <Offers/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
