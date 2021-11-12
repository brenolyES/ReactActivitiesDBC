import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionContato from '../components/SectionContato/SectionContato';

function Contato({Link}) {
  return (
    <>
    <Header Link={Link}/>
    <SectionContato />
    <Footer Link={Link}/>
    </>
  );
}

export default Contato;