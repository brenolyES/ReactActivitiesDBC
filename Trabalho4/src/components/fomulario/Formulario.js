import styles from './Formulario.module.css';
import InputMask from "react-input-mask";

function Formulario({
    ButtonOne, 
    ButtonTwo, 
    ButtonThree, 
    setButtonOne, 
    setButtonTwo, 
    setButtonThree, 
    setUserID,
    resetForm,
    setList,
    list,
    UserID, 
    formik, 
    active, 
    activeForm }) {

    function deleteUser(){
        setList(list.filter(user => user.id !== UserID));
        setButtonOne('Cadastrar');
        setButtonTwo('Voltar');
        setButtonThree('Cadastrar');
    };

    const voltar = () => {
        setButtonOne('Cadastrar');
        setButtonTwo('Voltar');
        setButtonThree('Cadastrar');
    }

    return (
        <>
        {
            activeForm ?
            <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.title}>{ButtonOne}</div>
                <div className={styles.form}>

                    <div className={styles.input}>
                        <h4 htmlFor="firstName">Nome</h4>
                        <input type="text" name="firstName" id="firstName" placeholder="Digite seu nome" onChange={formik.handleChange} value={formik.values.firstName} />
                        {formik.errors.firstName ? <div className={styles.errors}>{formik.errors.firstName}</div> : null}
                    </div>

                    <div className={styles.input}>
                        <h4 htmlFor="lastName">Sobrenome</h4>
                        <input type="text" name="lastName" id="lastName" placeholder="Digite seu sobrenome" onChange={formik.handleChange} value={formik.values.lastName} />
                        {formik.errors.lastName ? <div className={styles.errors}>{formik.errors.lastName}</div> : null}
                    </div>

                    <div className={styles.input}>
                        <h4 htmlFor="email">Email</h4>
                        <input type="text" name="email" id="email" placeholder="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email ? <div className={styles.errors}>{formik.errors.email}</div> : null}
                    </div>

                    <div className={styles.input}>
                        <h4 htmlFor="address">Endereço</h4>
                        <input type="text" name="address" id="address" placeholder="Digite seu endereço" onChange={formik.handleChange} value={formik.values.address} />
                        {formik.errors.address ? <div className={styles.errors}>{formik.errors.address}</div> : null}
                    </div>

                    <div className={styles.input}>
                        <h4 htmlFor="telefone">Telefone</h4>
                        <InputMask mask="(**) ***** ****" type="text" name="cellPhoneNumber" id="cellPhoneNumber" placeholder="Digite seu telefone" onChange={formik.handleChange} value={formik.values.cellPhoneNumber} />
                        {formik.errors.cellPhoneNumber ? <div className={styles.errors}>{formik.errors.cellPhoneNumber}</div> : null}
                    </div>

                    <div className={styles.btn}>
                        <button onClick={deleteUser} type="submit">{ButtonThree}</button>
                    </div>
                </div>
            </form>
                <div className={styles.btn}>
                    <button onClick={() => {active();resetForm(); setUserID(0); voltar()}}>{ButtonTwo}</button>
                </div>
        </div> 
            : null}
        </>
    );
}

export default Formulario;


