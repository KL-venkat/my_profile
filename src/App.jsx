import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  const basename = '/my_portfolio/'
  return (

    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-top-right">
          <Navbar/>
          <Hero/>
        </div> */}
        <div className="hero">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <Works/>
        {/* <Feedbacks/> */}
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;