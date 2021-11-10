import style from '../modulesCss/ListCardsCogumelos.module.css'

function ListCardsCogumelos({img}) {
  return (
    <>
      <div className={style.FundoImg}>
        <img src={img} alt="congumelo" />
      </div>
    </>
  );
}

export default ListCardsCogumelos;