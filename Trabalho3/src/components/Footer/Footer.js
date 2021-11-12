import style from '../Footer/Footer.module.css'
import Menu from '../MenuFooterHeader/Menu';

function Footer({Link}) {
  return (
    <div className={style.body}>
      <div className={style.direitos}>
        <p>
          © 2021 - Todos os direitos reservados
        </p>
      </div>
      <div>
        <ul>
          <Menu name="Home" nameRouter="/" Link={Link}/>
          <Menu name="Sobre" nameRouter="/sobre" Link={Link}/>
          <Menu name="Contato" nameRouter="/contato" Link={Link}/>
        </ul>
      </div>
    </div>
  );
}

export default Footer;