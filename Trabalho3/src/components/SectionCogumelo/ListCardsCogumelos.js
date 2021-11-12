import style from '../SectionCogumelo/ListCardsCogumelos.module.css'

function ListCardsCogumelos({img}) {
  return (
    <>
      <div className={style.fundoImg}>
        <img src={img} alt="congumelo" />
      </div>
    </>
  );
}

export default ListCardsCogumelos;