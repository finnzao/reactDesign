import './App.css';
import Home from './views/Home/home';
import Portfolio from './views/Portfolio/portfolio';
import DivisionGrey from './components/DivsionPageGrey/Division';
import About from './views/About/About';
function App() {
  return (
    <div className="App">

      <Home></Home>

      <Portfolio></Portfolio>
      <DivisionGrey></DivisionGrey>
      <About></About>


      <section className='aboutMe'>
        <h3 className='titleAboutMe'></h3>
        <div className='aboutMeText'></div>
      </section>


      <section className='contact'>
        <div className='contactText'><p></p></div>
        <h2></h2>
        <div className='aboutDivision'> <div className='division'></div></div>
        <div className='contactAuthor'></div>
        <div ></div>
      </section>
    </div>
  );
}

export default App;
