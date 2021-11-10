import style from '../modulesCss/Header.module.css'
import ListHeader from './ListHeader';

function Header() {

  const url = "https://images.vexels.com/media/users/3/156877/isolated/preview/1cda0f8c1fffd6ecaf6b8687a509fe46-icone-de-desenho-animado-de-cogumelo.png";

  return (
    <div className={style.Body}>
      <div className={style.HeaderLeft}>
        <div className={style.LogoFundo}>
          <img className={style.Logo} src={url} alt="Logo cogumelo" />
        </div>
        <div>
        <strong><a href="#">DBC Cogumelos</a></strong>
        </div>
      </div>
      <div className={style.HeaderRight}>
        <ul>
          <ListHeader name="Home"/>
          <ListHeader name="Sobre"/>
          <ListHeader name="Contato"/>
        </ul>
      </div>
    </div>
  );
}

export default Header;