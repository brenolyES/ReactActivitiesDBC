import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionCogumelos from '../components/SectionCogumelo/SectionCogumelos';
import SectionEnderecoDbc from '../components/SectionEnderecoDbc/SectionEnderecoDbc';

function Home({Link}) {
  return (
    <>
      <Header Link={Link}/>
      <SectionCogumelos/>
      <SectionEnderecoDbc/>
      <Footer Link={Link}/>
    </>
  );
}

export default Home;