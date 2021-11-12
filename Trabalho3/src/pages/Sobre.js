import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionSobre from '../components/SectionSobre/SectionSobre';

function Sobre({Link}) {
  return (
    <>
    <Header Link={Link}/>
    <SectionSobre />
    <Footer Link={Link}/>
    </>
  );
}

export default Sobre;