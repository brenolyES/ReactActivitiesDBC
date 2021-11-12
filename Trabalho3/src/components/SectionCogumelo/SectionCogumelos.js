import style from "../SectionCogumelo/SectionCogumelos.module.css"
import ListCardsCogumelos from "../SectionCogumelo/ListCardsCogumelos";

function SectionCogumelos() {

  const url = "https://images.vexels.com/media/users/3/156877/isolated/preview/1cda0f8c1fffd6ecaf6b8687a509fe46-icone-de-desenho-animado-de-cogumelo.png";

  const url2 = "https://images.vexels.com/media/users/3/237082/isolated/lists/24b939bc8654daa9f4b019fbad290cd6-monoline-30.png";

  const url3 = "https://images.vexels.com/media/users/3/220474/isolated/lists/5726c292703dc21c66b23bdd79cffec4-ilustracao-do-grupo-de-fungos.png";

  const url4 = "https://images.vexels.com/media/users/3/220460/isolated/lists/c78f6b13be73b4821ab8c49c837951cf-ilustracao-de-cogumelo-fungus-amanita.png";

  return (
    <div className={style.container}>
      <div className={style.body}>
        <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
        <div className={style.cards}>
          <ListCardsCogumelos img={url}/>
          <ListCardsCogumelos img={url2}/>
          <ListCardsCogumelos img={url3}/>
          <ListCardsCogumelos img={url4}/>
        </div>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
      </div>
    </div>
  );
}

export default SectionCogumelos;