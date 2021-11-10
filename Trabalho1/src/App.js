import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionCogumelos from './components/SectionCogumelos';
import SectionEnderecoDbc from './components/SectionEnderecoDbc';

function App() {
  return (
    <>
      <Header/>
      <div className="App-Container">
      <SectionCogumelos/>
      <SectionEnderecoDbc/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
