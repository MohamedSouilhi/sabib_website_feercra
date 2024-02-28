

import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      <Offers/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
