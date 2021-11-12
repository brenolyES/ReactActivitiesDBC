import style from '../Header/Header.module.css'
import Menu from '../MenuFooterHeader/Menu';

function Header({Link}) {

  const url = "https://images.vexels.com/media/users/3/156877/isolated/preview/1cda0f8c1fffd6ecaf6b8687a509fe46-icone-de-desenho-animado-de-cogumelo.png";

  return (
    <div className={style.body}>
      <div className={style.headerLeft}>
        <div className={style.logoFundo}>
          <img className={style.logo} src={url} alt="Logo cogumelo" />
        </div>
        <div>
        <strong><Link to="/" >DBC Cogumelos</Link></strong>
        </div>
      </div>
      <div className={style.headerRight}>
        <ul>
          <Menu name="Home" nameRouter="/" Link={Link}/>
          <Menu name="Sobre" nameRouter="/Sobre" Link={Link}/>
          <Menu name="Contato" nameRouter="/contato" Link={Link}/>
        </ul>
      </div>
    </div>
  );
}

export default Header;