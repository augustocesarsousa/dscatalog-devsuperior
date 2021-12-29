import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className=" base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do produto</h1>
        <form action="">
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" className="form-control base-input"/>
                    <input type="text" className="form-control base-input"/>
                    <input type="text" className="form-control base-input"/>
                </div>
                <div className="col-lg-6">
                    <textarea name="" rows={10} className="form-control base-input"></textarea>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-danger">cancelar</button>
                <button className="btn btn-primary">salvar</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
