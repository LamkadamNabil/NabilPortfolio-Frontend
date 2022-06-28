import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
function App() {
  return (
    <div className="app">
    <Navbar />
    <Header />
 
    <Work />
    <Skills /> 
    <About />
    {/*<Testimonial />*/}
    <Footer />
  </div>
  );
}

export default App;
