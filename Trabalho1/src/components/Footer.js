import style from '../modulesCss/Footer.module.css'
import ListHeader from './ListHeader';

function Footer() {
  return (
    <div className={style.Body}>
      <div className={style.Direitos}>
        <p>
          © 2021 - Todos os direitos reservados
        </p>
      </div>
      <div>
        <ul>
          <ListHeader name="Home" />
          <ListHeader name="Sobre" />
          <ListHeader name="Contato" />
        </ul>
      </div>
    </div>
  );
}

export default Footer;